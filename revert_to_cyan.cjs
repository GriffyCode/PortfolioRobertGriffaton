expoconst fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace blue- with cyan-
      content = content.replace(/blue-/g, 'cyan-');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src/components');
replaceInDir('./src/data');

console.log('Reverted blue- to cyan-');
