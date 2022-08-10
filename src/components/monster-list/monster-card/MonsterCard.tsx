import React from 'react';
import { Monster } from '../../../data/BestiaryDto';

type Props = {
    monster: Monster;
};

export function MonsterCard(props: Props) {
    return (
        <React.Fragment>
            <div>{props.monster.name}</div>
        </React.Fragment>
    );
}
