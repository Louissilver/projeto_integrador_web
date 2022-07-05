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
      'Quer fazer parte do nosso time?<br/>Te damos as ferramentas para ser um corretor de sucesso e alcançar os seus obejtivos pessoais.<br/>Clique no botão abaixo.',
    imagem: undefined,
    botao: 'Quero me candidatar',
    textAlign: 'center',
    to: 'https://web.whatsapp.com/send?phone=5551999282800&text=Oi%2C+Maike...',
  },
];

const questoes = [
  {
    id: 'questao-1',
    titulo: 'O que precisa para comprar um imóvel?',
    resposta:
      'Para comprar o imóvel através de financiamento, precisa ter renda comprovada e não possuir restrições cadastrais em seu CPF. Se você quer tirar dúvidas se a rua renda é compatível com o financiamento do imóvel ou se seu CPF está livre para o financiamento, faça seu cadastro aqui no site que em poucos instantes o responsável entrará em contato.',
  },
  {
    id: 'questao-2',
    titulo: 'Qual a renda mínima necessária?',
    resposta:
      'Não existe renda mínima. O financiamento habitacional é único. Cada negociação é diferente. Para cada cliente há uma negociação diferente, sempre com base no seu perfil financeiro, e isso acontece porque o financiamento é liberado com base no perfil financeiro de cada cliente. Para verificar o seu, basta efetuar seu cadastro aqui em nosso site.',
  },
  {
    id: 'questao-3',
    titulo: 'Já possuo um imóvel financiado, posso financiar outro?',
    resposta:
      'Depende da análise de crédito que será realizada pelo agente financeiro. Para fazer sua análise, basta efetuar o cadastro aqui em nosso site. ',
  },
  {
    id: 'questao-4',
    titulo: 'Já falei com outros corretores e nenhum consegue imóvel 100% parcelado, por que isso?',
    resposta:
      'Nós capacitamos nosso time para prestar o melhor atendimento possível. Se por ventura sua condição ficou fora do seu orçamento atual, basta falar com um de nossos especialistas para que juntos consigam elaborar um plano de ação para que sua compra seja viabilizada. Para ter essa consultoria de forma gratuita, basta efetuar seu cadastro aqui em nosso site e informar sua solicitação, te orientaremos em todas as etapas até que você conquiste seu lar.',
  },
  {
    id: 'questao-5',
    titulo: 'Tem como financiar o imóvel por outros bancos?',
    resposta:
      'Outros bancos privados como Santander, Itaú, Bradesco e outros bancos também possuem a modalidade de financiamento habitacional, esse financiamento só é aceito para imóveis prontos e que possuem o habite-se (documento de conclusão de obra emitido pela prefeitura). E mesmo assim, esses bancos não financiam imóveis com as taxas de juros praticadas nem subsídios do Programa Casa Verde e Amarela. Ou seja, a compra por outros bancos normalmente inviabiliza a negociação. Para tirar dúvidas mais específicas, basta efetuar seu cadastro aqui em nosso site e falar com nossos especialistas em primeiro imóvel.',
  },
  {
    id: 'questao-6',
    titulo: 'Qual a documentação que preciso enviar para financiar um imóvel?',
    resposta:
      '- Documento de identificação, comprovante de residência, certidão de estado civil, 2 últimos contracheques, carteira de trabalho, extrato do FGTS ',
  },
  {
    id: 'questao-7',
    titulo: 'Tem como financiar o imóvel por outros bancos?',
    resposta:
      'Outros bancos privados como Santander, Itaú, Bradesco e outros bancos também possuem a modalidade de financiamento habitacional, esse financiamento só é aceito para imóveis prontos e que possuem o habite-se (documento de conclusão de obra emitido pela prefeitura). E mesmo assim, esses bancos não financiam imóveis com as taxas de juros praticadas nem subsídios do Programa Casa Verde e Amarela. Ou seja, a compra por outros bancos normalmente inviabiliza a negociação. Para tirar dúvidas mais específicas, basta efetuar seu cadastro aqui em nosso site e falar com nossos especialistas em primeiro imóvel.',
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
