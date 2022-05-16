import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SimpleAccordion from '../../shared/components/acordeao/Acordeao';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'Trabalhe conosco',
    texto:
      'Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.',
    imagem: undefined,
    botao: 'Quero me candidatar',
    textAlign: 'center',
    to: 'https://web.whatsapp.com/send?phone=5551999282800&text=Oi%2C+Maike...',
  },
];

const questoes = [
  {
    id: 'questao-1',
    titulo: 'Qual a primeira pergunta do FAQ?',
    resposta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pretium lacus. Praesent purus elit, tincidunt eu dictum id, aliquet ac leo. Maecenas mollis consequat ante sit amet viverra. Quisque a fermentum turpis, quis viverra lectus. Nullam sodales justo quis eros molestie lacinia. Phasellus sem dolor, auctor vel tellus sed, lobortis accumsan risus. Nullam libero odio, hendrerit quis luctus in, blandit in nisi.',
  },
  {
    id: 'questao-2',
    titulo: 'Qual a segunda pergunta do FAQ?',
    resposta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pretium lacus. Praesent purus elit, tincidunt eu dictum id, aliquet ac leo. Maecenas mollis consequat ante sit amet viverra. Quisque a fermentum turpis, quis viverra lectus. Nullam sodales justo quis eros molestie lacinia. Phasellus sem dolor, auctor vel tellus sed, lobortis accumsan risus. Nullam libero odio, hendrerit quis luctus in, blandit in nisi.',
  },
  {
    id: 'questao-3',
    titulo: 'Qual a terceira pergunta do FAQ?',
    resposta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pretium lacus. Praesent purus elit, tincidunt eu dictum id, aliquet ac leo. Maecenas mollis consequat ante sit amet viverra. Quisque a fermentum turpis, quis viverra lectus. Nullam sodales justo quis eros molestie lacinia. Phasellus sem dolor, auctor vel tellus sed, lobortis accumsan risus. Nullam libero odio, hendrerit quis luctus in, blandit in nisi.',
  },
  {
    id: 'questao-4',
    titulo: 'Qual a quarta pergunta do FAQ?',
    resposta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pretium lacus. Praesent purus elit, tincidunt eu dictum id, aliquet ac leo. Maecenas mollis consequat ante sit amet viverra. Quisque a fermentum turpis, quis viverra lectus. Nullam sodales justo quis eros molestie lacinia. Phasellus sem dolor, auctor vel tellus sed, lobortis accumsan risus. Nullam libero odio, hendrerit quis luctus in, blandit in nisi.',
  },
  {
    id: 'questao-5',
    titulo: 'Qual a quinta pergunta do FAQ?',
    resposta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia pretium lacus. Praesent purus elit, tincidunt eu dictum id, aliquet ac leo. Maecenas mollis consequat ante sit amet viverra. Quisque a fermentum turpis, quis viverra lectus. Nullam sodales justo quis eros molestie lacinia. Phasellus sem dolor, auctor vel tellus sed, lobortis accumsan risus. Nullam libero odio, hendrerit quis luctus in, blandit in nisi.',
  },
];

export const Contato: React.FC = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column" alignItems="center">
        {secoes.map(
          ({ titulo, texto, imagem, botao, textAlign, to }, index) => {
            return (
              <Secao
                key={'secao-' + index}
                titulo={titulo}
                texto={texto}
                imagem={imagem}
                labelBotao={botao}
                textAlign={textAlign === 'justify' ? 'justify' : 'center'}
                to={to}
              />
            );
          }
        )}

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
        <Box mt="5rem" width={mdDown ? '100' : '80%'}>
          <SimpleAccordion questoes={questoes} />
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
