import inquirer from "inquirer";
import chalk from "chalk";
//create class
class person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    //user input
    userInput(input) {
        // if else statement
        if (input.includes('talk to others about yourself openly')) {
            this._personality = 'happly';
        }
        else if (input.includes('keep your word to yourself')) {
            this._personality = 'talk rude';
        }
    }
    // return function
    get personality() {
        return this._personality;
    }
}
//create objects 
class Main {
    async main() {
        // await called out
        const ans = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.yellow("tell your behaviour?"),
            choices: [
                '1: talk to others about my self.',
                '2: keep quite and dont ask questions'
            ]
        });
        // create a personal class
        let myPerson = new person();
        myPerson.userInput(ans.choice);
        // output response
        console.log(`you are ${myPerson.personality}`);
    }
}
const myObject = new Main();
myObject.main();
