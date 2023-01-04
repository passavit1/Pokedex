import { Dropdown as DropdownAntd } from 'antd';

import { Button } from '@atomic';

const Dropdown = ({ title = 'select', menu }) => {
  return (
    <DropdownAntd overlay={menu}>
      <Button width="100%">{title}</Button>
    </DropdownAntd>
  );
};

export default Dropdown;
