import { useTheme, useMediaQuery, Container } from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useResolvedPath } from 'react-router-dom';

export const LayoutBaseDePagina: React.FC = ({ children }) => {
  const theme = useTheme();
  const resolvedPath = useResolvedPath('/inicio');
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      minHeight="90%"
    >
      {!match ? (
        <Container maxWidth={smDown ? 'sm' : mdDown ? 'md' : 'lg'}>
          <Box
            overflow="auto"
            padding={
              smDown
                ? theme.spacing(1)
                : mdDown
                ? theme.spacing(2)
                : theme.spacing(4)
            }
          >
            {children}
          </Box>
        </Container>
      ) : (
        <Box>{children}</Box>
      )}
    </Box>
  );
};
