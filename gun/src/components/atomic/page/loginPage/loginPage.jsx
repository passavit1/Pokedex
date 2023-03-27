import styled from 'styled-components';
import pokemonLogo from '@/assets/images/pokedex.png';
import { Logo, Search, Button } from '@atomic';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

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
    margin-bottom: 30px;
  }
`;

const LoginPage = () => {
  const [state, setState] = useState('');

  return (
    <Wrapper>
      <Form>
        <Logo src={pokemonLogo} width={200} />
        <Search placeholder="username" label="username" />
        <Search placeholder="password" label="password" />
        <Button>LOGIN</Button>
        <div>
          Not a member ? <Link>Register Now</Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
