import React, {Component, Fragment} from 'react';

class MenuProvider extends Component {
    state = {open: false};

    toggleButtonNode = React.createRef();
    menuContainerNode = React.createRef();
    menuItemWithChildren = [];

    onOpen = ({target}) => {
        const {open} = this.state;
        if (this.findTargetInNodesArray(target)) return null;
        if (this.toggleButtonNode.current.contains(target)) {
            if (open) {
                this.setState({open: false});
                window.removeEventListener('click', this.onOpen);
                return open;
            }
            this.setState({open: true});
            return open;
        }

        this.setState({open: false});
        window.removeEventListener('click', this.onOpen);
        return open;
    };

    addNodeToList = node => {
        if (!node) return null;
        if (this.menuItemWithChildren.find(n => node === n)) return node;

        this.menuItemWithChildren.push(node);
    };

    findTargetInNodesArray = target => (this.menuItemWithChildren || []).find(node => node.contains(target))

    onToggleMenu = () => window.addEventListener('click', this.onOpen);


    render() {
        const {children, menuItems, menuComponent: MenuComponent} = this.props;
        const {open} = this.state;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                open,
                onToggleMenu: this.onToggleMenu,
                ref: this.toggleButtonNode,

            })
        );

        return (
            <Fragment>
                {childrenWithProps}
                <MenuComponent
                    menuItems={menuItems}
                    open={open}
                    ref={this.menuContainerNode}
                    menuItemWithChildren={this.menuItemWithChildren}
                    addNodeToList={this.addNodeToList}
                />
            </Fragment>
        )
    }
}

export default MenuProvider
