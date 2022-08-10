import React from 'react';
import { Monster } from '../../../data/BestiaryDto';

import styles from './index.module.css';

type Props = {
    monster: Monster;
};

export function MonsterCard(props: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <p>{props.monster.name}</p>
            </div>
        </div>
    );
}
