import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface IProjetoProps {
  to: string;
  titulo: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
}

export interface IListaProjetosProps {
  projetos: IProjetoProps[];
}

const ListaProjetos: React.FC<IListaProjetosProps> = ({ projetos }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const handleClick = (to: string) => {
    navigate(`/empreendimentos/${to}`);
  };

  return (
    <Box
      display="flex"
      flexDirection={smDown ? 'column' : 'row'}
      alignItems={smDown ? 'center' : 'center'}
      flexWrap="wrap"
      width="100%"
      margin="2rem auto"
    >
      <Grid container direction="row">
        {projetos.map(({ alt, thumb, titulo, cidade, descricao, to }) => {
          return (
            <Grid key={to} item xs={12} md={6}>
              <Card
                sx={{
                  maxWidth: '80%',
                  margin: '2rem auto',
                  border: `px solid ${theme.palette.grey[300]}`,
                  filter: 'grayscale(100%)',
                  '&:hover': {
                    filter: 'grayscale(0)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={alt}
                  height="280"
                  image={thumb}
                  onClick={() => handleClick(to)}
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    height: 120,
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      gutterBottom
                      color={theme.palette.secondary.main}
                      variant="h5"
                      component="div"
                    >
                      {titulo}
                    </Typography>
                    <Typography
                      gutterBottom
                      color={theme.palette.grey[500]}
                      variant="caption"
                      component="div"
                    >
                      {cidade}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {descricao}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ backgroundColor: theme.palette.background.default }}
                >
                  <Button size="small" onClick={() => handleClick(to)}>
                    Ver mais
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListaProjetos;
