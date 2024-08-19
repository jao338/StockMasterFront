const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const getTestFiles = (dir) => {
  const fullPath = path.join('cypress/e2e', dir);
  return fs.existsSync(fullPath)
    ? fs.readdirSync(fullPath).filter(file => file.endsWith('.cy.js')).map(file => path.join(fullPath, file))
    : [];
};

const testDirectories = [
  '/auth',
];

const testFiles = testDirectories.flatMap(getTestFiles).join(',');

if (testFiles) {
  try {
    execSync(`npx cypress run --spec "${testFiles}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Erro ao executar os testes:', error.message);
  }
} else {
  console.error('Nenhum arquivo de teste encontrado.');
}
