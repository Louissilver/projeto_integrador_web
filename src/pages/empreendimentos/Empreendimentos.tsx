import { Box, CircularProgress, Typography } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import ListaProjetos from '../../shared/components/lista-projetos/ListaProjetos';
import { useEffect, useState } from 'react';
import {
  EmpreendimentoService,
  IListagemEmpreendimentos,
} from '../../shared/services/api/empreendimentos/EmpreendimentoService';
import { useTheme } from '@mui/system';

const secoes = [
  {
    titulo: 'Nossos Empreendimentos',
    texto: 'Venha conhecer nossos empreendimentos.',
    imagem: undefined,
    botao: undefined,
    textAlign: 'center',
  },
];

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  height: '100%',
  bgcolor: 'background.paper',
  opacity: '50%',
  boxShadow: 24,
  overflow: 'hidden',
};

export const Empreendimentos: React.FC = () => {
  const [projetos, setProjetos] = useState<IListagemEmpreendimentos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsLoading(true);

    EmpreendimentoService.getAll().then((result) => {
      setIsLoading(false);
      if (result instanceof Error) {
        console.log(result.message);
      } else {
        setProjetos(
          result.data
            .filter((item) => item.ativo)
            .map((empreendimento) => ({
              id: empreendimento.id,
              to: empreendimento.to,
              ativo: empreendimento.ativo,
              titulo: empreendimento.titulo,
              descricao: empreendimento.descricao,
              cidade: empreendimento.cidade,
              thumb: empreendimento.thumb,
              alt: empreendimento.alt,
            }))
        );
      }
    });
  }, []);

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        {secoes.map(({ titulo, texto, imagem, botao, textAlign }, index) => {
          return (
            <Secao
              key={'secao-' + index}
              titulo={titulo}
              texto={texto}
              imagem={imagem}
              labelBotao={botao}
              textAlign={textAlign === 'justify' ? 'justify' : 'center'}
            />
          );
        })}
      </Box>
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
      {projetos.length == 0 && !isLoading && (
        <Typography
          margin="1rem 0 2rem 0"
          variant="h6"
          color={theme.palette.background.paper}
          textAlign="center"
        >
          Não foi possível encontrar nenhum projeto agora. Por favor, tente
          novamente mais tarde.
        </Typography>
      )}
      <ListaProjetos projetos={projetos}></ListaProjetos>
    </LayoutBaseDePagina>
  );
};
