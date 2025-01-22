const reader = require('xlsx');
//currently, the excel test file is being read, change this behavior to either detect any excel files or something else
const file = reader.readFile('./parkingCodeTest1.xlsx');

let data = [];
const sheets = file.SheetNames;
for(let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
        data.push(res)
    })
}

console.log(data);