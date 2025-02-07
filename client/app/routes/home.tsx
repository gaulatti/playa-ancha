import { Welcome } from '../welcome/welcome';

export function meta() {
  return [
    { title: 'Playa Ancha' },
    {
      name: 'description',
      content: 'Ya viene... Ya viene... Deportes en Agritortura!',
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
