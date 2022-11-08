import styles from './Home.module.css'

function Home(props) {
    
    return <div className={styles.ampiezza}>
     <div className={styles.hero}>
    <div className={styles.container}>
      <h1>1PERCENT </h1>
      <p>Paga in criptovalute, partecipa a ricche lotterie e scopri un nuovo metodo di pagare sicuro, libero e decentralizzato!</p>
    </div>
  </div>
  <section className={styles.content}>
    <h2>Perchè 1Percent?</h2>
    <p>Pagando con 1Percent al posto che con una carta di credito l'1% della tua spesa, al posto che andare come commissione ai circuiti internazionali, andrà a comporre il montepremi per una lotteria con estrazione settimanale. Usando questa piattaforma potrai pagare con criptovalute,  tenere traccia delle tue spese, scoprire le attività commerciali che fanno parte di questo sistema e avrai la possibilità di vincere ricchi premi. La mission di 1Percent è quella di promuovere i pagamenti in criptovaluta, ancora poco diffusi soprattutto in Italia, parallelamente si vuole premiare l'utente che è il perno della rivoluzione digitale basata sulle criptovalute che nulla ha a che vedere con la "rivoluzione" digitale voluta da banche e banche centrali</p>

    <h3>Roadmap</h3>
    <p>1Percent è una piattaforma nuova che avrà ampi margini di miglioramento in futuro, nel lungo termine si cercherà di creare un ecosistema e una app per smartphone che dia all'utente svariate possibilità di interazione con il mondo delle criptovalute (comprare e vendere criptovalute, detenerle in un wallet integrato, guadagnare criptovlute con pubblicità e partecipare a interessanti promozioni e concorsi). Di seguito la roadmap più nel dettaglio:</p>
    <p><li>Creazione dell'applicazione per smartphone, essenziale per poter pagare con 1Percent ovunque ti trovi, rispetto all'attuale piattaforma beta si avrà la possibilità di scansionare qrcode per rendere ancora più veloce la fase di pagamento.</li></p>
    <p><li>Possibilità di utilizzare altre blockchain. Attualmente si utilizza la rete polygon che permette di fare transazioni con fees vicine allo zero, non è però escluso che si prendano in considerazione altre blockchain dove le fees siano ancora più basse (Solana) o direttamente dove non ci siano fees (Iota).</li></p>
    <p><li>Pagamenti con diverse criptovalute (usdc, dai, wbtc, weth), in modo da lasciare più discrezione all'utente nello scegliere il suo metodo di pagamento preferito. </li></p>
    <p><li>Possibilità per i commercianti di ricevere i pagamenti direttamente in stablecoin indipendentemente dalla criptovaluta scelta dall'utente.</li></p>
    <p><li>Integrazione wallet in app (in modo da non dover più connettere metamask).</li></p>
    <p><li>Possibilità di guardare pubblicità per ottenere criptovalute (con cui pagare le minime gas fees ora esistenti).</li></p>
    <p><li>5% montepremi va all'attività in cui è stato effettuato il pagamento vincente per incentivare i commercianti a partecipare alla crescita di questo ecosistema.</li></p>
    <p><li>Possibilità di acquistare/vendere criptovalute direttamente in app.</li></p>
  </section>
  </div>

    
}

export default Home

/*<div>
    <section>
        <h1 className={styles.styles.tabTitle}>Benvenuto {styles.props.indirizzo}</h1> 
        <div className={styles.styles.tabTitle}> scopri il fantastico mondo di 1PERCENT, paga in criptovalute e partecipa settimanalmente alla lotteria!</div>
    </section>
    <section className={styles.styles.tabTitle}>Perchè 1Percent? Pagando con 1percent al posto che con una carta di credito l'1% della tua spesa, al posto che andare come commissione ai circuiti internazionali, andrà a comporre il montepremi con estrazione settimanale.</section>
    <section className={styles.styles.tabTitle}>La mission di 1Percent è quella di promuovere i pagamenti in criptovaluta premiando l'utente che è il perno della rivoluzione crypto</section>
    <ol>
        <li>Pagamenti con diverse criptovalute (usdc, dai, wbtc, weth)</li>
        <li>Integrazione wallet in app (in modo da non dover più connettere metamask)</li>
        <li>Possibilità di guardare pubblicità per ottenere criptovalute (con cui pagare le minime gas fees)</li>
        <li>5% montepremi va all'attività in cui è stato effettuato il pagamento vincente</li>
        <li>Possibilità di acquistare/vendere criptovalute direttamente in app</li>
        </ol>  
    </div>*/