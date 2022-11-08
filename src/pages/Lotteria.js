import styles from "./Transaction.module.css";

function Lotteria(props) {


    if (props.partecipazione==1){
        return <section className={styles.ampiezza}>
        <h1 className={styles.formTitle}>LOTTERIA N° {props.idLotteria}</h1>
        <h5 className={styles.neonText}>Montepremi: {props.montepremi}</h5>
        <h2 className={styles.neonScritta}>Stai partecipando a questa estrazione</h2>
        <div className={styles.container}>
        <p className={styles.tabTitle}>Partecipanti:</p>  
        <ul>
        {props.partecipanti.map(item=>{return <li>{item}<br></br></li>})}
        </ul>
        </div>
        <br></br>
      <br></br>
      <div className={styles.container}>
        <p className={styles.tabTitle}>Vincitori lotterie passate:</p>  
        {
            (props.storiaLotteria && props.storiaLotteria.length > 0) && props.storiaLotteria.map(item => {
                if (props.idLotteria != item.id) {
                    return <div className={styles.feedList}>
                            <div  key={item.id}>
                            <div className={styles.feedAuthor}>Lottery #{item.id} winner:</div>
                            <div>
                            <a href={`https://etherscan.io/address/${item.address}`}>
                            {item.address}
                            </a>
                            </div>
                            </div>
                            </div>
                            }
                if (props.idLotteria == item.id) {
                    return <div  key={item.id}>
                            <div className={styles.feedAuthor}>Lottery #{item.id} winner:</div>
                            <div>
                            <p>In attesa prossima estrazione...</p>
                            </div>
                            </div>
                            }
                          })
        }
        </div>
        </section>
    }
    else {
        return <section className={styles.ampiezza}>
        <h1 className={styles.formTitle}>LOTTERIA N° {props.idLotteria}</h1>
        <h5 className={styles.neonText}>Montepremi: {props.montepremi}</h5>
        <h2 className={styles.neonScritta}>Non stai partecipando alla lotteria</h2>
        <div className={styles.container}>
        <p className={styles.tabTitle}>Partecipanti:</p>  
        <ul>
        {props.partecipanti.map(item=>{return <li  >{item}<br></br></li>})}
        </ul>
        </div>
        <br></br>
      <br></br>
      <div className={styles.container}>
        <p className={styles.tabTitle}>Vincitori lotterie passate:</p>  
        {
            (props.storiaLotteria && props.storiaLotteria.length > 0) && props.storiaLotteria.map(item => {
                if (props.idLotteria != item.id) {
                    return <div  key={item.id}>
                            <div className={styles.feedAuthor}>Lottery #{item.id} winner:</div>
                            <div>
                            <a href={`https://etherscan.io/address/${item.address}`}>
                            {item.address}
                            </a>
                            </div>
                            </div>
                            }
                if (props.idLotteria == item.id) {
                    return <div  key={item.id}>
                            <div className={styles.feedAuthor}>Lottery #{item.id} winner:</div>
                            <div>
                            <p>In attesa prossima estrazione...</p>
                            </div>
                            </div>
                            }
                          })
        }
        </div>
        </section>
    }

    

}

export default Lotteria