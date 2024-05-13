export default function Footer(){

    return(
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
    );
}