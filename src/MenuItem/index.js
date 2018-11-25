import React, {Component} from 'react';
import './index.css';

class MenuItem extends Component {
    state = {
        open: false,
    };

    onOpen = () => this.setState({open: !this.state.open});

    render() {
        const {
            state: {open},
            props: {children, addNodeToList, url, name},
        } = this;

        return children ? (
            <div className="MenuItem" ref={ref => addNodeToList(ref)} onClick={this.onOpen}>
                <div className="item">
                    {name}
                </div>
                <div className={`children-container ${open ? 'opened' : ''}`}>
                    {children.map(({name: childName, url: childUrl}, key) => (
                        <a
                            className="children-item"
                            href={childUrl}
                            onClick={e => e.stopPropagation()}
                            key={key}
                        >
                            {childName}
                        </a>
                    ))}
                </div>
            </div>
        ) : (
            <a href={url} className="MenuItem">{name}</a>
        )
    }
}

export default MenuItem;
