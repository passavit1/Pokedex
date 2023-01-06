import { InfoCircleFilled, DownOutlined, HeartFilled } from '@ant-design/icons';

const getIcon = (name) => {
  const Icons = {
    arrowDown: DownOutlined,
    info: InfoCircleFilled,
    heart: HeartFilled
  };

  const icon = Icons[name] || <div />;

  return icon;
};

const Icon = ({ name, size, ...props }) => {
  const Icon = getIcon(name);

  return <Icon size={size} {...props} />;
};

export default Icon;
