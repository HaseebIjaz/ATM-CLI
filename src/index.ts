#!/usr/bin/env node

// 1. When the system starts the user is prompted with a user id and user pin.
// 2. After entering the details successfully, the ATM functionalities are unlocked.
// 3. All the user data is generated randomly.

import { askUserNameAndPin, showLoginMessage, sleep, welcome } from "./HelperFunctions.js";


const main = async () => {
    await welcome();
    await sleep(1000); 
    const { userName, pin } = await askUserNameAndPin();
    await showLoginMessage();
    console.log({ userName, pin });
}

main();