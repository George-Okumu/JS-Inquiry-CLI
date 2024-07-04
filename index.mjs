import inquirer from 'inquirer';
import chalk from 'chalk';
import { load_spinner } from './spinner.mjs';
import { executer } from './executer.mjs';
import { list_files_and_directories } from './list.mjs';

const prompt = inquirer.createPromptModule();
let options = ["Check Ubuntu Version", "Check Installed Packages", "Check amount of free and used memory in the system.", "Check amount of disk space used and available on file systems.", "List all the files and directories within a folder.", "Check CPU Information", "Check Network Information", "List All Running Processes", "Check System Uptime", "Update System Packages", "Shutdown the System", "Restart the System", "View System Information"];


// make this function async to wait for spinner to complete loading
async function main() {
    try {
        await executer('date');

        await load_spinner();

        console.log(chalk.yellow(`What do you want to do today?`));
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
                case "Check amount of free and used memory in the system.":
                    executer('free -h');
                    break;
                case "Check amount of disk space used and available on file systems.":
                    executer('df -h');
                    break;
                case "List all the files and directories within a folder.":
                    list_files_and_directories();
                    break;
                case "Check CPU Information":
                    executer('lscpu');
                    break;
                case "Check Network Information":
                    executer('ip a');
                    break;
                case "Check System Uptime":
                    executer('uptime');
                    break;
                case "List All Running Processes":
                    executer('ps aux');
                    break;
                case "Update System Packages":
                    executer('sudo apt update');
                    break;
                case "Shutdown the System":
                    executer('sudo shutdown now');
                    break;
                case "Restart the System":
                    executer('sudo reboot');
                    break;
                case "View System Information":
                    executer('uname -a');
                    break;
                case "Check Installed Packages":
                    executer('dpkg -l')
            }
        });
}

main();

export { prompt };