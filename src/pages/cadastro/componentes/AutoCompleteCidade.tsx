import { useEffect, useMemo, useState } from 'react';
import { Autocomplete, TextField, useTheme } from '@mui/material';

import { useField } from '@unform/core';

const opcoes = [
  'Canoas',
  'Estância Velha',
  'Esteio',
  'Ivoti',
  'Novo Hamburgo',
  'Porto Alegre',
  'São Leopoldo',
  'Sapucaia do Sul',
];

interface IAutoCompleteCidadeProps {
  isExternalLoading?: boolean;
}

export const AutoCompleteCidade: React.FC<IAutoCompleteCidadeProps> = ({
  isExternalLoading = false,
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField('cidadeInteresse');

  const theme = useTheme();

  const [cidadeSelecionada, setCidadeSelecionada] = useState<
    string | undefined
  >(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => cidadeSelecionada,
      setValue: (_, newCidadeSelecionada) =>
        setCidadeSelecionada(newCidadeSelecionada),
    });
  }, [registerField, fieldName, cidadeSelecionada]);

  const autoCompleteSelectedOption = useMemo(() => {
    if (!cidadeSelecionada) return null;

    const selectedOption = opcoes.find((opcao) => opcao === cidadeSelecionada);
    if (!selectedOption) return null;

    return selectedOption;
  }, [cidadeSelecionada, opcoes]);

  return (
    <Autocomplete
      openText="Abrir"
      closeText="Fechar"
      noOptionsText="Sem opções"
      loadingText="Carregando..."
      disablePortal
      options={opcoes}
      disabled={isExternalLoading}
      value={autoCompleteSelectedOption}
      onChange={(_, newValue) => {
        setCidadeSelecionada(newValue || '');
        clearError();
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Cidade de interesse"
          error={!!error}
          helperText={error}
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
          InputLabelProps={{
            sx: { color: theme.palette.background.paper },
          }}
        />
      )}
    />
  );
};
