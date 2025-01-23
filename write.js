//const reader = require('xlsx');
//import XLSX from 'xlsx';
const XLSX = require("xlsx");
const workbook = XLSX.readFile('parkingDataTest2.xlsx');
const sheetName = 'Sheet1';
const worksheet = workbook.Sheets[sheetName];

//get last row in sheet
//const lastRow = XLSX.utils.decode_range(worksheet['!ref']).e.r;

// Data to append
const newData = [
    ["1/23/2025"],
    ["dkdk"],
    ["Dav K"]
];

// Append data to the sheet
XLSX.utils.sheet_add_aoa(worksheet, [
    newData
], {origin: -1});

/*
newData.forEach(row => {
    worksheet[`A${lastRow + 1}`] = { v: row[0] };
    worksheet[`B${lastRow + 1}`] = { v: row[1] };
    //lastRow++;
});*/

// Write the updated workbook to a file
XLSX.writeFile(workbook, 'parkingDataTest2.xlsx');