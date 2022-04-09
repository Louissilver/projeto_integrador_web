import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import SimpleAccordion from '../../shared/components/acordeao/Acordeao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Contato: React.FC = () => {
  const theme = useTheme();
  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.primary.main}
          textAlign="center"
          sx={{
            fontWeight: '400',
          }}
        >
          Trabalhe conosco
        </Typography>

        <Typography align="center" color={theme.palette.secondary.dark}>
          Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
          purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
          sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
          et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
          odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
          lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
        </Typography>

        <Divider
          flexItem
          light={false}
          sx={{
            '&::before, &::after': {
              borderColor: 'background.paper',
            },
          }}
        >
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            textAlign="center"
            sx={{
              fontWeight: '400',
            }}
          >
            FAQ
          </Typography>
        </Divider>
        <Box mt="5rem" width="80%">
          <SimpleAccordion />
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
