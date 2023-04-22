import { Logo, Search, Button } from '@atomic';
import styled from 'styled-components';
import pokemonLogo from '@/assets/images/pokedex.png';
import { useState } from 'react';

const Link = styled.span`
  color: blue;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  .ant-image {
    margin-bottom: 25px;
  }
`;

const FormLogin = ({ onSetStatePage, onLogin, onClear }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Form>
        <Logo src={pokemonLogo} width={200} />
        <Search
          placeholder="username"
          label="username"
          onChange={(v) => {
            setUsername(v);
            onClear();
          }}
        />
        <Search
          placeholder="password"
          label="password"
          type="password"
          onChange={(v) => {
            setPassword(v);
            onClear();
          }}
        />
        <Button
          onClick={() => {
            console.log(userName, password);
            onLogin({ userName, password });
          }}
        >
          LOGIN
        </Button>
        <div>
          Not a member ?{' '}
          <Link
            onClick={() => {
              onSetStatePage('register');
            }}
          >
            Register Now
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default FormLogin;
