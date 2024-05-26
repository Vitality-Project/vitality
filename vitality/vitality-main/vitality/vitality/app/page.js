import Conteudo from './home/page';
import Footer from '@/app/components/footer';
import Menu from './components/menu/menu';

export default function Home() {
  return (
    <div>
    <main>
       <Menu />
       <Conteudo />
    </main>
    </div>
  );
}
