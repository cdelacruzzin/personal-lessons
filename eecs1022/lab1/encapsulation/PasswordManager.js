
// Creating a PasswordManager class: 
// Implement a PasswordManager class that securely stores and manages passwords. The passwords should be stored in a private property. The class should have methods for adding a password, retrieving a password, deleting a password, and updating a password. These methods should be the only way to interact with the stored passwords.
const inquirer = require('inquirer');


class PasswordManager {
    // #passwordArr=[];  //this is a private field
    #entry = {};
    constructor(password, website) {
        this.password = password;
        this.website = website;
        this.#entry[this.website] = this.password;
    }
    addPass(password, website) {

        const objKeys = Object.keys(this.#entry);
        console.log(objKeys);

        if( objKeys.includes(website) ){
            console.log(`${website} is already in array`)

        } else {
            this.#entry[website] = password;
        }
    }
    getPass() {
        console.log(this.#entry)
    }
    deletePass() {

    }
    updatePass() {

    }
}

const pass1 = new PasswordManager('password', 'twitch');
pass1.addPass('pass2', 'web2');
pass1.getPass();
pass1.addPass('pass3', 'web2');
pass1.getPass();
// pass1.addPass('pass4', 'web3');
// pass1.getPass();
