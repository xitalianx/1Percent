

const contractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address payable","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"message","type":"string"}],"name":"addToBlockchain","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cronologiaVincitori","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"generaNumeroCasuale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTransactions","outputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct lotteria.TransferStruct[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransactionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteriaNumero","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"scegliVincitore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"vediGiocatori","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vediMontepremi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const onepercent= web3 => {
    return new web3.eth.Contract(
        contractAbi,
        "0x8C82443742e521b00b54C7c94aA6Aabf61Faa730"
    )
}

export default onepercent


//scaricare npm i solc
//in package json sotto script creare nuova voce: "compile": "solcjs --abi --include-path node_modules/ --base-path . blockchain/contract/onepercent.sol --output-dir blockchain/build"
//da terminal eseguire "npm run compile"
//creare file come questo e copiare build



//contratto goerli 0xd6A7762D26a782Fe465442F58BB7B461E5371070
//contratto polygon 0x8C82443742e521b00b54C7c94aA6Aabf61Faa730