import { Box } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'Nossos projetos',
    texto: `Fusce sodales consectetur dolor, ut tristique odio pharetra eu.
      Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia
      eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta
      ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis
      pretium dui convallis sit amet.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'center',
  },
];

export const Empreendimentos: React.FC = () => {
  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
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
      </Box>
    </LayoutBaseDePagina>
  );
};
