import { useTheme } from '@mui/material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Inicio: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutBaseDePagina>
      <Box
        display="flex"
        flexDirection={smDown ? 'column' : mdDown ? 'column' : 'row'}
        alignItems={smDown ? 'start' : mdDown ? 'start' : 'center'}
        height="100%"
        sx={{
          backgroundImage: {
            md: 'linear-gradient( to right, #F93822 0%, #F93822 35%, #00263E 35.1%, #00263E 100% )',
            xs: 'linear-gradient(  to bottom, #F93822 0%, #F93822 52%, #00263E 52.1%, #00263E 100% )',
          },
        }}
      >
        <Typography
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          width="36%"
          align="left"
          variant="h1"
          fontSize={smDown ? '6rem' : mdDown ? '6rem' : '10rem'}
          padding={smDown ? '2rem' : mdDown ? '2rem' : '1rem 3rem'}
        >
          Seja bem - vindo
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          width="64%"
          variant="h1"
          fontSize={smDown ? '6rem' : mdDown ? '6rem' : '8rem'}
          padding={smDown ? '2rem' : mdDown ? '2rem' : '5rem 2rem'}
        >
          Entender <br /> Capacitar <br /> Realizar
          
        </Typography>
      </Box>
    </LayoutBaseDePagina>
  );
};
