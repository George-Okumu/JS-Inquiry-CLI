import { exec } from "child_process";
import { prompt } from "./index.mjs";
import fs from "fs";
import chalk from "chalk";
import os from "os";

function list_files_and_directories() {
    prompt([
        {
            type: 'input',
            name: 'directoryPath',
            message: 'Where is your directory located? Hint: use relative path.',
        }
    ])
        .then(answers => {
            const directoryPath = `${os.homedir}/${answers.directoryPath}`;

            // Verify that the directory exists
            if (!fs.existsSync(directoryPath) || !fs.lstatSync(directoryPath).isDirectory()) {
                console.error(chalk.red('The provided path is not a valid directory.'));
                return;
            }

            console.log(chalk.cyanBright(`Directory path is: ${directoryPath}`));

            const command = `ls -a ${directoryPath}`;

            // Execute the command to list files and directories.
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(chalk.red(`Error executing command: ${error.message}`));
                    return;
                }

                if (stderr) {
                    console.error(chalk.red(`Error: ${stderr}`));
                    return;
                }

                console.log(chalk.cyanBright("Below are your Directory contents:"))
                console.log(chalk.greenBright(stdout));
            });

        });
}

export { list_files_and_directories };