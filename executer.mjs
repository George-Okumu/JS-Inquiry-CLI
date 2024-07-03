import chalk from "chalk";
import { exec } from "child_process";

function executer(command) {
    return new Promise((res, reject) => {
        exec(command, (error, stdout, stderr) => {
            console.log(chalk.green(stdout));
            res(stdout);
        });
    })
}


export { executer };