import React from 'react';
import './App.css';
import FirstScreen from './components/first-screen/FirstScreen';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/product-list/product-list';
import Product from './components/product/product';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <FirstScreen />
                <Sidebar />
                <ProductList />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
