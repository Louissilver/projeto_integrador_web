import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { BaseSyntheticEvent, useRef, useState } from 'react';
import Secao from '../../shared/components/secao/Secao';
import { VTextField } from '../../shared/forms';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import { ClienteService } from '../../shared/services/api/clientes/ClienteService';
import { AutoCompleteCidade } from './componentes/AutoCompleteCidade';
import ModalTermosDeAceite from './componentes/ModalTermosDeAceite';

interface IFormData {
  nomeCompleto: string;
  telefone: string;
  cidadeInteresse: string;
}

const secoes = [
  {
    titulo: 'O que é a CAP?',
    texto:
      'Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.',
    imagem: undefined,
    botao: 'Entre em contato',
    textAlign: 'center',
    to: 'https://web.whatsapp.com/send?phone=5551999282800&text=Oi%2C+Maike...',
  },
];

export const Cadastro: React.FC = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [checkMarcado, setCheckMarcado] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSave = (dados: IFormData) => {
    if (!checkMarcado) {
      alert('Os termos não foram aceitos.');
    } else {
      ClienteService.create(dados).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          formRef.current?.setData({
            nome: '',
            telefone: '',
            cidadeInteresse: undefined,
          });
          setCheckMarcado(false);
          alert('Registro cadastrado com sucesso.');
        }
      });
    }
  };

  const handleCheck = (event: BaseSyntheticEvent) => {
    setCheckMarcado(event.target.checked);
  };

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
            color={theme.palette.background.paper}
            sx={{
              textTransform: 'uppercase',
            }}
          >
            Ou
          </Typography>
        </Divider>

        <Typography
          margin="1rem 0 2rem 0"
          variant="h5"
          color={theme.palette.background.paper}
          textAlign="center"
        >
          Cadastre-se!
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={mdDown ? '100%' : '40%'}
        >
          <Form ref={formRef} onSubmit={handleSave} id="formdata">
            <VTextField
              fullWidth
              margin="normal"
              id="nome"
              name="nome"
              label="Nome completo"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                sx: { color: theme.palette.background.paper },
              }}
            />

            <VTextField
              fullWidth
              margin="normal"
              id="telefone"
              name="telefone"
              label="Telefone"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                sx: { color: theme.palette.background.paper },
              }}
            />

            <AutoCompleteCidade />

            <FormControlLabel
              control={
                <Checkbox
                  name="termos"
                  checked={checkMarcado}
                  onClick={(event) => {
                    handleCheck(event);
                  }}
                />
              }
              label={
                <Box display="flex">
                  <Typography sx={{ color: theme.palette.secondary.main }}>
                    Declaro que li e aceito os
                  </Typography>
                  <ModalTermosDeAceite label="&nbsp;termos." />
                </Box>
              }
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              form="formdata"
              sx={{
                width: '100%',
                textTransform: 'uppercase',
                fontWeight: 'lighter',
                margin: '2rem auto',
              }}
            >
              Enviar
            </Button>
          </Form>
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
