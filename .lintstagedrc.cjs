module.exports = {
  "**/*": [() => "just nvm-exec 'yarn check-types'", () => "just nvm-exec 'yarn lint'", "prettier ./src --write --ignore-unknown"]
};
