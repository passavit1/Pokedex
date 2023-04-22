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

const Default_Alert = {
  data: '',
  type: 'info'
};

const LoginPage = ({ setToken, saveUser }) => {
  const [state, setState] = useState('login');
  const [alertData, setalertData] = useState(Default_Alert);

  const onSetStatePage = (data) => {
    setState(data);
  };

  const onRegister = async (data) => {
    console.log(data);
    const response = await pokemonUser.post(`register`, data);
    console.log(response);
    if (response.data.success) {
      setalertData({ data: 'REGISTER SUCCESS', type: 'success' });
    } else {
      setalertData({ data: response.data.data, type: 'error' });
    }
  };

  const onLogin = async (data) => {
    console.log(data);
    const response = await pokemonUser.post(`login`, data);
    console.log(response);
    if (response.data.success) {
      setalertData({ data: 'LOGIN SUCCESS', type: 'success' });

      setToken(response.data._token);
      saveUser(response.data.data[0].userName);
    } else {
      setalertData({ data: response.data.data, type: 'error' });
    }
  };

  const onClear = () => {
    setalertData({
      data: '',
      type: 'info'
    });
  };

  return (
    <Wrapper>
      {alertData.data && (
        <AlertWrapper>
          <Alert message={alertData.data} type={alertData.type} />
        </AlertWrapper>
      )}

      {state === 'login' && (
        <FormLogin
          onSetStatePage={onSetStatePage}
          onLogin={onLogin}
          onClear={onClear}
        />
      )}
      {state === 'register' && (
        <FormRegister
          onSetStatePage={onSetStatePage}
          onRegister={onRegister}
          onClear={onClear}
        />
      )}
    </Wrapper>
  );
};

export default LoginPage;
