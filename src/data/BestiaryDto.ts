export interface BestiaryDto {
    bestiary_list: BestiaryCategory[];
}

export interface BestiaryCategory {
    type: string;
    monster_list: Monster[];
}

export interface Monster {
    name: string;
    edition: 'BASE' | 'HOS' | 'BAW';
}
