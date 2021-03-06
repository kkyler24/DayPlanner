let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function showCalendar(month, year){

    let firstDay =(new Date(year, month)).getDay();
    let daysInMonth = 32- new Date(year, month, 32).getDate();

    // -->body of the Calendar<--
    let tbl = document.getElementById("calendar-body");


// -->clear previous cells, for new month<--
    tbl.innerHTML="";

    monthAndYear.innerHTML= months[months]+" "+ year;

    // --> create cells for Calendar<--
    let date = 1;
    for(let i = 0; i < 6; i++){
        let row  = document.createElement("tr");
        // --> creating table rows. not really sure about the 6 part. inquire why you need a 6 and not a 7-->

        // creating indivdual cells, and putting data in them. 

        for(let j = 0; j < 7; j++){
            if(i===0 && j< firstDay){
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if(date > daysInMonth)
             { break;

        } 
        else {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(date);
            if(date ===today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                cell.classList.add
                // --> bootstrap colors, try to get a wider variety of colors <--
                ("bg-info");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);


        }
        date++;

        }

        tbl.appendChild(row);
        
    }
    
}

function previous(){
    currentYear =( currentMonth === 0)? currentYear -1 : currentYear;
    currentMonth = currentMonth === 0? 11:currentMonth-1;
    showCalendar(currentMonth, currentYear);
}

function next(){
    currentYear = (currentMonth ===11)? currentYear + 1: currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar (currentMonth, currentYear);

}