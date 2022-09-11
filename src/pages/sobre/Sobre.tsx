import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'Nossa história e propósito',
    texto: `&nbsp;&nbsp;&nbsp;&nbsp;A CAP foi fundada pelo Maike Terres e Lucas Armando em 2019, teve origem a partir de uma vontade imensa de criar um ambiente próspero onde tivessem oportunidades para todos que estivessem dispostos a crescer, tendo como objetivo principal o desenvolvimento de pessoas para se tornarem excelentes corretores de imóveis, transformando a visão do mercado sobre esse profissional.
    Desde o início da empresa trabalhamos com VENDA de imóveis, hoje possuímos também um projeto de marketing digital que permite o desenvolvimento da empresa através do online em paralelo ao físico.
    
    A Equipe da CAP é formada por aproximadamente 45 pessoas, sendo parte administrativa e parte comercial.
    Possuímos hoje imóveis em 15 cidades, somando mais de 100 empreendimentos ativos.
    `,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
    titleAlign: 'center',
  },
  {
    titulo: undefined,
    texto:
      '&nbsp;&nbsp;&nbsp;&nbsp;Nosso propósito como empresa é oferecer um serviço de excelência nas negociações imobiliárias. Acima de tudo capacitando o profissional para entregar um resultado de qualidade e proporcionar a oportunidade de realizar seus próprios objetivos pessoais e profissionais de acordo com a sua ambição.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
    titleAlign: 'center',
  },
];

const valores = [
  {
    titulo: 'Nossa Missão',
    subtitulo: 'Ser agente catalisador de sonhos de colaboradores e clientes.',
    imagem: undefined,
    botao: undefined,
    subtitleAlign: 'center',
    titleAlign: 'center',
  },
  {
    titulo: 'Nossa Visão',
    subtitulo:
      'Ser referência de qualidade e eficiência no mercado imobiliário do RS até 2023.',
    imagem: undefined,
    botao: undefined,
    subtitleAlign: 'center',
    titleAlign: 'center',
  },
  {
    titulo: 'Nossos Valores',
    subtitulo: 'Entender, capacitar e realizar.',
    imagem: undefined,
    botao: undefined,
    subtitleAlign: 'center',
    titleAlign: 'center',
  },
];

export const Sobre: React.FC = () => {
  const theme = useTheme();
  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column">
          {valores.map(
            (
              { titulo, subtitulo, imagem, botao, subtitleAlign, titleAlign },
              index
            ) => {
              return (
                <Secao
                  key={'secao-' + index}
                  titulo={titulo}
                  subtitulo={subtitulo}
                  imagem={imagem}
                  labelBotao={botao}
                  subtitleAlign={
                    subtitleAlign === 'justify' ? 'justify' : 'center'
                  }
                  titleAlign={titleAlign === 'justify' ? 'justify' : 'center'}
                />
              );
            }
          )}
        </Box>
        <Divider color={theme.palette.background.paper} />
        <Box mt="2rem" display="flex" flexDirection="column">
          {secoes.map(
            (
              { titulo, texto, imagem, botao, textAlign, titleAlign },
              index
            ) => {
              return (
                <Secao
                  key={'secao-' + index}
                  titulo={titulo}
                  texto={texto}
                  imagem={imagem}
                  labelBotao={botao}
                  textAlign={textAlign === 'justify' ? 'justify' : 'center'}
                  titleAlign={titleAlign === 'justify' ? 'justify' : 'center'}
                />
              );
            }
          )}
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};