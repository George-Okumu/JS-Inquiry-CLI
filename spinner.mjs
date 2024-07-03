import ora from 'ora';

function load_spinner() {
    const spinner = ora('Loading...').start();
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            spinner.color = 'yellow';
            spinner.text = 'Loading the program....';
        }, 1000);

        setTimeout(() => {
            spinner.succeed('Program Ready.');
            resolve();
        }, 2000);
    })
}

export { load_spinner };