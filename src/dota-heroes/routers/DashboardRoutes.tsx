import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { StrenghtScreen } from '../components/strenght/StrenghtScreen';
import { AgilityScreen } from '../components/agility/AgilityScreen';
import { IntelligenceScreen } from '../components/intelligence/IntelligenceScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/strenght" component={ StrenghtScreen } />
                <Route exact path="/agility" component={ AgilityScreen } />
                <Route exact path="/intelligence" component={ IntelligenceScreen } />
                <Route exact path="/hero/:heroId" component={ HeroScreen } />
                <Redirect to="/strenght" />
            </Switch>
        </>
    )
}
