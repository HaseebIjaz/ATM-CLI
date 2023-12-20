//Imports
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';

//Sleep
export const sleep = (ms = 2000) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(0);
        },ms)
    })
}

//Welcome

export const welcome = () => {
    const message = 'ATM  !'
    figlet(message,(err, data) =>{
        console.log(data);
    });
}

export const askUserNameAndPin = () => {
    return inquirer.prompt([{
            name: 'userName',
            type: 'input',
            message: 'Enter Username : ',
        },
        {
            name: 'pin',
            type: 'input',
            message: 'Enter Pin : '
        } 
    ])
}

export const showLoginMessage = async () => {
    const loginMessage = 'Hi, lets begin, you have been logged in !';
    const animationObj = chalkAnimation.rainbow(loginMessage);
    await sleep(2000);
    animationObj.stop();
}