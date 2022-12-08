import { Button, Image } from 'antd';

import logoSRC from './assets/images/pokedex.png';

function App() {
  return (
    <div>
      <div>React App</div>
      <Button type="primary">Click</Button>
      <Image width={200} src={logoSRC} />
    </div>
  );
}

export default App;
