import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carrossel from '../../shared/components/carrossel/Carrossel';
import Secao from '../../shared/components/secao/Secao';
import Titulo from '../../shared/components/titulo/Titulo';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import {
  EmpreendimentoService,
  IDetalheEmpreendimento,
} from '../../shared/services/api/empreendimentos/EmpreendimentoService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  height: '100%',
  bgcolor: 'background.paper',
  opacity: '50%',
  boxShadow: 24,
};

export const Empreendimento: React.FC = () => {
  const location = useLocation();
  const [projetos, setProjetos] = useState<IDetalheEmpreendimento>({
    to: '',
    titulo: '',
    texto: '',
    imagens: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    EmpreendimentoService.getById(
      location.pathname.replace('/empreendimentos/', '')
    ).then((result) => {
      setIsLoading(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setProjetos({
          to: result.empreendimentos.to,
          titulo: result.empreendimentos.titulo,
          texto: result.empreendimentos.texto,
          imagens: result.empreendimentos.imagens,
        });
      }
    });
  }, []);

  return (
    <LayoutBaseDePagina>
      {isLoading && (
        <Box sx={style}>
          <CircularProgress
            size={82}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              opacity: '100%',
            }}
          />
        </Box>
      )}
      <Box display="flex" flexDirection="column">
        <Box key={projetos?.to}>
          <Titulo titulo={projetos?.titulo} />
          <Carrossel items={projetos?.imagens} />
          <br />
          <Secao texto={projetos?.texto} textAlign="justify" />
        </Box>
      </Box>
    </LayoutBaseDePagina>
  );
};
