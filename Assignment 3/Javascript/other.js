console.log(data);

function start() {
    var mybody = document.getElementsByTagName("body")[0];

    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");

    for (var j = 0; j < data.length + 1; j++) {
        mycurrent_row = document.createElement("tr");
        for (var i = 0; i <= 5; i++) {
            if (j == 0) {
                mycurrent_cell = document.createElement("th");

                if (i == 0)
                    currenttext = document.createTextNode("Id");
                else if (i == 1)
                    currenttext = document.createTextNode("Phone");
                else if (i == 2)
                    currenttext = document.createTextNode("City");
                else if (i == 3)
                    currenttext = document.createTextNode("State");
                else if (i == 4)
                    currenttext = document.createTextNode("Country");
                else if (i == 5)
                    currenttext = document.createTextNode("");


                mycurrent_cell.setAttribute("class", "thClass");
            }
            else {
                mycurrent_cell = document.createElement("td");
                if (i == 0)
                    currenttext = document.createTextNode(data[j - 1].id);
                else if (i == 1)
                    currenttext = document.createTextNode(data[j - 1].phone);
                else if (i == 2)
                    currenttext = document.createTextNode(data[j - 1].city);
                else if (i == 3)
                    currenttext = document.createTextNode(data[j - 1].state);
                else if (i == 4)
                    currenttext = document.createTextNode(data[j - 1].country);
                else if (i == 5)
                    currenttext = document.createTextNode("");


                mycurrent_cell.setAttribute("class", "tdClass");
            }
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
        }
        mycurrent_cell.setAttribute("class", "trClass");
        mytablebody.appendChild(mycurrent_row);
    }

    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
    mytable.setAttribute("class", "democlass");
    mytable.setAttribute("id", "myTable");
}


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function myFunction1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// function myFunction() {
//     var input, input1, input2, filter, filter1, filter2, table, tr, td, td1, td2, i, txtValue, txtValue1, txtValue2;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     input1 = document.getElementById("myInput1");
//     filter1 = input1.value.toUpperCase();
//     input2 = document.getElementById("myInput2");
//     filter2 = input2.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[2];
//         td1 = tr[i].getElementsByTagName("td")[3];
//         td2 = tr[i].getElementsByTagName("td")[4];
//         if (td || td1 || td2) {
//             txtValue = td.textContent || td.innerText;
//             txtValue1 = td1.textContent || td1.innerText;
//             txtValue2 = td2.textContent || td2.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter1) > -1 || txtValue2.toUpperCase().indexOf(filter2) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }