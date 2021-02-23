const readline = require("readline");
const consola = require("consola");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askFiveWords() {
  rl.question("Inserts a phrase with 5 words!", (answer) => {
    console.log(answer);
    let splitPhrase = answer.split(" ");
    console.log(splitPhrase.length);

    if (splitPhrase.length >= 5) {
      consola.success(`Thank you: ${answer}`);
      rl.close();
    } else {
      consola.error("Error: your phrase doesn't have 5 words!");
      askFiveWords();
    }

  });
}
askFiveWords();
