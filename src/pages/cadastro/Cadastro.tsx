import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Cadastro: React.FC = () => {
  const [cidade, setCidade] = useState('');
  const theme = useTheme();

  const handleCidade = (event: SelectChangeEvent) => {
    setCidade(event.target.value as string);
  };

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          margin="0 0 2rem 0"
          variant="h3"
          color={theme.palette.primary.main}
          textAlign="center"
          sx={{
            fontWeight: '400',
          }}
        >
          O que é a CAP?
        </Typography>

        <Typography align="center" color={theme.palette.secondary.dark}>
          Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
          purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
          sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
          et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
          odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
          lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            width: '40%',
            textTransform: 'uppercase',
            fontWeight: 'lighter',
            margin: '2rem auto',
          }}
        >
          Entre em contato
        </Button>

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

        <TextField
          sx={{
            width: '40%',
          }}
          margin="normal"
          id="nome"
          label="Nome completo"
          variant="outlined"
          color="secondary"
          InputLabelProps={{ sx: { color: theme.palette.secondary.main } }}
          InputProps={{ sx: { color: theme.palette.secondary.main } }}
        />

        <TextField
          sx={{
            width: '40%',
          }}
          margin="normal"
          id="telefone"
          label="Telefone"
          variant="outlined"
          color="secondary"
          InputLabelProps={{ sx: { color: theme.palette.secondary.main } }}
          InputProps={{ sx: { color: theme.palette.secondary.main } }}
        />

        <FormControl
          margin="normal"
          sx={{
            width: '40%',
          }}
        >
          <InputLabel
            margin="dense"
            sx={{ color: theme.palette.secondary.main }}
            color="secondary"
            id="cidade"
            variant="outlined"
          >
            Cidade
          </InputLabel>
          <Select
            labelId="cidade"
            id="cidade"
            label="Cidade"
            value={cidade}
            onChange={handleCidade}
            color="secondary"
          >
            <MenuItem selected value={10}>
              Canoas
            </MenuItem>
            <MenuItem value={20}>Estância Velha</MenuItem>
            <MenuItem value={30}>Esteio</MenuItem>
            <MenuItem value={40}>Ivoti</MenuItem>
            <MenuItem value={50}>Novo Hamburgo</MenuItem>
            <MenuItem value={60}>Porto Alegre</MenuItem>
            <MenuItem value={70}>São Leopoldo</MenuItem>
            <MenuItem value={80}>Sapucaia do Sul</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ color: theme.palette.secondary.main }}>
              Declaro que li e aceito os{' '}
              <Link href="https://google.com" target="_blank" rel="noreferrer">
                termos.
              </Link>
            </Typography>
          }
        />

        <Button
          variant="contained"
          size="large"
          sx={{
            width: '40%',
            textTransform: 'uppercase',
            fontWeight: 'lighter',
            margin: '2rem auto',
          }}
        >
          Enviar
        </Button>
      </Box>
    </LayoutBaseDePagina>
  );
};
