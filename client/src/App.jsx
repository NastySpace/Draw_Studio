import React from 'react';
import './App.css';
import FirstScreen from './components/first-screen/FirstScreen';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <FirstScreen />

            </main>
        </div>
    );
}

export default App;
