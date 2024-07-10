import axios from 'axios';

export default function useApi(apiUrl) {
  const store = async (item) => {
    try {
      const response = await axios.post(apiUrl, item);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const index = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const updateByID = async (id, updatedItem) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, updatedItem);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const deleteByID = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      return id;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return {
    store,
    index,
    updateByID,
    deleteByID,
  };
}
