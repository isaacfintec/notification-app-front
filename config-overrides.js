/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias, configPaths, aliasJest } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json'); // or jsconfig.paths.json

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
