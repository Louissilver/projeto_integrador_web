import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Botao from '../botao/Botao';

interface ISecaoProps {
  titulo: string;
  texto: string;
  imagem?: string;
  labelBotao?: string;
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
    <Box display="flex" flexDirection="column">
      <Typography
        margin="0 0 2rem 0"
        variant="h4"
        color={theme.palette.primary.main}
        textAlign="center"
      >
        {titulo}
      </Typography>

      <Typography align={textAlign} color={theme.palette.secondary.dark}>
        {texto}
      </Typography>

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
