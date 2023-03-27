import styled from 'styled-components';
import { FormLogin, FormRegister } from '@atomic';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const LoginPage = () => {
  const [state, setState] = useState('login');

  const onSetStatePage = (data) => {
    setState(data);
  };

  return (
    <Wrapper>
      {state === 'login' && <FormLogin onSetStatePage={onSetStatePage} />}
      {state === 'register' && <FormRegister onSetStatePage={onSetStatePage} />}
    </Wrapper>
  );
};

export default LoginPage;
