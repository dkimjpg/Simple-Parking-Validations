const XLSX = require("xlsx");
const path = require('path');

const infoButton = document.getElementById("infoSubmission");

infoButton.addEventListener('click', function() {
    const nameText = document.getElementById("nameInfo").value.trim();
    const ioCode = document.getElementById("ioCode").value.trim();
    const providerName = document.getElementById("provider").value.trim();

    if (!nameText || !ioCode || !providerName ) {
        alert('Please enter name, IO/Cost Center code, and code provider');
        return;
    }

    try {
        const filePath = path.join(__dirname, 'parkingDataTestIOCC.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = 'Sheet1';
        const worksheet = workbook.Sheets[sheetName];

        // get today's date
        const today = new Date().toLocaleDateString();

        // puts together date, code provider's name, guest's name, and IO/Cost Center code
        const newData = [
            [today, providerName, nameText, ioCode]
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