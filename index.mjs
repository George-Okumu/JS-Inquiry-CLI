import inquirer from 'inquirer';
import chalk from 'chalk';
import { load_spinner } from './spinner.mjs';
import { executer } from './executer.mjs';

const prompt = inquirer.createPromptModule();
let options = ["Check Ubuntu Version", "Check amount of free and used memory in the system.", "Check amount of disk space used and available on file systems"];


// make this function async to wait for spinner to complete loading
async function main() {
    try {
        await load_spinner();

        console.log();
        console.log(chalk.yellow("What do you want to do today?."));
        console.log();

        check_input();

    } catch (error) {
        console.error(chalk.red('Error:', error));
    }


}

function check_input() {
    prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Choose an option:',
            choices: options
        }
    ])
        .then(answers => {
            switch (answers.option) {
                case "Check Ubuntu Version":
                    executer('lsb_release -a')
                    break;
            }
        });
}

main();