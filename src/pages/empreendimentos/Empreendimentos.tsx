import { Box, CircularProgress } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';
import ListaProjetos from '../../shared/components/lista-projetos/ListaProjetos';
import { useEffect, useState } from 'react';
import {
  EmpreendimentoService,
  IListagemEmpreendimentos,
} from '../../shared/services/api/empreendimentos/EmpreendimentoService';

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

export const Empreendimentos: React.FC = () => {
  const [projetos, setProjetos] = useState<IListagemEmpreendimentos[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    EmpreendimentoService.getAll().then((result) => {
      setIsLoading(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setProjetos(
          result.data.empreendimentos.map((empreendimento) => ({
            id: empreendimento.id,
            to: empreendimento.to,
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
      <ListaProjetos projetos={projetos}></ListaProjetos>
    </LayoutBaseDePagina>
  );
};
