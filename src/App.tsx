import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { W3Bestiary } from './pages/w3-bestiary';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/w3" element={<W3Bestiary />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
