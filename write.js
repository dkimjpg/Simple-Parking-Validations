//const reader = require('xlsx');
//import XLSX from 'xlsx';
const XLSX = require("xlsx");
const workbook = XLSX.readFile('parkingDataTest2.xlsx');
const sheetName = 'Sheet1';
const worksheet = workbook.Sheets[sheetName];

const infoButton = document.getElementById("infoSubmission");
const name = document.getElementById("nameInfo");
const alias = document.getElementById("aliasInfo");
const nameText = name.value;
const aliasText = alias.value;

// get today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

infoButton.addEventListener('click', function() {
    // Data to append
    const newData = [
        [today],
        [aliasText],
        [nameText]
    ];
    
    /*
    const newData = [
        ["1/23/2025"],
        ["dkdk"],
        ["Dav K"]
    ];
    */

    // Append data to the sheet
    XLSX.utils.sheet_add_aoa(worksheet, [
        newData
    ], {origin: -1});

    // Write the updated workbook to a file
    XLSX.writeFile(workbook, 'parkingDataTest2.xlsx');
});

//get last row in sheet
//const lastRow = XLSX.utils.decode_range(worksheet['!ref']).e.r;







/*
newData.forEach(row => {
    worksheet[`A${lastRow + 1}`] = { v: row[0] };
    worksheet[`B${lastRow + 1}`] = { v: row[1] };
    //lastRow++;
});*/


