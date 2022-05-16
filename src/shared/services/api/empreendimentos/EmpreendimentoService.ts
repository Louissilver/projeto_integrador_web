import { Api } from '../axios.config';

type TEmpreendimentosComTotalCount = {
  data: IEmpreendimentos;
};

export interface IEmpreendimentos {
  empreendimentos: IListagemEmpreendimentos[];
}

export interface IListagemEmpreendimentos {
  id: number;
  to: string;
  titulo: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
}

type TEmpreendimento = {
  empreendimentos: IDetalheEmpreendimento;
};

export interface IImagensProps {
  imagem: string;
  alt: string;
}

export interface IDetalheEmpreendimento {
  to: string;
  titulo: string;
  texto: string;
  imagens: IImagensProps[];
}

const getAll = async (): Promise<TEmpreendimentosComTotalCount | Error> => {
  try {
    const urlRelativa = '/empreendimentos';
    const { data } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros.'
    );
  }
};
const getById = async (id: string): Promise<TEmpreendimento | Error> => {
  try {
    const { data } = await Api.get(`/empreendimentos/${id}`);

    if (data) {
      return data;
    }
    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro.'
    );
  }
};

export const EmpreendimentoService = {
  getAll,
  getById,
};
