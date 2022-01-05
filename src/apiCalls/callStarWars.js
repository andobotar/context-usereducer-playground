import axios from 'axios';

export const callSW = async () => {
  const resp = await axios.get('https://swapi.dev/api/people/1');
  console.log({ resp });
  return resp.data.name;
};
