import React from 'react';

import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import './App.css';


const App: React.FC = () => {

    return (
        <div className="App">
            <Navbar />
            <MainContent />
        </div>
    );
};

export default App;