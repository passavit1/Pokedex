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

const FormRegister = ({ onSetStatePage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');

  return (
    <div>
      <Form>
        <Logo src={pokemonLogo} width={200} />
        <Search
          placeholder="first name"
          label="first name"
          onChange={(v) => {
            setfname(v);
          }}
        />
        <Search
          placeholder="Last name"
          label="Last name"
          onChange={(v) => {
            setlname(v);
          }}
        />
        <Search
          placeholder="username"
          label="username"
          onChange={(v) => {
            setUsername(v);
          }}
        />
        <Search
          placeholder="password"
          label="password"
          onChange={(v) => {
            setPassword(v);
          }}
        />
        <Button>REGISTER</Button>
        <div>
          Have a member ?{' '}
          <Link
            onClick={() => {
              onSetStatePage('login');
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
