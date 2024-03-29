import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Card, Text, IconToggle } from '@atomic';
import { getCardColorsByPokemonTypes } from '@utils';

const Container = styled.div`
  margin: 2rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
`;

const PokemonCard = ({ pokemon }) => {
  let navigate = useNavigate();

  const pokemonId = <span>#{pokemon.id}</span>;

  const handleOnIconInfoClick = () => {
    navigate(`/pokemon?id=${pokemon.id}`, { replace: true });
  };

  const icons = (
    <div>
      <Score>{pokemon.score}</Score>
      <IconToggle name="heart" margin={'0 0.3rem 0 0'} />
      <IconToggle
        name="info"
        isColorChange={false}
        onClick={handleOnIconInfoClick}
      />
    </div>
  );

  const bgColors = getCardColorsByPokemonTypes(pokemon?.types);

  return (
    <Container bgColors={bgColors}>
      <Card
        left={pokemonId}
        right={icons}
        width={'22rem'}
        padding={'1rem'}
        bgColors={bgColors}
        hoverable
      >
        <StyledImage>
          <img src={pokemon.image} width="100%" height={'150px'} />
        </StyledImage>
        <Text fontSize="1.2rem">{pokemon.name}</Text>
      </Card>
    </Container>
  );
};

export default PokemonCard;

const Score = styled.span`
  padding-right: 1rem;
  font-size: 1rem:
`;
