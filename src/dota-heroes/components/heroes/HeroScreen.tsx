import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { HeroCard } from './HeroCard';

import { Hero } from '../../interfaces/interfaces';
import { getHeroById } from '../../selectors/getHeroById'
import { useMemo } from 'react';


export const HeroScreen = () => {

    console.log( "Holo" );

    const params = useParams();
    const navigate = useNavigate();

    const hero : Hero = useMemo( () => getHeroById( params.heroId || "not-found" ), [ params.heroId ] );
    console.log( hero );

    if ( hero.id === "not-found" )
        return <Navigate to="/" />

    const handleBack = () => {
        if ( navigate.length < 3 )
            navigate( "/" )
        else
            navigate( -1 );
    }
    
    return (
        <>
            <h1> Hero Screen </h1>
            <hr />

            <HeroCard 
                { ...hero }
                cardType="big"
            />

            <button onClick={ handleBack }> Back </button>
        </>
    )
}
