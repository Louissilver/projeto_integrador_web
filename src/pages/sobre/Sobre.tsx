import { Box } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: undefined,
    texto: ' Nosso propósito como empresa é oferecer um serviço de excelência nas negociações imobiliárias. Acima de tudo capacitando o profissional para entregar um resultado de qualidade e proporcionar a oportunidade de realizar seus próprios objetivos pessoais e profissionais de acordo com a sua ambição.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },


  {
    titulo: 'Nossa Missão',
    texto: 'Ser agente catalisador de sonhos de colaboradores e clientes.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'center',
  },
  {
    titulo: 'Nossa Visão',
    texto: 'Ser referência de qualidade e eficiência no mercado imobiliário do RS até 2023.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'center',
  },
  {
    titulo: 'Nossos Valores',
    texto: 'Entender, capacitar e realizar.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'center',
  },
];

export const Sobre: React.FC = () => {
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
