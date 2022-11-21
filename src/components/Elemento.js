
export default function Elemento(props){
    
    return(
        <div>{props.saluto ? props.saluto : props.testo}</div> //se esiste .saluto in quell'elemento renderizza quello altrimenti .testo 
    )
}