#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("*******Welcome To Quiz********");
const quiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: chalk.bgBlue("Q1-Which of the following is data type of typescript?"),
        choices: ["a-number", "b-boolean", "c-string", "d-all of the above"]
    },
    {
        name: "q2",
        type: "list",
        message: chalk.bgCyan("Q2-Which of the following is command of tsconfig.json file?"),
        choices: ["a-tsc --init", "b-tsc --y", "c-npm i inquirer", "d-all of the above"]
    },
    {
        name: "q3",
        type: "list",
        message: chalk.bgCyanBright("Q3-Which of the following is compilation command from typescript to javascript?"),
        choices: ["a-tsc", "b-node main .js", "c-tsc main js", "d-tsc main.ts"]
    },
    {
        name: "q4",
        type: "list",
        message: chalk.bgGreenBright("Q4-Typescript is a superset of what?"),
        choices: ["a-java", "b-javascript", "c-c++", "d-python"]
    },
    {
        name: "q5",
        type: "list",
        message: chalk.bgBlack("Q5-What is the command of installation for inquirer?"),
        choices: ["a-npm i chalk", "b-npm i inquirer", "c-npm i @types/node", "d-all of the above"]
    },
    {
        name: "q6",
        type: "list",
        message: chalk.bgMagentaBright("Q6-Which of the following are right way to ask data from user?"),
        choices: ["a-inquirer.prompt", "b-await inquirer.prompt()", "c-inquirer.prompt()", "d-all of the above"]
    }
]);
let scores = 0;
if (quiz.q1 === "d-all of the above") {
    console.log(chalk.greenBright("1-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
if (quiz.q2 === "a-tsc --init") {
    console.log(chalk.greenBright("2-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
if (quiz.q3 === "a-tsc") {
    console.log(chalk.greenBright("3-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
if (quiz.q4 === "b-javascript") {
    console.log(chalk.greenBright("4-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
if (quiz.q5 === "b-npm i inquirer") {
    console.log(chalk.greenBright("5-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
if (quiz.q6 === "b-await inquirer.prompt()") {
    console.log(chalk.greenBright("6-Correct"));
    scores++;
}
else {
    console.log(chalk.red("incorrect answer"));
}
console.log(chalk.bgMagenta(`*****Your score is ${scores}*****`));
