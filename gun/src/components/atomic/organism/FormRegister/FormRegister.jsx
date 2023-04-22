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

const FormRegister = ({ onSetStatePage, onRegister, onClear }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfname] = useState('');
  const [lastName, setlname] = useState('');

  return (
    <div>
      <Form>
        <Logo src={pokemonLogo} width={200} />
        <Search
          placeholder="first name"
          label="first name"
          onChange={(v) => {
            setfname(v);
            onClear();
          }}
        />
        <Search
          placeholder="Last name"
          label="Last name"
          onChange={(v) => {
            setlname(v);
            onClear();
          }}
        />
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
            onRegister({
              firstName,
              lastName,
              userName,
              password
            });
          }}
        >
          REGISTER
        </Button>
        <div>
          Have a member ?{' '}
          <Link
            onClick={() => {
              onSetStatePage('login');
              onClear();
            }}
          >
            Login Now
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default FormRegister;
