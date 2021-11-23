import { Link } from 'react-router-dom'


interface Props {
    id: string;
    name: string;
    another_name: string;
    attribute: string;
    attack: string;
    information: string;
    cardType: string;
}

const HERO_IMAGES = require.context( "../../assets/images/heroes", true );

export const HeroCard : React.FC<Props> = ({
    id,
    name,
    another_name,
    attribute,
    attack,
    information,
    cardType,
}) => {
    return (
        <article className={ `card ${ cardType }` }>
            <section className="card__header">
                <div className="card__image">
                    <img src={ HERO_IMAGES( `./${ id }.jpg` ).default } alt={ `${ id }` } />
                </div>
            </section>
            <section className="card__body">
                <h3> { name } </h3>
                <span> { another_name } </span>
                <p> { attribute } </p>
                <p> { attack } </p>
            </section>
            <section className="card__footer">
                <p> { information } </p>
                {
                    cardType === "small"
                    &&
                    <Link to={ `/hero/${ id }` }>
                        More
                    </Link>
                }
            </section>
        </article>
    )
}
