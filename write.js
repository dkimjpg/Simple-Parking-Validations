//const reader = require('xlsx');
import XLSX from 'xlsx';
const workbook = XLSX.readFile('parkingDataTest1.xlsx');
const sheetName = 'Sheet1';
const worksheet = workbook.Sheets[sheetName];

//get last row in sheet
const lastRow = XLSX.utils.decode_range(worksheet['!ref']).e.r;

// Data to append
const newData = [
    ['New Value 1', 'New Value 2'],
    ['Another Value 1', 'Another Value 2']
];

// Append data to the sheet
newData.forEach(row => {
    worksheet[`A${lastRow + 1}`] = { v: row[0] };
    worksheet[`B${lastRow + 1}`] = { v: row[1] };
    //lastRow++;
});

// Write the updated workbook to a file
XLSX.writeFile(workbook, 'parkingDataTest1.xlsx');