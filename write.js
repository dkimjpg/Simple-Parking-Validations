//const reader = require('xlsx');
//import XLSX from 'xlsx';
const XLSX = require("xlsx");
const path = require('path');

const infoButton = document.getElementById("infoSubmission");
//const names = document.getElementById("nameInfo");
//const alias = document.getElementById("aliasInfo");


/*
// get today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
*/

infoButton.addEventListener('click', function() {
    console.log('got here');
    const nameText = document.getElementById("nameInfo").value.trim();
    const aliasText = document.getElementById("aliasInfo").value.trim();

    if (!nameText || !aliasText) {
        alert('Please enter both name and alias');
        return;
    }

    try {
        const filePath = path.join(__dirname, 'parkingDataTest2.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = 'Sheet1';
        const worksheet = workbook.Sheets[sheetName];

        // get today's date
        const today = new Date().toLocaleDateString();

        const newData = [
            [today, aliasText, nameText]
        ];

        // Append data to the sheet
        XLSX.utils.sheet_add_aoa(worksheet, newData, {origin: -1});

        // Write the updated workbook to a file
        XLSX.writeFile(workbook, filePath);

        console.log('Data written successfully');
        window.location.href = 'parking_code.html';
    }
    catch (error) {
        console.error('Error:', error);
        alert('Error saving data:' + error.message);
    }  
});