import styled from 'styled-components';

import { Card, Text, IconToggle, Icon } from '@atomic';
import { colorTypeGradients } from '@utils';

const Container = styled.div`
  margin: 2rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
`;

const getCardColors = (pokemonTypes = []) => {
  const bgColors = colorTypeGradients(
    pokemonTypes[0]?.type.name,
    pokemonTypes[1]?.type.name,
    pokemonTypes.length
  );
  return bgColors;
};

const PokemonCard = ({ pokemon }) => {
  const pokemonId = <span>#{pokemon.id}</span>;

  const handleOnIconInfoClick = () => {
    console.log('go to info page');
  };

  const icons = (
    <div>
      <IconToggle name="heart" margin={'0 0.3rem 0 0'} />
      <IconToggle
        name="info"
        isColorChange={false}
        onClick={handleOnIconInfoClick}
      />
    </div>
  );

  const bgColors = getCardColors(pokemon?.types);

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
          <img src={pokemon.images} width="100%" />
        </StyledImage>
        <Text fontSize="1.2rem">{pokemon.name}</Text>
      </Card>
    </Container>
  );
};

export default PokemonCard;
