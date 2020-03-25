let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");

showCalendar(currentMonth, currentYear);

function showCalendar (month,year){
    let firstDay =new Date(year, month).getDay();
    let daysInMonth = 32- new Date(year, month, 32).getDate();

    tbl.innerHTML=""

    monthAndYear.innerHTML= months[months]+" "+ year

    let date = 1;

    for(let i = 0; i < 6; i++){
        let row  = document.createElement("tr")

        for(let j = 0; j<7; j++){
           
            if(i===0 && j< firstDay){
                let cell = document.createElement("td")
                let cellText = document.createTextNode("")
                cell.appendChild(cellText)
                row.appendChild(cell)

            }else if(date> daysInMonth)
             { break;
        } else {
            let cell = document.createElement("td")
            let cellText = document.createTextNode(date);
            cell.appendChild(cellText)
            row.appendChild(cell);


        }
        date++

        }

        tbl.appendChild(row)
        
    }
    
}