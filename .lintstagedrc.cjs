module.exports = {
  "**/*": [() => "just nvm-exec 'pnpm check-types'", () => "just nvm-exec 'pnpm lint'", () => "just nvm-exec 'pnpm prettier-check'"]
};
