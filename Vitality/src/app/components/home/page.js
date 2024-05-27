"use client"
import Link from 'next/link';
import "./conteudo.css";
import Menu from '../menu/menu';
function Conteudo() {

  return (
    <main className="home">
      <Menu />
      <header className='conteudo'>
        <main className='bem-vindo'> 
          <div className='vitality'> 
            <p className='texto-bemvindo' id='texto-bemvindo1'>Bem-vindo ao Vitality</p>
            <p className='texto-bemvindo' id='texto-bemvindo2'>O Vitalily permite que você registre seus sintomas e facilita sua ida ao médico.</p>
            <button className='obj'> <a href='#'>OBJETIVO</a></button>
          </div>
          <div className='img-bem-vindo'>
            <img src='../imgs/bemvindo.png' alt='Bem-vindo' />
            <img className='img-bem-vindo2' src='../bemvindo-mob.png' alt='Bem-vindo Mobile' />
          </div>
        </main>
        <h1 className='explore'> Explore</h1>

        <aside className='explore'> 
         <Link href="../components/registrar"><button className='caixa' id='registre'><img src='../imgs/sintoma-icon.png'/><p className='texto-ex'> REGISTRE SINTOMAS</p></button></Link> 
         <Link href="../components/salvos"><button className='caixa' id='gere'><img src='../imgs/relatorio-icon.png'/><p className='texto-ex'> GERE RELATÓRIOS</p></button></Link> 
         <Link href="../components/hospitais"><button className='caixa' id='hospitais'><img src='../imgs/hospital-icon.png'/><p className='texto-ex'> HOSPITAIS PRÓXIMOS</p></button></Link> 
        </aside>
        <div className='texto-final-ex'>
        <p className='texto-final-ex'> <strong>Você sabia que metade da população brasileira ignora os sintomas antes de procurar ajuda médica? </strong>
Sabendo disso, criamos o Vitality para te incentivar a dar atenção a eles, registrando-os e te conectando ao hospital mais próximo.  
</p>
</div>
<h2 className='oque-desejamos'> O que desejamos?</h2>
          <div className='desejamos'>
            <div className='conteudo'>
              <p className='texto-desejamos'> Garantir conforto te conectando ao hospital mais próximo</p>
            </div>
            <div id='linha-vertical' className='linha-horizontal'></div>
            <div className='conteudo'>
              <p className='texto-desejamos'> Diminuir pelo menos 25% dos casos de doenças transmissiveis e tropicais até 2030</p>
            </div>
            <div id='linha-vertical' className='linha-horizontal'></div>
            <div className='conteudo'>
              <p className='texto-desejamos'> Promover qualidade de vida e saúde à população</p>
            </div>
            </div>
      </header>
      <div>
      <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="../components/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">    
            <li> <Link href="../components/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="../components/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="../components/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
      </div>
    </main>

  );
}

export default Conteudo;
