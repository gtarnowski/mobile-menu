import React from 'react';
import MenuItem from '../MenuItem'
import './index.css'

const MobileMenu = React.forwardRef(({menuItems, open, menuItemWithChildren, addNodeToList}, ref) => {
    return (
        <div className="MobileMenu" data-open={open} ref={ref}>
            <div data-open={false}>
                {(menuItems || []).map((item, key) => (
                    <MenuItem
                        key={key}
                        menuItemWithChildren={menuItemWithChildren}
                        addNodeToList={addNodeToList}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
});

export default MobileMenu
