import { Api } from '../axios.config';

interface IDetalheCliente {
  id: number;
  nomeCompleto: string;
  telefone: string;
  cidadeInteresse: string;
}

const create = async (
  dados: Omit<IDetalheCliente, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheCliente>('/clientes', dados);

    if (data) {
      return data.id;
    }
    return new Error('Erro ao cadastrar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { error: string }).error);
  }
};

export const ClienteService = {
  create,
};
