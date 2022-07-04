import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { BaseSyntheticEvent, forwardRef, useRef, useState } from 'react';
import Secao from '../../shared/components/secao/Secao';
import { IVFormErrors, VTextField } from '../../shared/forms';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import { ClienteService } from '../../shared/services/api/clientes/ClienteService';
import { AutoCompleteCidade } from './componentes/AutoCompleteCidade';
import ModalTermosDeAceite from './componentes/ModalTermosDeAceite';
import * as yup from 'yup';
import { VPhoneTextField } from '../../shared/forms/VPhoneTextField';

interface IFormData {
  nomeCompleto: string;
  telefone: string;
  cidadeInteresse: string;
}

const phoneRegExp = RegExp('^\\([\\d]{2}\\) \\d [\\d]{4}\\-[\\d]{4}$');

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
  nomeCompleto: yup.string().required().min(3),
  telefone: yup
    .string()
    .required()
    .matches(phoneRegExp, 'O número de telefone não é válido.'),
  cidadeInteresse: yup.string().required(),
});

const secoes = [
  {
    titulo: 'Deseja comprar o seu imóvel?',
    texto:
      'Cadastre-se abaixo para obter mais informações sobre os nossos imóveis. <br/>Para uma atendimento instantâneo clique no botão abaixo. ',
    imagem: undefined,
    botao: 'Entre em contato',
    textAlign: 'center',
    to: 'https://web.whatsapp.com/send?phone=5551999282800&text=Oi%2C+Maike...',
  },
];

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Cadastro: React.FC = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [checkMarcado, setCheckMarcado] = useState(false);
  const [checkMarcadoError, setCheckMarcadoError] = useState(false);
  const [open, setOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSave = (dados: IFormData) => {
    if (!checkMarcado) {
      setCheckMarcadoError(true);
    } else {
      setCheckMarcadoError(false);
      formValidationSchema
        .validate(dados, { abortEarly: false })
        .then((dadosValidados) => {
          ClienteService.create(dadosValidados).then((result) => {
            if (result instanceof Error) {
              alert(result.message);
            } else {
              if (!checkMarcado) {
                setCheckMarcadoError(true);
              } else {
                setCheckMarcadoError(false);
                formRef.current?.setData({
                  nomeCompleto: '',
                  telefone: '',
                  cidadeInteresse: undefined,
                });
                setCheckMarcado(false);
                setOpen(true);
              }
            }
          });
        })
        .catch((errors: yup.ValidationError) => {
          const validationErrors: IVFormErrors = {};

          errors.inner.forEach((error) => {
            if (!error.path) return;
            validationErrors[error.path] = error.message;
          });

          formRef.current?.setErrors(validationErrors);
        });
    }
  };

  const handleCheck = (event: BaseSyntheticEvent) => {
    setCheckMarcado(event.target.checked);
    setCheckMarcadoError(!event.target.checked);
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
              borderColor: 'secondary.main',
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
              id="nomeCompleto"
              name="nomeCompleto"
              label="Nome completo"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                sx: { color: theme.palette.background.paper },
              }}
            />

            <VPhoneTextField
              fullWidth
              margin="normal"
              id="telefone"
              name="telefone"
              label="Telefone celular"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                sx: { color: theme.palette.background.paper },
              }}
            />

            <AutoCompleteCidade />

            <FormGroup>
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
                    <Typography sx={{ color: theme.palette.primary.main }}>
                      Aceito os
                    </Typography>
                    <ModalTermosDeAceite label="&nbsp;termos de responsabilidade"  />
                  </Box>
                }
              />
              {checkMarcadoError && (
                <FormHelperText error>
                  O aceite dos termos é obrigatório para realizar o cadastro.
                </FormHelperText>
              )}
            </FormGroup>
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
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                Registro cadastrado com sucesso.
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
