#!/usr/bin/env node

// 1. When the system starts the user is prompted with a user id and user pin.
// 2. After entering the details successfully, the ATM functionalities are unlocked.
// 3. All the user data is generated randomly.

import chalkAnimation from 'chalk-animation';
import { askUserNameAndPin, showLoginMessage, sleep, welcome } from "./HelperFunctions.js";
import keytar from 'keytar';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';

const appName = 'ATM';
const main = async () => {
    await welcome();
    await sleep(1000); 
    const { userName, pin } = await askUserNameAndPin();
    await showLoginMessage();

    const loginSpinner =  createSpinner('Logging you in ...').start();
    const retrievedPassword = await keytar.getPassword(appName,userName);

    const newPassMsg = 'Your new password has been saved ';
    const updatePassMsg = 'Pin didnt match, However Your password has been updated ';
    const atmUnlocked = ' ATM Unlocked !'

    if(retrievedPassword === null){
        keytar.setPassword(appName,userName,pin);
        loginSpinner.success({
            text: newPassMsg
        })
    }
    else{
        if(retrievedPassword === pin){
            loginSpinner.success({
                text: newPassMsg
            });
        }
        else{
            keytar.setPassword(appName,userName,pin);
            loginSpinner.success({text:  updatePassMsg})
        }
    }
    
    figlet.text(atmUnlocked, {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      },  function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
      });
}

main();