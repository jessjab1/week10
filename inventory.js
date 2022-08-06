// id used to loop the rows
let id = 0;
// Once the user hits submit, new row is created
document.getElementById('submit').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('item-id').value;
    row.insertCell(1).innerHTML = document.getElementById('item-name').value;
    row.insertCell(2).innerHTML = document.getElementById('item-count').value;
    row.insertCell(3).innerHTML = document.getElementById('item-price').value;
    row.insertCell(4).innerHTML = document.getElementById('item-reorder').value;
    row.insertCell(5).innerHTML = document.getElementById('full-name').value;
// Date is used from the moment user clicks submit
    row.insertCell(6).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}
    -${createDate.getDate()}`;
    let removeRow = row.insertCell(7);
    removeRow.appendChild(createDeleteButton(id++));
//Clears all the values once user hits submit
    document.getElementById('item-id').value= '';
    document.getElementById('item-name').value= '';
    document.getElementById('item-count').value= '';
    document.getElementById('item-price').value= '';
    document.getElementById('item-reorder').value= '';
    document.getElementById('full-name').value= '';
});

// created the removal button and when selected remove the row
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id; 
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with the id of item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}