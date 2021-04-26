import apiService from './api';

export const getCharacters = async () => {
  return await apiService.get('characters');
};

export const getCharactersById = async (caracterId) => {
  return await apiService.get(`characters/${caracterId}`);
};
