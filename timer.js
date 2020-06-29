var second = 0;
var status = 0;
var hour = 0;
var minute = 0;
var ms = 0;
var pos = 1;

function reset() {
    document.getElementById("timer").innerHTML = "00 : 00 : 00 : 00";
    document.getElementById('start').value = "START";
    document.getElementById('lap-record').innerHTML = "";
    status = 0;
    second = 0;
    hour = 0;
    minute = 0;
    ms = 0;
    pos = 1;
    clearTimeout(t);
}

function start() {
    if(status == 0){
        status = 1;
        inc();
        document.getElementById('start').value = "PAUSE";
        document.getElementById('start').style.backgroundColor = "red";
        document.getElementById('start').style.borderColor = "black";
    }else{
        status = 0;
        document.getElementById('start').value = "RESUME";
        document.getElementById('start').style.backgroundColor = "green";
        document.getElementById('start').style.borderColor = "black";
    }
}

function lap(){
    if(status == 0){

    }else{
    document.getElementById('lap-record').innerHTML += "\n" + "#" + pos.toString().padStart(2,'0') + "| " + hour.toString().padStart(2,'0') + " : " + minute.toString().padStart(2,'0') + " : " + second.toString().padStart(2,'0') + " : " + ms.toString().padStart(2,'0');
    pos++;
    }
}

function inc(){
    
    if(status == 1){
        setTimeout(function(){
            if(ms == 100){
                second++;
                ms = 0;
            }
            if(second == 60){
                minute++;
                second = 0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
            document.getElementById("timer").innerHTML = hour.toString().padStart(2,'0') + " : " + minute.toString().padStart(2,'0') + " : " + second.toString().padStart(2,'0') + " : " + ms.toString().padStart(2,'0');
            ms++;
            inc();
        },10)
    }
}