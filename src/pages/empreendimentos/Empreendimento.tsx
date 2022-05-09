import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Carrossel from '../../shared/components/carrossel/Carrossel';
import Secao from '../../shared/components/secao/Secao';
import Titulo from '../../shared/components/titulo/Titulo';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const projetos = [
  {
    id: 'ibiza',
    titulo: 'RESIDENCIAL IBIZA',
    texto: `<b>SOBRE O RESIDENCIAL IBIZA</b> </br> </br> A mudança que você quer ver no mundo, começa pela escolha do seu lar. 
    Conheça o Ibiza, o primeiro empreendimento Casa Verde e Amarela com Certificação de Construção Sustentável da Região Sul. 
    Viva um olhar para o futuro entre os churrascos na sacada e os mergulhos na piscina. Mais que um apartamento, um novo jeito de ressignificar a sua vida.</br></br>
    <b> FICHA TÉCNICA </b>  </br>
    <b>Áreas de Uso Comum:</b> Portaria, Salão de festas com churrasqueira, Espaço Pet, Playground, Piscinas adulto e infantil, Bicicletário;</br>
    <b>Total de Unidades:</b> 27 apartamentos de 1 dormitório e 216 apartamentos de 2 dormitórios;</br>
    <b>Total de vagas de estacionamento:</b> 72 vagas de estacionamento cobertas e 171 vagas de estacionamento descobertas;</br>
    <b>Área real privativa dos apartamentos:</b> 44,53 m² no 1 dormitório. No 2 dormitórios, temos opções de planta com 51,13 m² e 56,48 m²;</br>
    Prazo de obra: 36 meses a partir do desembolso da Caixa Econômica Federal. Incorporação Registrada sob nº R1 – 131.102; </br>
    <b>Localização:</b> Rua Projetada Continuação da Henri Dunant, nº801 – Bairro Operário - Novo Hamburgo. </br></br>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5222378551657!2d-51.135444583943524!3d-29.67563522118257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943a1efafef2d%3A0x76d23431ac816a58!2sR.%20Henri%20Dunant%20-%20Centro%2C%20Novo%20Hamburgo%20-%20RS%2C%2093315-550!5e0!3m2!1spt-PT!2sbr!4v1651531740064!5m2!1spt-PT!2sbr" 
    width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
    `,
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
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/002_IB_Fachadas_Noturna_004_HR-1-2048x1365.jpg',
      },
      {
        nome: 'Random nome #3',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/003_IB_Piscina_OBS_004_HR-2048x1205.jpg',
      },
      {
        nome: 'Random nome #4',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/006_IB_Festas_004_HR-2048x1024.jpg',
      },
      {
        nome: 'Random nome #5',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/013_IB_Pet_Place_002_HR2-2048x1024.jpg',
      },
      {
        nome: 'Random nome #6',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/014_IB_Playground_002_HR2-2048x1024.jpg',
      },
      {
        nome: 'Random nome #7',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/008_IB_Int_Living_2D-Ponta_004_HR-2048x1024.jpg',
      },
      {
        nome: 'Random nome #7',
        descricao: 'Hello World!',
        imagem:
          'https://www.balizaconstrutora.com.br/wp-content/uploads/2021/12/011_IB_Int_Sacada_1D_006_HR-2048x1024.jpg',
      },



      
    ],
    textAlign: 'center',
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
