import { Box, Typography, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Empreendimentos: React.FC = () => {
  const theme = useTheme();

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.primary.main}
          textAlign="center"
        >
          Nossos projetos
        </Typography>

        <Typography align="justify" color={theme.palette.secondary.dark}>
          Fusce sodales consectetur dolor, ut tristique odio pharetra eu.
          Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia
          eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta
          ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis
          pretium dui convallis sit amet.
        </Typography>
      </Box>
    </LayoutBaseDePagina>
  );
};
