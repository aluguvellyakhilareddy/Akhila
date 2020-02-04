//console.log("Hello World");

function onEnterPressed(event) {
    if(event.key !== "Enter") {
        return;
    }
    addRow();
    
    //document.getElementById();
}

function addRow() {
    console.log("You pressed enter");
    var snippet = `
    <tr>
    <td>Leela</td>
    <td>23</td>
    </tr>
    
    `;
    document.getElementById("entries").innerHTML += snippet;
}



