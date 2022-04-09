import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Botao from '../botao/Botao';
import Titulo from '../titulo/Titulo';

interface ISecaoProps {
  titulo?: string | undefined;
  texto?: string | undefined;
  imagem?: string | undefined;
  labelBotao?: string | undefined;
  textAlign: 'justify' | 'center';
}

const Secao: React.FC<ISecaoProps> = ({
  titulo,
  texto,
  imagem,
  labelBotao,
  textAlign,
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexDirection="column" margin="0 0 2rem 0">
      {titulo && <Titulo titulo={titulo} />}

      {texto && (
        <Typography align={textAlign} color={theme.palette.secondary.dark}>
          {texto}
        </Typography>
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
