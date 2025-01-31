const reader = require('xlsx');
//currently, the excel test file is being read, change this behavior to either detect any excel files or something else
const file = reader.readFile('Parking Codes/parkingCodeTest1.xlsx');

const readCode = document.getElementById("getCode");

const firstSheet = file.Sheets[file.SheetNames[0]];
const cellC1 = firstSheet['C1'];
const row = cellC1 ? cellC1.v : undefined;
//console.log('Value in cell C1:', row);

const codeString = 'A' + row;
const codeCell = firstSheet[codeString];
const code = codeCell ? codeCell.v : undefined;
//console.log(code)
readCode.innerHTML = code;

const nextRow = Number(row) + 1;
//console.log(nextRow);
firstSheet['C1'] = {
    v: nextRow,
    t: 'n'
};
reader.writeFile(file, 'Parking Codes/parkingCodeTest1.xlsx');

/*
let data = [];
const sheets = file.SheetNames;
for(let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
        data.push(res)
    })
}

//Might be best to put all these lines in a queue (or a stack, it doesn't really matter) so I can just 
//pop after one code is used. When the queue is empty, that's how I'll know that I'm out of codes.
console.log(data);
*/