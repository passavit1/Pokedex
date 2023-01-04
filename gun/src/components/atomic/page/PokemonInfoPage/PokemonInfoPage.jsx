import { useSearchParams } from 'react-router-dom';

const InfoPage = () => {
  let [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  return <div>InfoPage Page : {id}</div>;
};

export default InfoPage;
