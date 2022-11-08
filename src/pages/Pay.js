import styles from "./Transaction.module.css";
import { useContext } from "react";
import { TransactionContext } from "../context/transactionContext";


function Pay() {

  const {
    sendTransaction,
    setAddressTo,
    addressTo,
    setAmount,
    amount,
    message,
    setMessage,
    yourTransactions 
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressTo || !amount || !message) {
      console.log("Please fill all the fields");
      return;
    }
    sendTransaction(addressTo, amount, message);
  };


  return (<div className={styles.ampiezza}>
    <main className={styles.mainContainer}>
    <div className={styles.sideContainer}>
    <div className={styles.container}>
      <h3 className={styles.formTitle}>Modulo pagamento</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.swapContainer}>
            <p className={styles.swapTitle}>Invia da/a</p>
          </div>

          <div className={styles.formBody}>
            <div className={styles.formInputContainer}>
              <h4 className={styles.formInputTitle}>A</h4>
              <input
                className={styles.formInput}
                type="text"
                name="addressTo"
                value={addressTo}
                onChange={(e) => setAddressTo(e.target.value)}
              />
            </div>
            <div className={styles.formInputContainer}>
              <h4 className={styles.formInputTitle}>Messaggio</h4>
              <input
                className={styles.formInput}
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            <h4 className={styles.footerTitle}>Importo</h4>

            <div className={styles.footerContainer}>
              <div className={styles.amountContainer}>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.amountInput}
                    type="number"
                    name="amount"
                    value={amount}
                    step="0.001"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <button className={styles.sendButton} type="submit">
                Paga
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className={styles.activityContainer}>
      <div className={styles.container}>
      <div className={styles.tabContainer}>
        <p className={styles.tabTitle}>Le tue attività</p>  
      </div>
      <div className={styles.feedList}>
        {yourTransactions.map(
          ({ id, addressFrom, timestamp, message, addressTo }, index) => (
            <div key={index} className={styles.feedItem}>

              <div className={styles.feedDetails}>
                <h3 className={styles.feedAuthor}>
                  {addressFrom} to {addressTo}
                </h3>
                <span className={styles.feedCreatedAt}>
                  {timestamp}
                </span>

                <p className={styles.feedBody}>{message}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>  
    </div> 
    </div>
    </main>
    </div>


  );
}

export default Pay
