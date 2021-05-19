document.querySelector('.aButton').addEventListener('click',function(){
    
    let button = document.querySelector('.aButton')
    let header = document.querySelector('#header')

    if(button.innerHTML == "Night Mode OFF"){
        header.style.backgroundColor = "#2e1070"
        button.innerHTML = "Night Mode ON"
    }else{
        header.style.backgroundColor = "white"
        button.innerHTML = "Night Mode OFF"
    }
})