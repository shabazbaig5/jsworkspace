window.onload = () => {
    console.log("locked and loaded");
}


function Table(id) {

    this.id = id;

    this._init();
}

const tableProto = Table.prototype;

tableProto._init = function(){

    // console.log(this.table);
    // let table = this.table;
    console.log(this);
    console.log(this.id);
    this.table = this.id;

    console.log(this.table.body);
    this.rows = this.table.querySelectorAll('.my-table-row');
    console.log(this.rows);
}

tableProto.createRow = function(cells){

    console.log(cells);
    let row = document.createElement('tr');
    row.classList.add('my-table-row');
    cells.forEach((cell) => {
        row.appendChild(cell);
    });
    return row;


}


tableProto.insertRow = function(row){

    console.log(row);
    console.log(this.table);
    this.table.querySelector('tbody').appendChild(row);


}


tableProto.createCells = function(text){

    console.log(this);
    let cell = document.createElement('td');
    let cellText = document.createTextNode(text);
    cell.classList.add('my-cell');
    cell.appendChild(cellText);
    return cell;
}


let table = new Table(document.querySelector('#table-example'));

// table._init();

let tableRow = table.createRow([table.createCells('something'),table.createCells(22),table.createCells('___')]);

table.insertRow(tableRow);
console.log(table);