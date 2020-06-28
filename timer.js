var second = 0;
var status = 0;
var hour = 0;
var minute = 0
function reset() {
    document.getElementById("timer").innerHTML = 0 + ":" + 0 + ":" + 0;
    status = 0;
    second = 0;
    hour = 0;
    minute = 0;
    clearTimeout(t);
}

function start() {
    if(status == 0){
        status = 1;
        inc();
        document.getElementById('start').value = "Pause";
        document.getElementById('start').style.backgroundColor = "red";
        document.getElementById('start').style.borderColor = "black";
    }else{
        status = 0;
        document.getElementById('start').value = "Resume";
        document.getElementById('start').style.backgroundColor = "green";
        document.getElementById('start').style.borderColor = "black";
    }
}

function inc(){
    
    if(status == 1){
        setTimeout(function(){
            if(second == 60){
                minute++;
                second = 0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
            document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + second;
            second++;
            inc();
        },1000)
    }
}