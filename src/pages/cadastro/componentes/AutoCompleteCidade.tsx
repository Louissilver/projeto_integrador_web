import { useEffect, useMemo, useState } from 'react';
import {
  Autocomplete,
  CircularProgress,
  TextField,
  useTheme,
} from '@mui/material';

import { useField } from '@unform/core';
import { CidadeService } from '../../../shared/services/api/cidades/CidadeService';
import { useDebounce } from '../../../shared/hooks';

type TAutoCompleteOption = {
  id: number;
  label: string;
};

interface IAutoCompleteCidadeProps {
  isExternalLoading?: boolean;
}

export const AutoCompleteCidade: React.FC<IAutoCompleteCidadeProps> = ({
  isExternalLoading = false,
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField('cidadeInteresse');
  const { debounce } = useDebounce();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
  const [busca, setBusca] = useState('');

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

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      CidadeService.getAll().then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setOpcoes(
            result.data.cidades.map((cidade) => ({
              id: cidade.id,
              label: cidade.cidade,
            }))
          );
        }
      });
    });
  }, [busca]);

  const autoCompleteSelectedOption = useMemo(() => {
    if (!cidadeSelecionada) return null;

    const selectedOption = opcoes.find(
      (opcao) => opcao.label === cidadeSelecionada
    );
    if (!selectedOption) return null;

    return selectedOption;
  }, [cidadeSelecionada, opcoes]);

  return (
    <Autocomplete
      loading={isLoading}
      openText="Abrir"
      closeText="Fechar"
      noOptionsText="Sem opções"
      loadingText="Carregando..."
      disablePortal
      popupIcon={
        isExternalLoading || isLoading ? (
          <CircularProgress size={28} />
        ) : undefined
      }
      options={opcoes}
      disabled={isExternalLoading}
      value={autoCompleteSelectedOption}
      onChange={(_, newValue) => {
        setCidadeSelecionada(newValue?.label || '');
        setBusca('');
        clearError();
      }}
      onInputChange={(_, newValue) => setBusca(newValue)}
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
