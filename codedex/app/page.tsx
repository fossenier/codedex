import Image from 'next/image';

import Dawson from './components/Dawson';
import Logan from './components/Logan';
import Shabab from './components/Shabab';

export default function Home() {
  return (
    <div>
      <Shabab />
      <Dawson />
      <Logan />
    </div>
  )
}
