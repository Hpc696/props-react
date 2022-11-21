import Elemento from "./Elemento"
import ElementoNascosto from "./ElementoNascosto";


export default function Lista(){
    const mostraElementoNascosto = true;
    return(
        <div> Lista:
        <Elemento testo="Buongiollo"/>  {/* Elemento(claudio, Buongiollo) */}
        <Elemento testo="Salvehini"/>
        <Elemento testo="KKaffe1!1!"/>
        <Elemento testo="Arrivedorci"saluto="cojone"/>
        <p>{1+1}</p>
        { mostraElementoNascosto ? <Elemento testo='Marcello'/> : <ElementoNascosto/> }
        { mostraElementoNascosto && <ElementoNascosto/>} {/* se entrambi sono 'true' renderizza quello a destra */}
        </div>
    )
}