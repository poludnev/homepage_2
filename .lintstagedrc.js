const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint`,
  `prettier --write "{pages,components}/**/*.{ts,tsx,json,scss,md}"`,
  `prettier --write "*.{json,md}"`,
];

module.exports = {
  '*.{js,jsx,ts,tsx,scss}': [buildEslintCommand],
};
