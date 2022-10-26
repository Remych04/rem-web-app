import styles from './index.module.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { Tasks } from '../../pages/tasks/tasks';
import { W3Bestiary } from '../../pages/w3-bestiary';
import React from 'react';

export function ContentBody() {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/w3" element={<W3Bestiary />} />
            </Routes>
        </div>
    );
}
