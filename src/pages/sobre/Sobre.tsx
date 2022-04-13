import { Box } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'Nossa história e propósito',
    texto: ` A CAP foi fundada pelo Maike Terres e Lucas Armando em 2019, teve origem a partir de uma vontade imensa de criar um ambiente próspero onde tivessem oportunidades para todos que estivessem dispostos a crescer, tendo como objetivo principal o desenvolvimento de pessoas para se tornarem excelentes corretores de imóveis, transformando a visão do mercado sobre esse profissional.
    Desde o início da empresa trabalhamos com VENDA de imóveis, hoje possuímos também um projeto de marketing digital que permite o desenvolvimento da empresa através do online em paralelo ao físico.
    
    A Equipe da CAP é formada por aproximadamente 45 pessoas, sendo parte administrativa e parte comercial.
    Possuímos hoje imóveis em 15 cidades, somando mais de 100 empreendimentos ativos.
    `,
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
