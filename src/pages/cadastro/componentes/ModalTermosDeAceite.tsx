import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Icon, IconButton, Link, useTheme } from '@mui/material';

const texto = `
Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o usuário concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD). 

<br/>

Ao aceitar o presente termo, o usuário consente e concorda que a empresa FACISC – Federação das Associações Empresariais de Santa Catarina, CNPJ nº 78.354.636/0001-29, com sede na Rua Visconde de Cairú, 391 – Bairro Estreito – Florianópolis/SC, telefone (48) 3952.8844, e-mail facisc@facisc.org.br, doravante denominada Controlador, tome decisões referentes ao tratamento de seus dados pessoais, bem como realize o tratamento de seus dados pessoais, envolvendo operações como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração. 

<br/>
<br/>
  <h4>
    Dados Pessoais
  </h4> 
<br/>

O Controlador fica autorizado a tomar decisões referentes ao tratamento e a realizar o tratamento dos seguintes dados pessoais do Titular: 
<ul>
  <li>
    Nome completo.
  </li> 
  <li>
    ACI que preside.
  </li> 
  <li>
    Número do Cadastro de Pessoas Físicas (CPF).
  </li> 
  <li>
    Endereço de e-mail pessoal
  </li> 
  <li>
    Regional da Facisc a qual a entidade que preside faz parte.
  </li> 
  <li>
    Validade do seu mandado
  </li> 
  <li>
    Seu voto em votações virtuais referente a itens estatutários.
  </li> 
</ul>

<br/>
  <h4>
    Finalidades do Tratamento dos Dados 
  </h4> 
<br/>


O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades: 
<ul>
  <li>
    Possibilitar que o Controlador identifique e entre em contato com o Titular para fins de relacionamento. 
  </li>
  <li> 
  Possibilitar que o Controlador possa dar acesso ao sistema de votação da Facisc. 
  </li>
</ul>

<br/>
  <h4>
    Compartilhamento de Dados 
  </h4> 
<br/>


O Controlador fica autorizado compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste termo, observados os princípios e as garantias estabelecidas pela Lei nº 13.709. 

<br/>
<br/>
  <h4>
    Segurança dos Dados 
  </h4> 
<br/>

O Controlador responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito. 

<br/>

Em conformidade ao art. 48 da Lei nº 13.709, o Controlador comunicará ao Titular e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante ao Titular. 

<br/>
<br/>
  <h4>
    Término do Tratamento dos Dados 
  </h4> 
<br/>

O Controlador poderá manter e tratar os dados pessoais do Titular durante todo o período em que os mesmos forem pertinentes ao alcance das finalidades listadas neste termo. Dados pessoais anonimizados, sem possibilidade de associação ao indivíduo, poderão ser mantidos por período indefinido. O Titular poderá solicitar via e-mail ou correspondência ao Controlador, a qualquer momento, que sejam eliminados os dados pessoais não anonimizados do Titular 

<br/>
<br/>
  <h4>
   Direitos do Titular 
  </h4> 
<br/>

O Titular tem direito a obter do Controlador, em relação aos dados por ele tratados, a qualquer momento e mediante requisição: I - confirmação da existência de tratamento; II - acesso aos dados; III - correção de dados incompletos, inexatos ou desatualizados; IV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei nº 13.709; V - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial; VI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da Lei nº 13.709; VII - informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados; VIII - informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; IX - revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709. 

<br/>
<br/>
  <h4> 
    Direito de Revogação do Consentimento 
  </h4> 
<br/>

Este consentimento poderá ser revogado pelo usuário, a qualquer momento, mediante solicitação via e-mail ou correspondência ao Controlador.
`;

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  height: '80vh',
  bgcolor: 'background.default',
  boxShadow: 24,
  p: 2,
};

interface IModalTermosDeAceiteProps {
  label: string;
}

const ModalTermosDeAceite: React.FC<IModalTermosDeAceiteProps> = ({
  label,
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link onClick={handleOpen}>{label}</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              position: 'absolute',
              right: 2,
              top: 2,
              color: theme.palette.background.paper,
              textShadow: '1px 2px 2px black',
            }}
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
          <Typography
            color={theme.palette.background.paper}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom={1}
          >
            Termos de aceite
          </Typography>
          <Box overflow="auto" height="90%">
            <Typography
              color={theme.palette.background.paper}
              id="modal-modal-description"
              dangerouslySetInnerHTML={{ __html: `${texto}` }}
            ></Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTermosDeAceite;
