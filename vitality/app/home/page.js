// Conteudo.jsx
import './conteudo.css'; 
import Link from 'next/link';

function Conteudo() {

  return (
    <main className="home">
      <header className='conteudo'>
        <main className='bem-vindo'> 
          <div className='vitality'> 
            <p className='texto-bemvindo' id='texto-bemvindo1'>Bem-vindo ao Vitality</p>
            <p className='texto-bemvindo' id='texto-bemvindo2'>O Vitalily permite que você registre seus sintomas e facilita sua ida ao médico.</p>
            <button className='obj'> <a className='obj' href='#'>OBJETIVO</a></button>
          </div>
          <div className='img-bem-vindo'>
            <img src='../imgs/bemvindo.png' alt='Bem-vindo' />
            <img className='img-bem-vindo2' src='../bemvindo-mob.png' alt='Bem-vindo Mobile' />
          </div>
        </main>
        <h1 className='explore'> Explore</h1>

        <aside className='explore'> 
         <Link href="/registrar"><button className='caixa' id='registre'><img src='../imgs/sintoma-icon.png'/><p className='texto-ex'> REGISTRE SINTOMAS</p></button></Link> 
         <Link href="/salvos"><button className='caixa' id='gere'><img src='../imgs/relatorio-icon.png'/><p className='texto-ex'> GERE RELATÓRIOS</p></button></Link> 
         <Link href="/hospitais"><button className='caixa' id='hospitais'><img src='../imgs/hospital-icon.png'/><p className='texto-ex'> HOSPITAIS PRÓXIMOS</p></button></Link> 
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
      <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">    
            <li> <Link href="/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
    </main>
    
  );
}

export default Conteudo;
