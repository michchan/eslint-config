/**
 * Set and tag from version in package.json
 */
const fs = require('fs')
const { execSync } = require('child_process')

// Get all config js files
const configs = fs
  .readdirSync('./')
  .filter(filename => /(?<!index)\.js$/i.test(filename))

// Test each config
configs.forEach(name => execSync(`npm run eslint -- --config ./${name}`, {
  stdio: 'inherit',
}))