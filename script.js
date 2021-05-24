document.querySelector('.aButton').addEventListener('click', function () {
    
    let botao = document.querySelector('.aButton')
    const headerBg = document.getElementById('header')
    const headerTotal = document.getElementById('sections')
    const headerLink = document.querySelector('#aJS1')
    const headerLink2 = document.querySelector('#aJS2')
    const headerLink3 = document.querySelector('#aJS3')
    const headerLink4 = document.querySelector('#aJS4')
    const headerLink5 = document.querySelector('#aJS5')
    const headerLink6 = document.querySelector('#aJS6')
    const headerLink7 = document.querySelector('#sobreMim')
    const headerLink8 = document.querySelector('#minhasHabilidades')
    const headerLink9 = document.querySelector('#divSection44')
    


    if(botao.innerHTML === "Dark Mode"){
       botao.innerHTML = "Light Mode"
       headerTotal.style.backgroundColor = "#2e388c"
       headerBg.style.backgroundColor = "purple" 
       headerLink.style.borderColor = "#FFFF"
       headerLink2.style.borderColor = "#FFFF"
       headerLink3.style.borderColor = "#FFFF"
       headerLink4.style.borderColor = "#FFFF"
       headerLink5.style.borderColor = "#FFFF"
       headerLink6.style.borderColor = "#FFFF"
       botao.style.borderColor = "#FFFF"
       headerLink.style.color = "#FFFF"
       headerLink2.style.color = "#FFFF"
       headerLink3.style.color = "#FFFF"
       headerLink4.style.color = "#FFFF"
       headerLink5.style.color = "#FFFF"
       headerLink6.style.color = "#FFFF"
       headerLink7.style.color = "#FFFF"
       headerLink8.style.color = "#FFFF"
       headerLink9.style.color = "#FFFF"
       botao.style.color = "#FFFF"
       

    }else{
        botao.innerHTML = "Dark Mode"
        headerBg.style.backgroundColor = "rgb(245, 145, 78)"
        headerTotal.style.backgroundColor = "rgb(122, 195, 255)"
        headerLink.style.borderColor = "black"
        headerLink2.style.borderColor = "black"
        headerLink3.style.borderColor = "black"
        headerLink4.style.borderColor = "black"
        headerLink5.style.borderColor = "black"
        headerLink6.style.borderColor = "black"
        botao.style.borderColor = "black"
        headerLink.style.color = "black" 
        headerLink2.style.color = "black" 
        headerLink3.style.color = "black" 
        headerLink4.style.color = "black" 
        headerLink5.style.color = "black" 
        headerLink6.style.color = "black" 
        headerLink7.style.color = "black"
        headerLink8.style.color = "black"
        headerLink9.style.color = "black"
        botao.style.color = "black"
    }
})