import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/interfaces';

export const getHeroById : ( id : string ) => Hero = ( id : string ) => {
    const findedHero : Hero | undefined = heroes.find( hero => hero.id === id );

    const hero : Hero = findedHero !== undefined ? findedHero : {
        'id': "not-found",
        'name': "",
        'another_name': "",
        'attribute': "",
        'attack': "",
        'information': "",
    };
    return hero;
}
