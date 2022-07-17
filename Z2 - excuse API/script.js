//import axios from 'axios';

function createExcuseDiv(excuse) {
    const div = document.createElement("div");
    div.innerText = excuse;
    div.style.marginBottom = "20px";
    return div;
}

function generateExcuses() {

    const category = document.getElementById("category").value;
    const numberOfExcuses = document.getElementById("numberOfExcuses").value;
    const excusesDiv = document.getElementById("excuses-div");

    excusesDiv.innerHTML = "";

    // sprawdziłam w debuggerze, otrzymuję odpowiedz w konsoli, ale wynik pojawia się jako undefined...

    axios.get("https://excuser.herokuapp.com/v1/excuse/" + category +"/" + numberOfExcuses).then(response => {
        //response.data.forEach(d => console.log(d.text));
        for (let i = 0; i <= numberOfExcuses; i++) {

            let number = i + 1;
            excusesDiv.append("Here is excuse number: " + number + " in category: " + category + " that you have chosen." );

            // debugger wskazuje na błąd tej linii:
            let excuse = createExcuseDiv(response.data[i].text);
            excusesDiv.append(excuse);
            console.log(response);
        }

    })
}