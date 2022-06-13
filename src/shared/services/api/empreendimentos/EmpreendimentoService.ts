import { Api } from '../axios.config';

type TEmpreendimentosComTotalCount = {
  data: IListagemEmpreendimentos[];
};

export interface IListagemEmpreendimentos {
  id: number;
  to: string;
  titulo: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
}

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
const getById = async (id: string): Promise<IDetalheEmpreendimento | Error> => {
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
