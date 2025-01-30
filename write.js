const XLSX = require("xlsx");
const path = require('path');

const infoButton = document.getElementById("infoSubmission");

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

        // puts together date, employee alias, and employee name
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