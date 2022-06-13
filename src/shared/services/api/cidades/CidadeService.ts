import { Api } from '../axios.config';

export interface IListagemCidade {
  _id: string;
  cidade: string;
}

export interface ICidades {
  cidades: IListagemCidade[];
}

type TCidadesComTotalCount = {
  data: IListagemCidade[];
  totalCount: number;
};

const getAll = async (): Promise<TCidadesComTotalCount | Error> => {
  try {
    const urlRelativa = '/cidades';
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count']),
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as string) || 'Erro ao consultar o registro.');
  }
};

export const CidadeService = {
  getAll,
};
