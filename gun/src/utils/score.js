import axios from 'axios';
import { useToken } from '@utils';

const FetchScore = async () => {
  const { token } = useToken();

  try {
    const result = await axios.get('http://localhost:8080/pokemon/score/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { FetchScore };
