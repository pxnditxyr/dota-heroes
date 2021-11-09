import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route path="/" component={ DashboardRoutes } />
            </Switch>
        </Router>
    );
};
