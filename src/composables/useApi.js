import { Notify } from 'quasar';
import { api } from 'src/boot/axios.js';

export default function useApi(apiUrl) {
  const post = async (item) => {
    try {
      const response = await api.post(apiUrl, item);
      return response.data;
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: 'Erro ao criar o item.',
        progress: true,
      });
      return Promise.reject(err);
    }
  };

  const index = async () => {
    try {
      const response = await api.get(apiUrl);
      return response.data;
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: 'Erro ao buscar os itens.',
        progress: true,
      });
      return Promise.reject(err);
    }
  };

  const update = async (id, updatedItem) => {
    try {
      const response = await api.put(`${apiUrl}/${id}`, updatedItem);
      return response.data;
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: 'Erro ao atualizar o item.',
        progress: true,
      });
      return Promise.reject(err);
    }
  };

  const destroy = async (id) => {
    try {
      await api.delete(`${apiUrl}/${id}`);
      return id;
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: 'Erro ao deletar o item.',
        progress: true,
      });
      return Promise.reject(err);
    }
  };

  return {
    post,
    index,
    update,
    destroy,
  };
}
