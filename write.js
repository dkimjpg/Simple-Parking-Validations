//const reader = require('xlsx');
//import XLSX from 'xlsx';
//const XLSX = require("xlsx");
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

    // get today's date
    const today = new Date().toLocaleDateString();
    const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

    const blob = new Blob([dateString], {type: 'text/csv'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'parking_data.csv';
    link.click();
    /*
    const workbook = XLSX.readFile('parkingDataTest2.xlsx');
    const sheetName = 'Sheet1';
    const worksheet = workbook.Sheets[sheetName];
    */
    
    // Data to append
    const newData = [
        [dateString],
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
    XLSX.utils.sheet_add_aoa(worksheet, [newData], {origin: -1});

    // Write the updated workbook to a file
    XLSX.writeFile(workbook, 'parkingDataTest2.xlsx');
    console.log('Button clicked');
    //alert('Button clicked from external script!');
    window.location.href = 'parking_code.html';
});

//get last row in sheet
//const lastRow = XLSX.utils.decode_range(worksheet['!ref']).e.r;







/*
newData.forEach(row => {
    worksheet[`A${lastRow + 1}`] = { v: row[0] };
    worksheet[`B${lastRow + 1}`] = { v: row[1] };
    //lastRow++;
});*/


