import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';

import { useForm } from '../../hooks/useForm';
import { getHeroesBySearch } from '../../selectors/getHeroesBySearch';

interface FormData {
    searchText: string;
};

export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { q } = queryString.parse( location.search )
    const initialSearchText : string = ( q ) ? q.toString() : "";

    const { searchText, handleInputChange } = useForm<FormData>({
        searchText: initialSearchText,
    });

    const heroesFiltered = useMemo( () => getHeroesBySearch( initialSearchText ), [ initialSearchText ] )

    const handleSearch = ( event : React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        navigate( `?q=${ searchText }` );
    }

    return (
        <div>
            <h1> Search Screen </h1>
            <hr />

            <form
                onSubmit={ handleSearch }
            >
                <input 
                    name="searchText"
                    type="text"
                    placeholder="Search your Hero"
                    className="search-input"
                    value={ searchText }
                    onChange={ handleInputChange }
                />
                <button type="submit"> Search </button>
            </form>
            <div className="gallery">
                <h4> Results </h4>
                <hr />
                {
                    ( q === "" )
                    &&
                    <div className="alert">
                        Search a hero
                    </div>
                }
                {
                    ( q !== "" && heroesFiltered.length === 0 )
                    &&
                    <div className="alert">
                        No Hero was found with the text { initialSearchText }
                    </div>

                }
                {
                    heroesFiltered.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                            cardType="small"
                        />
                    ))
                }
            </div>
        </div>
    );
};
