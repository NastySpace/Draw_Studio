import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import FirstScreen from './components/first-screen/FirstScreen';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
                <FirstScreen />
            </header>
            <main>
                <AppRouter />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
