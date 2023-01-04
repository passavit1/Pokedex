import { Dropdown, Menu } from '@atomic';

const Mockmenu = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item'
  }
];

const DropdownMenu = () => {
  const menu = () => {
    return <Menu items={Mockmenu} />;
  };

  return <Dropdown title="select" menu={menu} />;
};

export default DropdownMenu;
