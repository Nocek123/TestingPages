console.log(localStorage);

aircraf = localStorage.getItem('planeType'); // przypisuje zmiennej aircraft wartość z głównej strony (jaki samolot) na podstawie wybranego miasta docelowego

sitsLimit = localStorage.getItem('passengersNumb'); // ilość pasażerów podana przez klienta
let sitx = 1; // licznik potrzebny w funkcji getSit(nr) - służy do zablokowania zaznaczania miejsc w samolocie w liczbie większej niż podana przez klienta 
let sitsNumbers = [0]; // tablica przechowująca miejsca zaznaczone przez klienta (dostaje wartości w funkcji getSit)
let sitIndex=0; // licznik wykorzystywany przy tworzeniu tablicy sitsNumbers

function getSit(nr) {  // Ta funkcja zapisuje w tablicy wybrane przez klienta miejsca oraz zmienia ich kolor
if(sitx <= sitsLimit) {
    if (document.getElementById('sit'+nr).classList.contains("sitClicked")){ 
        for (i = 0; i <= sitIndex; i++) {
            if(sitsNumbers[i]===sitsInPlane[nr]){
            sitsNumbers.splice(i,1);
            sitx=sitx-1;
    }
}
}   else {
        if (sitsNumbers[sitIndex]===0){
        sitsNumbers[sitIndex]=sitsInPlane[nr];
        sitx=sitx+1;
    }   else {
        sitIndex=sitIndex+1;
        sitsNumbers[sitIndex]=sitsInPlane[nr];
        sitx=sitx+1;
    }
}

        document.getElementById('sit'+nr).classList.toggle("sitClicked");
        document.getElementById('sit'+nr).classList.toggle("sit");
        console.log(sitsNumbers);

        document.getElementById("test").innerHTML = 'Twoje wybrane miejsca to: '+sitsNumbers;
        
    }
    else {   
         
        for (i = 0; i <= sitIndex; i++) {
        if(sitsNumbers[i]===sitsInPlane[nr]){
        sitsNumbers.splice(i,1);
        sitx=sitx-1;    
}
}

    }
}


if (aircraf === "EMBRAER 170") window.onload = machen;
if (aircraf === "BOEING 737-800") window.onload = machen2;
if (aircraf === "DREAMLINER 787-8") window.onload = machen3;

const sitsInPlane = []; // Tablica, w której zapisywane są WSZYSTKIE miejsca w samolocie (dla Embraera 76 elementów, dla boeinga 176, dla Dreamlinera 252)

function machen() {
    document.getElementById('plane').classList.add("planeEmbr");
    let sitRows = 1;
    for (i = 0; i <= 75; i=i+4) {
        sitsInPlane[i]='A'+(sitRows);
        sitsInPlane[i+1]='B'+(sitRows);
        sitsInPlane[i+2]='C'+(sitRows);
        sitsInPlane[i+3]='D'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 75; i++) {
        divSits = divSits+'<div id="sit'+i+'"class="sit" onclick="getSit('+i+')" >'+sitsInPlane[i]+'</div>'
        if ((i+1)%4===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+3)%4===0) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;
}


function machen2() {
    document.getElementById('plane').classList.add("planeBoeing");
    let sitRows = 1;
    for (i = 0; i <= 185; i=i+6) {
        sitsInPlane[i]='A<br>'+(sitRows);
        sitsInPlane[i+1]='B<br>'+(sitRows);
        sitsInPlane[i+2]='C<br>'+(sitRows);
        sitsInPlane[i+3]='D<br>'+(sitRows);
        sitsInPlane[i+4]='E<br>'+(sitRows);
        sitsInPlane[i+5]='F<br>'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 185; i++) {
        divSits = divSits+'<div id="sit'+i+'" class="sit" onclick="getSit('+i+')">'+sitsInPlane[i]+'</div>'
        if ((i+1)%6===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+4)%6===0) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;

}


function machen3() {
    document.getElementById('plane').classList.add("planeDream");
    let sitRows = 1;

    for (i = 0; i <= 251; i=i+9) {
        sitsInPlane[i]='A<br>'+(sitRows);
        sitsInPlane[i+1]='B<br>'+(sitRows);
        sitsInPlane[i+2]='C<br>'+(sitRows);
        sitsInPlane[i+3]='D<br>'+(sitRows);
        sitsInPlane[i+4]='E<br>'+(sitRows);
        sitsInPlane[i+5]='F<br>'+(sitRows);
        sitsInPlane[i+6]='G<br>'+(sitRows);
        sitsInPlane[i+7]='H<br>'+(sitRows);
        sitsInPlane[i+8]='I<br>'+(sitRows);
        sitRows = sitRows+1;
    }
    let divSits = "";

    for (i = 0; i <= 251; i++) {
        divSits = divSits+'<div id="sit'+i+'" class="sit" onclick="getSit('+i+')">'+sitsInPlane[i]+'</div>'
        if ((i+1)%9===0) divSits = divSits+'<div style="clear:both"></div>'
        if ((i+1)%3===0 && (i+1)%9!==0 ) divSits = divSits+'<div class="empty"></div>'
    }
    document.getElementById("plane").innerHTML= divSits;

}
