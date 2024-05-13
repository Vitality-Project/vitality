import Conteudo from './home/page';
import Menu from './components/menu/menu';
import Salvos from './components/Salvos';


export default function Home() {
  return (
    <main>
       <Menu />
      <Conteudo />
    </main>
  );
}
