import styled from 'styled-components';
import { FormLogin, FormRegister } from '@atomic';
import { useState } from 'react';
import { pokemonUser } from '@utils';
import { Alert } from 'antd';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const AlertWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;

const LoginPage = () => {
  const [state, setState] = useState('login');

  const onSetStatePage = (data) => {
    setState(data);
  };

  const onRegister = async (data) => {
    console.log(data);
    const response = await pokemonUser.post(`register`, data);
    console.log(response);
  };

  return (
    <Wrapper>
      <AlertWrapper>
        <Alert message="Error Text" type="success" />
      </AlertWrapper>
      {state === 'login' && <FormLogin onSetStatePage={onSetStatePage} />}
      {state === 'register' && (
        <FormRegister onSetStatePage={onSetStatePage} onRegister={onRegister} />
      )}
    </Wrapper>
  );
};

export default LoginPage;
