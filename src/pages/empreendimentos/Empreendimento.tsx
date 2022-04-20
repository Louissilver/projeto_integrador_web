import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Carrossel from '../../shared/components/carrossel/Carrossel';
import Secao from '../../shared/components/secao/Secao';
import Titulo from '../../shared/components/titulo/Titulo';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const projetos = [
  {
    id: 'ibiza',
    titulo: 'Ibiza',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'nilo-square',
    titulo: 'Nilo Square',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'go-carlos-gomes',
    titulo: 'Go Carlos Gomes',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'arte-country-club',
    titulo: 'Arte Country Club',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'hill-side',
    titulo: 'Hill Side',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'seen-boa-vista',
    titulo: 'Seen Boa Vista',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'go-rio-branco',
    titulo: 'Go Rio Branco',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'botanique-residence',
    titulo: 'Botanique Residence',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'grand-park-lindoia',
    titulo: 'Grand Park Lindoia',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
  {
    id: 'casaviva',
    titulo: 'Casaviva',
    texto: `Chegou a hora de conhecer o nosso mais novo lançamento em Novo Hamburgo, 
        o Primeiro Casa Verde E Amarela Da Região Sul Com Certificação De Construção Sustentável (Aqua – Hqe). Localizado no bairro Operário, 
        o empreendimento conta com apartamentos 1 e 2 dormitórios de até 56m², sacada com churrasqueira e uma ampla área de lazer.`,
    items: [
      {
        nome: 'Random nome #1',
        descricao: 'Probably the most random thing you have ever seen!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Frente_003_HR-2048x1576.jpg',
      },
      {
        nome: 'Random nome #2',
        descricao: 'Hello World!',
        imagem:
          'https://www.lopes.com.br/blog/wp-content/uploads/2014/09/lancamento-la-vie-perdizes-fachada-6.jpg',
      },
    ],
    textAlign: 'justify',
  },
];

export const Empreendimento: React.FC = () => {
  const location = useLocation();

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        {projetos
          .filter(
            (item) =>
              item.id === location.pathname.replace('/empreendimentos/', '')
          )
          .map((projeto) => (
            <>
              <Titulo key={projeto.id} titulo={projeto.titulo} />
              <Carrossel items={projeto.items} />
              <br />
              <Secao texto={projeto.texto} textAlign="justify" />
            </>
          ))}
      </Box>
    </LayoutBaseDePagina>
  );
};
