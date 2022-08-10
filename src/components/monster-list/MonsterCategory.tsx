import React from 'react';
import { BestiaryCategory } from '../../data/BestiaryDto';
import { MonsterCard } from './MonsterCard';

type Props = {
    category: BestiaryCategory;
};

export function MonsterCategory(props: Props) {
    return (
        <React.Fragment>
            <div>{props.category.type}</div>
            {props.category.monster_list.map((monster, index) => {
                return <MonsterCard key={index} monster={monster} />;
            })}
        </React.Fragment>
    );
}
