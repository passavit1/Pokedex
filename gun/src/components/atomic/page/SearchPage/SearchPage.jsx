import styled from 'styled-components';
import { Row, Col } from 'antd';

import { Logo, FilterDropdown } from '@atomic';

import { regions } from './helper';

import pokemonLogo from '@/assets/images/pokedex.png';

const Container = styled.div`
  text-align: center;
`;

const SearchPage = () => {
  const regionDropdownItems = regions.map((r) => {
    return {
      ...r,
      key: r?.name,
      value: r?.name,
      label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`
    };
  });

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <Row>
        <Col>
          <FilterDropdown label="REGION" items={regionDropdownItems} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
