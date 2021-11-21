import {
    Route,
    Routes,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { StrengthScreen } from '../components/strength/StrengthScreen';
import { AgilityScreen } from '../components/agility/AgilityScreen';
import { IntelligenceScreen } from '../components/intelligence/IntelligenceScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="strenght" element={ <StrengthScreen /> } />
                <Route path="agility" element={ <AgilityScreen /> } />
                <Route path="intelligence" element={ <IntelligenceScreen /> } />
                <Route path="search" element={ <SearchScreen /> } />
                <Route path="hero/:heroId" element={ <HeroScreen /> } />

                <Route path="/" element={ <StrengthScreen /> } />
            </Routes>
        </>
    )
}
