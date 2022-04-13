import { Box } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import ListaProjetos from '../../shared/components/lista-projetos/ListaProjetos';

const secoes = [
  {
    titulo: 'Nossos Empreendimentos',
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

const projetos = [
  {
    alt: 'Texto alternativo',
    imagem:
      'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Noturna_004_HR-1-2048x1365.jpg',
    titulo: 'Ibiza',
    cidade: 'Novo Hamburgo',
    descricao:
      'Conheça o Ibiza e viva um olhar para o futuro!',
    to: 'ibiza',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/5c6e9760fc5e8770ba021f967bd8847a.jpeg',
    titulo: 'Nilo Square',
    cidade: 'Novo Hamburgo',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'nilo-square',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/c03769db67ef2a5335db630261be18e7.jpeg',
    titulo: 'Go Carlos Gomes',
    cidade: 'Porto Alegre',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'go-carlos-gomes',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/57a40ce0e11e802f8524494b05d62b31.jpeg',
    titulo: 'Arte Country Club',
    cidade: 'São Leopoldo',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'arte-country-club',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/ad9137cd77275728fd09807a4070db57.jpeg',
    titulo: 'Hill Side',
    cidade: 'Ivoti',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'hill-side',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/2a65ec17807d9d661710c3e0a53dd1c7.jpeg',
    titulo: 'Seen Boa Vista',
    cidade: 'Sapucaia do Sul',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'seen-boa-vista',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/e54e97306376b76ba3789b4ec80fdd77.jpeg',
    titulo: 'Go Rio Branco',
    cidade: 'Novo Hamburgo',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'go-rio-branco',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/eeaf0623930f4d8f2c6567ea00db0911.jpeg',
    titulo: 'Botanique Résidence',
    cidade: 'Esteio',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'botanique-residence',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/a5039385a4fdd69ea877a38f94b5c185.jpeg',
    titulo: 'Grand Park Lindóia',
    cidade: 'Estância Velha',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'grand-park-lindoia',
  },
  {
    alt: 'Texto alternativo',
    imagem:
      'https://melnick.com.br/uploads/projects/0707c532d24ba1ceadfadbc681351225.jpeg',
    titulo: 'Casaviva',
    cidade: 'Canoas',
    descricao:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    to: 'casaviva',
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

      <ListaProjetos projetos={projetos}></ListaProjetos>
    </LayoutBaseDePagina>
  );
};
