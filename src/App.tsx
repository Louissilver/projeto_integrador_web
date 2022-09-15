import { HashRouter } from 'react-router-dom';
import './shared/forms/TraducoesYup';
import { AppRoutes } from './routes';
import BarraDeAplicativos from './shared/components/barra-de-aplicativos/BarraDeAplicativos';
import { Rodape } from './shared/components/rodape/Rodape';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <BarraDeAplicativos>
          <AppRoutes />
          <Rodape />
        </BarraDeAplicativos>
      </HashRouter>
    </AppThemeProvider>
  );
};
