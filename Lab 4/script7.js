function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
    cleanEntry();
    
}

var nextId = 0;

function addRow() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var snippet = `
    <tr id="${nextId}">
    <td onClick="removeEntry(${nextId})">❌</td>
    <td>${name}</td>
    <td>${age}</td>
     </tr>`;

     nextId += 1;

    document.getElementById("entries").innerHTML += snippet;
}

function removeEntry(id)
{
    console.log(`Let's remove ${id}`)
    document.getElementById(id).remove()
}
function cleanEntry() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
}


