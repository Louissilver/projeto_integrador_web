import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProjetoProps {
  alt: string;
  imagem: string;
  titulo: string;
  cidade: string;
  descricao: string;
  to: string;
}

interface IListaProjetosProps {
  projetos: IProjetoProps[];
}

const ListaProjetos: React.FC<IListaProjetosProps> = ({ projetos }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = (to: string) => {
    navigate(`/empreendimentos/${to}`);
  };

  return (
    <Box display="flex" mt="2rem" flexWrap="wrap" width="100%">
      {projetos.map(({ alt, imagem, titulo, cidade, descricao, to }) => {
        return (
          <Card
            key={to}
            sx={{
              maxWidth: 345,
              margin: '0.4rem',
              border: `1px solid ${theme.palette.grey[300]}`,
            }}
          >
            <CardMedia component="img" alt={alt} height="140" image={imagem} />
            <CardContent
              sx={{ backgroundColor: theme.palette.background.default }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  gutterBottom
                  color={theme.palette.background.paper}
                  variant="h5"
                  component="div"
                >
                  {titulo}
                </Typography>
                <Typography
                  gutterBottom
                  color={theme.palette.grey[400]}
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
        );
      })}
    </Box>
  );
};

export default ListaProjetos;
