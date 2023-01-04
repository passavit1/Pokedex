import { Text, DropdownMenu } from '@atomic';
import { useState } from 'react';

const FilterDropdown = ({ label = 'label', items = [] }) => {
  return (
    <div>
      <Text>{label}</Text>
      <div>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default FilterDropdown;
