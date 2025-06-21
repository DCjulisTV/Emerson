/**
 * Logs
 *
 * @author Dev Gui
 */
const { version } = require("../../package.json");

exports.sayLog = (message) => {
  console.log("\x1b[36m[EMERSON BOT | TALK]\x1b[0m", message);
};

exports.inputLog = (message) => {
  console.log("\x1b[30m[EMERSON BOT | INPUT]\x1b[0m", message);
};

exports.infoLog = (message) => {
  console.log("\x1b[34m[EMERSON BOT | INFO]\x1b[0m", message);
};

exports.successLog = (message) => {
  console.log("\x1b[32m[EMERSON BOT | SUCCESS]\x1b[0m", message);
};

exports.errorLog = (message) => {
  console.log("\x1b[31m[EMERSON BOT | ERROR]\x1b[0m", message);
};

exports.warningLog = (message) => {
  console.log("\x1b[33m[EMERSON BOT | WARNING]\x1b[0m", message);
};

exports.bannerLog = () => {
 console.log(`\x1b[36m███████████████████████████████████████████████████\x1b[0m`);
console.log(`\x1b[36m█▀▀▀█░█▀▀▀█░█▀▀▀█░█▀▀▀█░█▀▀▀█░█▀▀▀█░█▀▀▀█░█▀▀▀█\x1b[0m`);
console.log(`\x1b[36m█▄▄▄█░█▄▄▄█░█▄▄▄█░█▄▄▄█░█▄▄▄█░█▄▄▄█░█▄▄▄█░█▄▄▄█\x1b[0m`);
console.log(`\x1b[36m▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\x1b[0m`);
  console.log(`\x1b[36m🤖 Versão: \x1b[0m${version}\n`);
};
