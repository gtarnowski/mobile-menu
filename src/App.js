import React, {Component} from 'react';
import MobileMenu from './MobileMenu';
import ToggleMenu from './ToggleMenu';
import MenuProvider from './MenuProvider';

const children = [
    {name: 'Item1', url: '/item1'},
    {name: 'Item2', url: '/item2'},
]

const children2 = [
    {name: 'Store', url: '/store'},
    {name: 'Shop', url: '/shop'}
]

const items = [
    {name: 'Home', url: '/home'},
    {name: 'Items', url: '/items', children},
    {name: 'About', url: '/about'},
    {name: 'Stores', url: '/stores', children: children2}
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuProvider
                    menuComponent={MobileMenu}
                    menuItems={items}
                >
                    <ToggleMenu/>
                </MenuProvider>
            </div>
        );
    }
}

export default App;
