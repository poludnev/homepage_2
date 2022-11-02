const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')} `,
  `prettier --write "pages/**/${filenames}"`,
  `prettier --write "components/**/${filenames}"`,
  `prettier --write "*.{json,md}"`,
];

module.exports = {
  '*.{js,jsx,ts,tsx,md,scss}': [buildEslintCommand],
};
