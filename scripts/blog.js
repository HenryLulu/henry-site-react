const fs = require('fs');

const MD_PATH = './markdown';
const JSON_PATH = './src/JSON/blog/articles.json';

const mdDir = fs.readdirSync(MD_PATH);

const newJsonData = [];

const fileReg = /^\[((\d+\-\d+\-\d+)\-\d+)\]\[(.*)\](.+)\.md$/;
mdDir.forEach((fileName) => {
  const filePath = MD_PATH + '/' + fileName;
  const fileContent = fs.readFileSync(filePath).toString();
  const fileMatch = fileName.match(fileReg);
  if (fileMatch) {
    newJsonData.push({
      id: fileMatch[1],
      title: fileMatch[4],
      labels: fileMatch[3].split('|'),
      created_at: fileMatch[2],
      body: fileContent
    });
  } else {
    console.warn(`fail when parse file: ${fileName}`);
  }
});

const newJsonString = JSON.stringify(newJsonData);

console.log(newJsonString);

fs.writeFileSync(JSON_PATH, newJsonString);
