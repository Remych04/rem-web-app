import React from 'react';
import { LeftBar } from './components/left-bar/LeftBar';
import { ContentBody } from './components/content-body/ContentBody';
import styles from './index.module.css';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LeftBar />
                <ContentBody />
            </div>
        </div>
    );
}

export default App;
