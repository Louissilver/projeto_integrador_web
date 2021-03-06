import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Icon, IconButton, Link, useTheme } from '@mui/material';

const texto = `
Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o usuário concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD). 

<br/>

Ao aceitar o presente termo, o usuário consente e concorda que a empresa CAP SERVIÇOS IMOBILIÁRIOS LTDA, CNPJ nº 28.780.520/0001-83, com sede na Rua Gomes Jardim, 201 – Bairro Centro – Novo Hamburgo/RS, telefone (51) 9928-2800, e-mail cap@cap.imb.br, doravante denominada CAP, tome decisões referentes ao tratamento de seus dados pessoais, bem como realize o tratamento de seus dados pessoais, envolvendo operações como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração. 

<br/>
<br/>
  <h4>
    Dados Pessoais
  </h4> 
<br/>

A CAP fica autorizado a tomar decisões referentes ao tratamento e a realizar o tratamento dos seguintes dados pessoais do Titular: 
<ul>
  <li>
    Nome completo.
  </li> 
  <li>
    Telefone (Celular).
  </li> 
  <li>
    Cidade de interesse de compra.
  </li> 
<br/>
  <h4>
    Finalidades do Tratamento dos Dados 
  </h4> 
<br/>


O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades: 
<ul>
  <li>
    Possibilitar que a CAP identifique e entre em contato com o Titular para fins de relacionamento. 
  </li>
</ul>

<br/>
  <h4>
    Compartilhamento de Dados 
  </h4> 
<br/>


A CAP fica autorizado compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste termo, observados os princípios e as garantias estabelecidas pela Lei nº 13.709. 

<br/>
<br/>
  <h4>
    Segurança dos Dados 
  </h4> 
<br/>

A CAP responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito. 

<br/>

Em conformidade ao art. 48 da Lei nº 13.709, A CAP comunicará ao Titular e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante ao Titular. 

<br/>
<br/>
  <h4>
    Término do Tratamento dos Dados 
  </h4> 
<br/>

A CAP poderá manter e tratar os dados pessoais do Titular durante todo o período em que os mesmos forem pertinentes ao alcance das finalidades listadas neste termo. Dados pessoais anonimizados, sem possibilidade de associação ao indivíduo, poderão ser mantidos por período indefinido. O Titular poderá solicitar via e-mail ou correspondência ao CAP, a qualquer momento, que sejam eliminados os dados pessoais não anonimizados do Titular 

<br/>
<br/>
  <h4>
   Direitos do Titular 
  </h4> 
<br/>

O Titular tem direito a obter da CAP, em relação aos dados por ele tratados, a qualquer momento e mediante requisição: I - confirmação da existência de tratamento; II - acesso aos dados; III - correção de dados incompletos, inexatos ou desatualizados; IV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei nº 13.709; V - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial; VI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da Lei nº 13.709; VII - informação das entidades públicas e privadas com as quais A CAP realizou uso compartilhado de dados; VIII - informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; IX - revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709. 

<br/>
<br/>
  <h4> 
    Direito de Revogação do Consentimento 
  </h4> 
<br/>

Este consentimento poderá ser revogado pelo usuário, a qualquer momento, mediante solicitação via e-mail ou correspondência a CAP.
`;

const style = {
  position: 'absolute',
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
            }}
            onClick={handleClose}
          >
            <Icon>disabled_by_default</Icon>
          </IconButton>
          <Typography
            color={theme.palette.background.paper}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom={1}
          >
            Termo de responsabilidade
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
