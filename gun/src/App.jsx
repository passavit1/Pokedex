import { Image } from 'antd';

import logoSRC from './assets/images/pokedex.png';

import { Button } from '@atomic';
import { log } from '@utils';

function App() {
  log('hello world ');
  return (
    <div>
      <div>React App</div>
      <Button type="primary">Click</Button>
      <Image width={200} src={logoSRC} />
    </div>
  );
}

export default App;
