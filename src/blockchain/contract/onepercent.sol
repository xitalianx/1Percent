//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract lotteria {
    address payable public admin;
    address payable[] public players;
    uint public lotteriaNumero;
    mapping (uint => address payable) public cronologiaVincitori;

    constructor(){
        admin=payable(msg.sender);
        lotteriaNumero = 1;
    }

    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;

    }

    TransferStruct[] transactions;

    function sendContract(address payable _to, uint amount) public payable{
        require(msg.value==amount);
        uint pay=99*amount/100;

        enter();
        
        
        _to.transfer(pay);
        
    }


    function addToBlockchain(address payable receiver, uint amount, string memory message) public payable{
        sendContract(receiver, amount);
        
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }



    function vediMontepremi() public view returns (uint) {
        return address(this).balance;
    }

    function vediGiocatori() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public payable {
        //.push aggiunge all'array (va poi castato come pagabile/payable)

            players.push(payable(msg.sender));

        
    }

    function generaNumeroCasuale() public view returns (uint) {
        //numero da hash con keccak, abi.encodePacked unisce variabili
        return uint(keccak256(abi.encodePacked(admin, block.timestamp)));
    }

    function scegliVincitore() public {
        require(msg.sender == admin); //solo admin può invocarla

        uint index = generaNumeroCasuale() % players.length;
        
        //admin prende il 10% del montepremi
        admin.transfer((address(this).balance)/10);
        players[index].transfer(address(this).balance);

        cronologiaVincitori[lotteriaNumero] = players[index];
        lotteriaNumero++;

        //resetta array giocatori
        players = new address payable[](0);
    }
}