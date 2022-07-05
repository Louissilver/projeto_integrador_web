import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Titulo from '../titulo/Titulo';

interface ISecaoProps {
  titulo?: string | undefined;
  subtitulo?: string | undefined;
  texto?: string | undefined;
  imagem?: string | undefined;
  labelBotao?: string | undefined;
  textAlign?: 'justify' | 'center';
  titleAlign?: 'justify' | 'center';
  subtitleAlign?: 'justify' | 'center';
  to?: string | undefined;
}

const Secao: React.FC<ISecaoProps> = ({
  titulo,
  subtitulo,
  texto,
  imagem,
  labelBotao,
  textAlign,
  titleAlign,
  subtitleAlign,
  to,
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexDirection="column" margin="0 0 2rem 0" width="100%">
      {titulo && <Titulo titulo={titulo} align={titleAlign} />}

      {subtitulo && (
        <Typography
          align={subtitleAlign}
          color={theme.palette.secondary.dark}
          margin="1rem 0 1rem 0"
          variant="h5"
          component="h2"
          sx={{ whiteSpace: 'normal' }}
        >
          {subtitulo}
        </Typography>
      )}

      {texto && (
        <Typography
          align={textAlign}
          color={theme.palette.secondary.dark}
          paragraph
          component="p"
          sx={{ whiteSpace: 'normal' }}
          dangerouslySetInnerHTML={{ __html: `${texto}` }}
        ></Typography>
      )}

      {imagem && (
        <Box width={mdDown ? '100%' : '50%'} margin="2rem auto 0">
          <img width="100%" src={imagem} />
        </Box>
      )}

      {labelBotao && (
        <Button
          variant="contained"
          size="large"
          sx={{
            color: theme.palette.secondary.contrastText,
            width: mdDown ? '95%' : '40%',
            textTransform: 'uppercase',
            fontWeight: 'lighter',
            margin: '2rem auto',
          }}
        >
          <Link
            href={to}
            target="_blank"
            sx={{
              width: '100%',
              color: theme.palette.secondary.contrastText,
              margin: 0,
              padding: 0,
              textDecoration: 'none',
            }}
          >
            {labelBotao}
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default Secao;
