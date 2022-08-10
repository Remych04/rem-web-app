import React from 'react';

import bestiaryList from '../../mocks/bestiary-list.json';
import { BestiaryDto } from '../../data/BestiaryDto';

export function W3Bestiary() {
    const bestiary: BestiaryDto = JSON.parse(JSON.stringify(bestiaryList));

    return (
        <React.Fragment>
            {bestiary.beasts.map((beast, index) => {
                return <div key={index}>{beast}</div>;
            })}
        </React.Fragment>
    );
}
