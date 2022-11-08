import { Route, Routes } from 'react-router-dom'

import Negozi from './pages/Negozi'
import AggiungiNegozio from './pages/AggiungiNegozio'
import Home from './pages/Home'
import Lotteria from './pages/Lotteria'
import Pay from './pages/Pay'
import Layout from './components/layout/Layout'

import { useContext } from "react";
import { TransactionContext } from "./context/transactionContext";

import styles from "../src/pages/Transaction.module.css";



  function App() {

    const {
      lotteryPot,
      currentAccount,
      connectWalletHandler,
      partecipazione,
      partecipantiLotteria,
      lotteryHistory,
      lotteryId
    } = useContext(TransactionContext);

    
    

  if(currentAccount==null){return <div>
    <h1 className={styles.neonScritta}>1PERCENT</h1>
    <button className={styles.startButton} onClick={connectWalletHandler}>connetti</button>
    </div>}
  else{
  return (
      <Layout>
      <Routes>
      <Route path="/addnegozio" element={<AggiungiNegozio address={currentAccount}/>} />
      <Route path="/" element={<Home indirizzo={currentAccount} />} />
      <Route path="/negozi" element={<Negozi address={currentAccount}/>} />
      <Route path="/lotteria" element={<Lotteria montepremi={lotteryPot} partecipazione={partecipazione} partecipanti={partecipantiLotteria} storiaLotteria={lotteryHistory} idLotteria={lotteryId}/>} />
      <Route path="/pay" element={<Pay/>} />
      </Routes>
      </Layout>
  );
}
}

export default App;
