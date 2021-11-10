import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/interfaces';

export const getHeroesBySearch : ( search : string ) => Hero[] = ( search ) => {

    if ( search === "" )
        return heroes
    search = search.toLocaleLowerCase();
    return heroes.filter( hero => hero.name.toLocaleLowerCase().includes( search ) || hero.attack.toLocaleLowerCase().includes( search ) || hero.another_name.toLocaleLowerCase().includes( search ) );
}
