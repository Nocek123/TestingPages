function getValues() {
    let startCity = document.getElementById("startCity").value;
    let destinationCity = document.getElementById("destinationCity").value;
    let startDate = document.getElementById("startDate").value;
    let passengersNumber = document.getElementById("passengersNumber").value;
    let aircraft = ""
    if (destinationCity === "Wrocław" || destinationCity === "Katowice") {
        aircraft = "EMBRAER 170"
    }
    else if ( destinationCity === "Londyn" || destinationCity === "Paryż") {
        aircraft = "BOEING 737-800"
    }
    else { aircraft = "DREAMLINER 787-8"}
    document.getElementById("testing").innerHTML=`Miasto wylotu to: ${startCity} <br> Miasto przylotu to: ${destinationCity} <br> Data Twojego lotu to: ${startDate} <br> Liczba pasażerów to: ${passengersNumber} <br> Samolot, którym odbędzie się lot to: ${aircraft}`;
    
    localStorage.clear();
    localStorage.setItem('planeType', aircraft);
    localStorage.setItem('passengersNumb', passengersNumber);
}

function showLoginWindow() {
    document.getElementById("loginWindow").classList.remove("loginDivInvisible");
    document.getElementById("loginWindow").classList.add("loginDivVisible");
    document.getElementById("loginWindow").classList.add("loginDiv");
    document.getElementById("shadow").classList.add("shadow");
}
