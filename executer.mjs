import chalk from "chalk";
import { exec } from "child_process";

function executer(command) {
    exec(command, (error, stdout, stderr) => {
        console.log(chalk.green(stdout));
    });
}


export { executer };