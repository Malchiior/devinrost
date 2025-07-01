const fs = require("fs");
const path = require("path");

function listFiles(dir, indent = "") {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      console.log(`${indent}${item}/`);
      listFiles(fullPath, indent + "  ");
    } else {
      console.log(`${indent}${item}`);
    }
  }
}

listFiles(".");
