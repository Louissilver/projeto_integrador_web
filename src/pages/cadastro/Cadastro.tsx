import { Box, Divider, Typography, useTheme } from '@mui/material';
import Botao from '../../shared/components/botao/Botao';
import FormularioCadastro from '../../shared/components/formulario-cadastro/FormularioCadastro';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'O que é a CAP?',
    texto:
      'Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.',
    imagem: undefined,
    botao: 'Entre em contato',
    textAlign: 'center',
  },
];

export const Cadastro: React.FC = () => {
  const theme = useTheme();

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column" alignItems="center">
        {secoes.map(({ titulo, texto, imagem, botao, textAlign }, index) => {
          return (
            <Secao
              key={'secao-' + index}
              titulo={titulo}
              texto={texto}
              imagem={imagem}
              labelBotao={botao}
              textAlign={textAlign === 'justify' ? 'justify' : 'center'}
            />
          );
        })}

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
            color={theme.palette.background.paper}
            sx={{
              textTransform: 'uppercase',
            }}
          >
            Ou
          </Typography>
        </Divider>

        <Typography
          margin="1rem 0 2rem 0"
          variant="h5"
          color={theme.palette.background.paper}
          textAlign="center"
        >
          Cadastre-se!
        </Typography>

        <FormularioCadastro />

        <Botao label="Enviar" />
      </Box>
    </LayoutBaseDePagina>
  );
};
