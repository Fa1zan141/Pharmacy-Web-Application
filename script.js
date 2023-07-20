let editingIndex = -1;

function addRecord() {
    const medicineName = document.getElementById('medicineName').value;
    const id = document.getElementById('id').value;
    const medicineType = document.getElementById('medicineType').value;
    const companyName = document.getElementById('companyName').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const quantity = document.getElementById('quantity').value;
    const expireDate = document.getElementById('expireDate').value;

    if (editingIndex === -1) {
        const tableBody = document.querySelector('#medicineTable tbody');
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `<td>${medicineName}</td><td>${id}</td><td>${medicineType}</td><td>${companyName}</td><td>${unitPrice}</td><td>${quantity}</td><td>${expireDate}</td><td class="edit" onclick="editRecord(this)">Edit</td><td class="delete" onclick="deleteRecord(this)">Delete</td>`;
    } else {
        const tableBody = document.querySelector('#medicineTable tbody');
        const rowToUpdate = tableBody.rows[editingIndex];
        rowToUpdate.cells[0].innerText = medicineName;
        rowToUpdate.cells[1].innerText = id;
        rowToUpdate.cells[2].innerText = medicineType;
        rowToUpdate.cells[3].innerText = companyName;
        rowToUpdate.cells[4].innerText = unitPrice;
        rowToUpdate.cells[5].innerText = quantity;
        rowToUpdate.cells[6].innerText = expireDate;
        editingIndex = -1;
        document.getElementById('saveBtn').innerText = 'Save Record';
    }

    document.getElementById('medicineForm').reset();
}

function editRecord(editBtnCell) {
    const tableRow = editBtnCell.parentNode;
    const cells = tableRow.cells;

    document.getElementById('medicineName').value = cells[0].innerText;
    document.getElementById('id').value = cells[1].innerText;
    document.getElementById('medicineType').value = cells[2].innerText;
    document.getElementById('companyName').value = cells[3].innerText;
    document.getElementById('unitPrice').value = cells[4].innerText;
    document.getElementById('quantity').value = cells[5].innerText;
    document.getElementById('expireDate').value = cells[6].innerText;

    editingIndex = tableRow.rowIndex - 1;
    document.getElementById('saveBtn').innerText = 'Update Record';
    document.getElementById('updateBtn').disabled = false;
    document.getElementById('deleteBtn').disabled = false;
}

function deleteRecord(deleteBtnCell) {
    const tableRow = deleteBtnCell.parentNode;
    const tableBody = tableRow.parentNode;

    tableBody.removeChild(tableRow);
}

document.getElementById('medicineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRecord();
});

document.getElementById('updateBtn').addEventListener('click', function() {
    document.getElementById('saveBtn').innerText = 'Save Record';
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('deleteBtn').disabled = true;
    editingIndex = -1;
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    deleteRecord(tableBody.rows[editingIndex]);
    document.getElementById('saveBtn').innerText = 'Save Record';
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('deleteBtn').disabled = true;
    editingIndex = -1;
});
