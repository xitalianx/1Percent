import classes from './Transaction.module.css'
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

function AggiungiNegozio(props) {

    const nameInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    const phoneInputRef = useRef()


    function submitHandler(event){
        event.preventDefault() //previene ricaricamento browser

        const enteredName = nameInputRef.current.value 
        const enteredImage = imageInputRef.current.value 
        const enteredAddress = addressInputRef.current.value 
        const enteredDescription = descriptionInputRef.current.value 
        const enteredPhone = phoneInputRef.current.value 
        const walletAddress = props.address

        const datiNegozio={
            nome: enteredName,
            image: enteredImage,
            indirizzo: enteredAddress,
            descrizione: enteredDescription,
            telefono: enteredPhone,
            address: walletAddress
        }

        aggiungiNegozio(datiNegozio)
    }


    const navigate = useNavigate()
    function aggiungiNegozio(datiNegozio){
        fetch('https://negozi1percent-default-rtdb.europe-west1.firebasedatabase.app/negozi.json',
        {
            method: 'POST',
            body: JSON.stringify(datiNegozio),
            headers:{
                'Content-TYpe': 'application/json'
            }
        }).then(() => {
            navigate('/negozi', {replace:true})  //si potrebbe usare .push ma con .replace non si può tornare indietro
        })}



    return <div className={classes.ampiezza}>
       <h1>Aggiungi tuo negozio</h1>
        <form className={classes.form} onSubmit={submitHandler}> 
            <div className={classes.control}>
                <label htmlFor='title'>Nome negozio</label>
                <input type='text' required id='title' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Immagine</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Indirizzo</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Descrizione</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Numero telefono</label>
                <input type='text' required id='address' ref={phoneInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Aggiungi</button>
            </div>
        </form>
        </div>


}

export default AggiungiNegozio