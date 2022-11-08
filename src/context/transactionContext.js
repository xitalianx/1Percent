import { useEffect, useState, createContext } from 'react'
import onepercent from '../blockchain/onepercent'
import Web3 from 'web3'
import { ethers } from 'ethers'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')


export const TransactionContext = createContext()



export const TransactionsProvider = ({ children }) => {
  const [addressTo, setAddressTo] = useState('')
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')
  const [currentAccount, setCurrentAccount] = useState(null)
 


  let [web3, setWeb3] = useState(null) //variabile per contenere dati web3, andiamo poi a riempirla in connetwallethandler quando connettiamo metamask
  const [abiContract, setAbiContract] = useState(null) 

    useEffect(() => {
      updateState()
    }, [abiContract])

  
    const updateState = () => {
      if (abiContract) {
        getPot()
        getAllTransactions()
        getPartecipazione()
        tueTransazioni()
        getPartecipanti()
        getHistory()
        getLotteryId()
    }
    }

    const [transactions, setTransactions] = useState([])

    const getAllTransactions = async () => {
        const availableTransactions =
          await abiContract.methods.getAllTransactions().call()

        const structuredTransactions = availableTransactions.map(
          transaction => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: timeAgo.format(
              new Date(Number(transaction.timestamp)*1000)
            ),
            message: transaction.message,

            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          }),
        )
        setTransactions(structuredTransactions)
      }

      let yourTransactions = []
      tueTransazioni()
      function tueTransazioni()
      {
        for(let i=0; i<transactions.length; i++)
        {
          if(currentAccount == transactions[i].addressFrom)
          {
            yourTransactions.push(transactions[i])
          }
        }
      }

      


      const sendTransaction = async (addressTo, amount, message) => {
        try{
        await abiContract.methods.addToBlockchain(addressTo, ethers.utils.parseEther(amount), message).send({  
          from: currentAccount,
          value: ethers.utils.parseEther(amount)
        })
        updateState()
          }  
          catch(err){
            console.log(err)
          }  
      }

    let [partecipazione, setPartecipazione]   = useState(null)
    const getPartecipazione = async () => {
      const players= await abiContract.methods.vediGiocatori().call()
      for (let i=0; i<players.length; i++){
        if(currentAccount==players[i])
        {
          setPartecipazione(1)
          return
        }
        else {setPartecipazione(0)}
      }
      
    }

    const [lotteryPot, setLotteryPot] = useState()
    const getPot = async () => {
    const pot = await abiContract.methods.vediMontepremi().call()
    setLotteryPot(web3.utils.fromWei(pot, 'ether'))
    }

    const [partecipantiLotteria, setPartecipantiLotteria] = useState([])
    const getPartecipanti = async () => {
      const partecipanti = await abiContract.methods.vediGiocatori().call()
      setPartecipantiLotteria(partecipanti)
    }

    const [lotteryHistory, setLotteryHistory] = useState([])
    const getHistory = async (id) => {
    setLotteryHistory([])
    for (let i = parseInt(id); i > 0; i--) {
      const winnerAddress = await abiContract.methods.cronologiaVincitori(i).call()
      const historyObj = {}
      historyObj.id = i
      historyObj.address = winnerAddress
      setLotteryHistory(lotteryHistory => [...lotteryHistory, historyObj])
    }
    }

    const [lotteryId, setLotteryId] = useState() //serve averla come variabile per poi fare loop e prendere dati vincitori precedenti lotterie
    const getLotteryId = async () => {
    const lotteryId = await abiContract.methods.lotteriaNumero().call()
    setLotteryId(lotteryId)
    await getHistory(lotteryId)
    }


  
  
    const connectWalletHandler = async () => {
      //verifichiamo che l'utente abbia metamask installato, altrimenti messaggio errore
      if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          try{
              await window.ethereum.request({ method: "eth_requestAccounts"}) //comando per far aprire metamask
  
              web3 = new Web3(window.ethereum)
              setWeb3(web3)
              const account = await web3.eth.getAccounts() //prendiamo lista account (quello in uso è account[0])
              setCurrentAccount(account[0]) //settiamo quello in uso
             
  
              const vm = onepercent(web3) 
              setAbiContract(vm)
  
          } catch(err) {
              console.log(err.message)
              
          }//try connessione metamask catch error altrimenti
      } 
      else{
          console.log("Please install Metamask")
      }
  }  

  
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        currentAccount,

        setAmount,
        addressTo,
        amount,
        message,
        setMessage,
        setAddressTo,
        lotteryPot,
        connectWalletHandler,
        sendTransaction,
        partecipazione,
        yourTransactions,
        partecipantiLotteria,
        lotteryHistory,
        lotteryId
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
