import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Botao from '../botao/Botao';
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
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexDirection="column" margin="0 0 2rem 0">
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

      {labelBotao && <Botao label={labelBotao} />}
    </Box>
  );
};

export default Secao;
