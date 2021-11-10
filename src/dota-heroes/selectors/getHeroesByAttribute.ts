import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/interfaces';

export const getHeroesByAttribute : ( attribute : string ) => Hero[] = ( attribute : string ) => {
    return heroes.filter( hero => hero.attribute === attribute )
}
