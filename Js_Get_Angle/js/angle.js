var btnc = document.getElementById("btnc");
var changebtn = document.getElementById("changebtn");
changebtn.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let direction = document.getElementById("column").classList.contains("container2");
    if (direction){
        document.getElementById("column").classList.remove("container2");
        document.getElementById("column").classList.add("flexdirection");
        document.getElementById("minute").classList.add("row2");
        document.getElementById("minutei").classList.add("row");
        document.getElementById("hrs").classList.add("change");
        document.getElementById("ui").classList.add("ui2");
    } else{
        document.getElementById("column").classList.add("container2");
        document.getElementById("column").classList.remove("flexdirection");
        document.getElementById("minute").classList.remove("row2");
        document.getElementById("minutei").classList.remove("row");
        document.getElementById("hrs").classList.remove("change");
        document.getElementById("ui").classList.remove("ui2");
        document.getElementById("column").classList.remove("flexdirection");
        document.getElementById("minute").classList.remove("row2");
    }

})

var sendform =  document.getElementById("sendform");
var send = document.getElementById("send");
sendform.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let hours = document.getElementById("hrs").value;
    let hour2 = document.getElementById("hour2");
    let minute = document.getElementById("minutei").value;
    let minute2 = document.getElementById("minute2").value;
    let result = document.getElementById("result");
    let hour = document.getElementById("hour");
    if (hours <=12 && minute < 60){
        aghours = parseInt(hours)*30;
        agminute = parseInt(minute)*0.5;
        agminuteonly = parseInt(minute)*6;

        if (aghours == 360){
            aghours = 0;
        }
        resultangle = aghours+agminute;
        resultag = Math.abs(resultangle-agminuteonly);
        hour2 = "<span id='hour2' class='color'> " +hours+" Hours </span>";
        minute2 = "<span id='minute2' class='color'> " + minute +" Minutes </span>";
        hour.innerHTML = "At "+hour2+" with "+minute2+ "there's an angle of:";
        result.innerHTML = resultag+"º";
        let bad = document.getElementById("btbad");
        bad.style.display = "none";
        let ui = document.getElementById("ui");
        ui.style.height = "600px"
    } else {
        let bad = document.getElementById("btbad");
        bad.style.display = "block";
        let ui = document.getElementById("ui");
        ui.style.height = "600px"
    }


})