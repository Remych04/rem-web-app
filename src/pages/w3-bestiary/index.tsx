import React from 'react';

import bestiaryList from '../../mocks/bestiary-list.json';
import { BestiaryDto } from '../../data/BestiaryDto';
import { MonsterCategory } from '../../components/monster-list/monster-category/MonsterCategory';

export function W3Bestiary() {
    const bestiaryDto: BestiaryDto = JSON.parse(JSON.stringify(bestiaryList));

    return (
        <React.Fragment>
            {bestiaryDto.bestiary_list.map((category, index) => {
                return <MonsterCategory key={index} category={category} />;
            })}
        </React.Fragment>
    );
}
