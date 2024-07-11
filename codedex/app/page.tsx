// app/page.tsx
import MyCalendar from './components/Calendar';
import Dawson from './components/Dawson';
import Logan from './components/Logan';
import Shabab from './components/Shabab';

export default function Home() {
  return (
    <div>
      <Shabab />
      <Dawson />
      <Logan />
      <MyCalendar />
    </div>
  );
}