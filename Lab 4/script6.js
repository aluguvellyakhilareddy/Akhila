function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
    cleanEntry();
    
}

function addRow() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var snippet = `
    <tr>
    <td>❌</td>
    <td>${name}</td>
    <td>${age}</td>
     </tr>`;

    document.getElementById("entries").innerHTML += snippet;
}

function cleanEntry() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
}


