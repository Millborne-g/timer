const timer = document.querySelector(".timer");

counter = 0;
const timer_count = setInterval(function(){

    if (counter > 10){
        clearInterval(timer_count)
    }

    else{
        
        if(counter > 9 ){
            timer.innerHTML = "0:"+counter;
        }
        else{
            timer.innerHTML = "0:0"+counter;
        }
    }

    counter++;


},1000);