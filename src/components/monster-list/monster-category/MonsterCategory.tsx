import React from 'react';
import { BestiaryCategory } from '../../../data/BestiaryDto';
import { MonsterCard } from '../monster-card/MonsterCard';

import styles from './index.module.css';

type Props = {
    category: BestiaryCategory;
};

export function MonsterCategory(props: Props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{props.category.type}</h1>
            <div className={styles.list}>
                {props.category.monster_list.map((monster, index) => {
                    return <MonsterCard key={index} monster={monster} />;
                })}
            </div>
        </div>
    );
}
