const XLSX = require("xlsx");
const path = require('path');

const infoButton = document.getElementById("infoSubmission");

const nameInfo = document.getElementById("nameInfo");
const aliasInfo = document.getElementById("aliasInfo");

const errorModal = document.getElementById("errorModal");
const modalClose = document.getElementById("modalClose");

function showError(message) {
    document.getElementById("errorMessage").textContent = message;
    errorModal.style.display = "block";
}

modalClose.addEventListener('click', function() {
    errorModal.style.display = "none";
    if (!nameInfo.value.trim()) {
        nameInfo.focus();
    }
    else if (!aliasInfo.value.trim()) {
        aliasInfo.focus();
    }
});

infoButton.addEventListener('click', function() {
    /*
    if (!nameText || !aliasText) {
        alert('Please enter both name and alias');
        setTimeout(() => {
            if (!nameText) {
                document.getElementById("nameInfo").focus();
            } else if (!aliasText) {
                document.getElementById("aliasInfo").focus();
            }
        }, 100);
        return;
    }
    */
    
    const nameText = nameInfo.value.trim();
    const aliasText = aliasInfo.value.trim();

    if (!nameText || !aliasText) {
        showError('Please enter both name and alias');
        return;
    }

    try {
        const filePath = path.join(__dirname, 'Employee Logs/parkingDataTest2.xlsx');
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