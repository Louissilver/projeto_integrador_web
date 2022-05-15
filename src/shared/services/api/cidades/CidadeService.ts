import { Api } from '../axios.config';

type TCidadesComTotalCount = {
  data: ICidades;
};

export interface ICidades {
  cidades: IListagemCidade[];
}

export interface IListagemCidade {
  id: number;
  cidade: string;
}

const getAll = async (): Promise<TCidadesComTotalCount | Error> => {
  try {
    const urlRelativa = '/cidades';
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

export const CidadeService = {
  getAll,
};
