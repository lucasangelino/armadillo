import React from 'react';
import '../assets/styles/App.scss'

// Components
// https://github.com/platzi/curso-frontend-escuelajs
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categries from '../components/Categories.jsx';
import Carousel from '../components/Carousel.jsx';
import Item from '../components/Item.jsx';

const App = () => {
    return(
        <div className="App">
            <Header />
            <Search />
            <Categries>
                <Carousel>
                    <Item />
                </Carousel>
            </Categries>
        </div>
    )
};

export default App;