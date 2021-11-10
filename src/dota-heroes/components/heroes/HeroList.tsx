import { useMemo } from 'react';

import { HeroCard } from './HeroCard';

import { getHeroesByAttribute } from '../../selectors/getHeroesByAttribute';

interface Props {
    attribute : string;
};

export const HeroList : React.FC<Props> = ({ attribute }) => {
    const heroes = useMemo( () => getHeroesByAttribute( attribute ), [ attribute ] )

    return (
        <ul>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                        cardType="small"
                    />
                ))
            }
        </ul>
    );
};
