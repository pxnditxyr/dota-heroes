import { AuthProvider } from './auth/AuthProvider';
import { AppRouter } from './routers/AppRouter';

export const DotaHeroes : React.FC = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};
