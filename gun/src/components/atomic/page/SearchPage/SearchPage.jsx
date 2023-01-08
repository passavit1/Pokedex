import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { Logo, FilterDropdown, Search, PokemonCard } from '@atomic';

import pokemonLogo from '@/assets/images/pokedex.png';

import { regions, types, sortby } from './helper';

const Container = styled.div`
  text-align: center;
  width: 90%;
  margin: auto;
`;

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-around;
`;

const regionDropdownItems = regions.map((r) => ({
  ...r,
  key: r?.name,
  value: r?.name,
  label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`
}));

const typeDropdownItems = types.map((t) => ({
  key: t,
  value: t,
  label: t
}));

const sortbyDropdownItems = sortby.map((s) => ({
  key: s,
  value: s,
  label: s
}));

const getFetchPokemonFilters = (filters) => {
  return filters;
};

const SearchPage = () => {
  const [filters, setFilter] = useState({});

  const onFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value
    }));
  };

  const pokemonFilters = getFetchPokemonFilters(filters);

  const pokemon = {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/'
        }
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/'
        }
      }
    ],
    images:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  };

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="REGION"
            items={regionDropdownItems}
            onChange={(item) => onFilterChange('region', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="TYPE"
            items={typeDropdownItems}
            onChange={(item) => onFilterChange('type', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="SORT BY"
            items={sortbyDropdownItems}
            onChange={(item) => onFilterChange('sortBy', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Search
            label="SEARCH"
            placeholder="TYPING . . ."
            onChange={(v) => onFilterChange('search', v)}
          />
        </Col>
      </StyledRow>
      <PokemonContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <PokemonCard key={x} pokemon={pokemon} />
        ))}
      </PokemonContainer>
    </Container>
  );
};

export default SearchPage;
