import fs from "fs";
import path from "path";

const readFile = (currentPath) => {
  const fileArray = [];
  // 遍历
  fs.readdirSync(currentPath).forEach((file) => {
    const filePath = path.join(currentPath, file);
    const obj = {
      name: file,
      path: filePath,
      items: null,
    };
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      obj.items = readFile(filePath);
    }
    fileArray.push(obj);
  });

  return fileArray;
};

export default readFile;
