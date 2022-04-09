import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

const inputs = [
  {
    id: 'nome',
    label: 'Nome completo',
  },
  {
    id: 'telefone',
    label: 'Telefone',
  },
];

const cidades = [
  {
    value: 10,
    cidade: 'Canoas',
  },
  {
    value: 20,
    cidade: 'Estância Velha',
  },
  {
    value: 30,
    cidade: 'Esteio',
  },
  {
    value: 40,
    cidade: 'Ivoti',
  },
  {
    value: 50,
    cidade: 'Novo Hamburgo',
  },
  {
    value: 60,
    cidade: 'Porto Alegre',
  },
  {
    value: 70,
    cidade: 'São Leopoldo',
  },
  {
    value: 80,
    cidade: 'Sapucaia do Sul',
  },
];

const FormularioCadastro: React.FC = () => {
  const [cidade, setCidade] = useState('');
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const handleCidade = (event: SelectChangeEvent) => {
    setCidade(event.target.value as string);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={mdDown ? '100%' : '40%'}
    >
      {inputs.map(({ id, label }) => {
        return (
          <TextField
            key={id}
            fullWidth
            margin="normal"
            id={id}
            label={label}
            variant="outlined"
            color="primary"
            InputLabelProps={{ sx: { color: theme.palette.background.paper } }}
            InputProps={{ sx: { color: theme.palette.background.paper } }}
          />
        );
      })}

      <FormControl fullWidth margin="normal">
        <InputLabel
          sx={{ color: theme.palette.background.paper }}
          color="primary"
          id="cidade"
          variant="outlined"
        >
          Cidade de interesse
        </InputLabel>
        <Select
          labelId="cidade"
          id="cidade"
          label="Cidade de interesse"
          value={cidade}
          onChange={handleCidade}
          color="primary"
          sx={{ color: theme.palette.background.paper }}
        >
          {cidades.map((itemCidade) => {
            return (
              <MenuItem key={itemCidade.value} value={itemCidade.value}>
                {itemCidade.cidade}
              </MenuItem>
            );
          })}
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
    </Box>
  );
};

export default FormularioCadastro;
