const XLSX = require("xlsx");
const path = require('path');

const infoButton = document.getElementById("infoSubmission");

const nameInfo = document.getElementById("nameInfo");
const ioCodeInput = document.getElementById("ioCode");
const provider = document.getElementById("provider");

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
    else if (!ioCodeInput.value.trim()) {
        ioCodeInput.focus();
    }
    else if (!provider.value.trim()) {
        provider.focus();
    }
});

infoButton.addEventListener('click', function() {
    const nameText = nameInfo.value.trim();
    const ioCode = ioCodeInput.value.trim();
    const providerName = provider.value.trim();

    if (!nameText || !ioCode || !providerName ) {
        showError('Please enter name, IO/Cost Center code, and code provider');
        return;
    }

    try {
        const filePath = path.join(__dirname, 'Employee Logs/parkingDataTestIOCC.xlsx');
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