module.exports = {
  "**/*": [() => "yarn check-types", () => "yarn lint", "prettier --write --ignore-unknown"]
};
