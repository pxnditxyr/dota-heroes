import { Redirect, RouteComponentProps, useParams } from 'react-router-dom'

import { HeroCard } from './HeroCard';

import { Hero } from '../../interfaces/interfaces';
import { getHeroById } from '../../selectors/getHeroById'
import { useMemo } from 'react';

interface Props extends RouteComponentProps {

}

export const HeroScreen : React.FC<Props> = ({ history }) => {
    const { heroId } : { heroId : string } = useParams();

    const hero : Hero = useMemo( () => getHeroById( heroId ), [ heroId ] )

    if ( hero.id === "not-found" )
        return <Redirect to="/" />

    const handleBack = () => {
        if ( history.length < 3 ) 
            history.push( "/" )
        else
            history.goBack();
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
