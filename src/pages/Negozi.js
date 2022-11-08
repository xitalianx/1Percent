import classes from './Transaction.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

function Negozi(props) {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedNegozi, setLoadedNegozi] = useState([])


  const navigate = useNavigate()

  console.log(loadedNegozi)

  useEffect(() => {

    setIsLoading(true)
    fetch('https://negozi1percent-default-rtdb.europe-west1.firebasedatabase.app/negozi.json')
  .then(response => {
    return response.json()
  }).then(data => {
    const negozi = []
    
    for (const item in data){
      console.log(item)
      const negozio={
        id: item,
        ...data[item] //spread operator copia i vari dati dell'oggetto
      }
      negozi.push(negozio)
    }

    setIsLoading(false)
    setLoadedNegozi(negozi)
  })
  }, [])


    const cancellaNegozio = (dati) => {

      if(dati.address != props.address){
        alert('Puoi cancellare solo i negozi creati con il tuo account')
        return
      }
    
      fetch(`https://negozi1percent-default-rtdb.europe-west1.firebasedatabase.app/negozi/${dati.id}.json`,
      {
          method: 'DELETE',
      }).then(() => {
          navigate('/', {replace:true})  //si potrebbe usare .push ma con .replace non si può tornare indietro
         alert('Negozio cancellato')
      })}


  

  if(isLoading){
    return <section>
      <p>Caricamento...</p>
    </section>
   }
    return <section className={classes.ampiezza}>
        <div className={classes.actions}>
        <Link to="/addnegozio"><button>AGGIUNGI IL TUO NEGOZIO</button></Link>
        </div>
        
        <ul className={classes.list}>
        {loadedNegozi.map(item=>{return<li key={item.telefono} className={classes.item}>
        <Card>
        <button onClick={function(){cancellaNegozio(item)}}>X</button>
        <div className={classes.image}>
        <img src={item.image} alt={item.nome}/>
        <div className={classes.content}>
        <h3>{item.nome}</h3>
        <address>{item.indirizzo}</address>
        <br></br>
        <p>Descrizione negozio:{item.descrizione}</p>
        <br></br>
        <p>{item.address}</p>
        <p>📞{item.telefono}</p>
        </div>
        <div className={classes.actions}>
        <Link to="/pay"><button>Paga</button></Link>
        </div>
        </div>
        </Card>
        </li>})}</ul>
        </section>

}

export default Negozi