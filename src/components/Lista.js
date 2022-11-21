import Elemento from "./Elemento"
import ElementoNascosto from "./ElementoNascosto";
import Bottone from "./Bottone";
import { useState } from "react";

export default function Lista(){
    //const mostraElementoNascosto = true;
    const [statoLista, modificaStatoLista] = useState(true);

    function cambiaStato(){
        modificaStatoLista(!statoLista)
    }
    return(
        <div> Lista:
        <Elemento testo="Buongiollo"/>  {/* Elemento(claudio, Buongiollo) */}
        <Elemento testo="Salvehini"/>
        <Elemento testo="KKaffe1!1!"/>
        <Elemento testo="Arrivedorci"saluto="cojone"/>
        <p>{1+1}</p>
        <Bottone mostra={cambiaStato}/>
        { statoLista ?<ElementoNascosto/> : <Elemento testo='Marcello'/> }
        {/*}
        { mostraElementoNascosto ? <Elemento testo='Marcello'/> : <ElementoNascosto/> }
        { mostraElementoNascosto && <ElementoNascosto/>} {/* se entrambi sono 'true' renderizza quello a destra */}
        </div>
    )
}