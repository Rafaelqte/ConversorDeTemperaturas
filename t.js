var temp = document.getElementById('temp')
var res = document.getElementById('res')

function calc(){
    
    var medida = document.getElementsByName('opc')
    var img = document.createElement('img')
    
    res.innerHTML = 'Convertendo temos:'


    if(medida[0].checked){
        var val = (Number(temp.value) * 9 + 160)/5
        res.innerHTML += `<p>${Number(temp.value)}°C = ${val}°F</p>`


    }
    if(medida[1].checked){
        var val = (Number(temp.value) + 273.15)
        res.innerHTML += `<p>${Number(temp.value)}°C = ${val}°K</p>`

    }
    
    
    if (Number(temp.value) < - 273.15){
        res.innerHTML += '<p>Parabéns amigo voce se encontra num lugar que as leis da física foram quebradas KKKKKKKKKK</p>'
        img.setAttribute('src', 'qlf.png')
    }
    if (-273.15 <= Number(temp.value) && Number(temp.value) < 0){
        res.innerHTML += '<p>Tá no Brasil não né?? kkkkkkk</p>'
        img.setAttribute('src', 'zeroabsoluto.png')
        }
    if (0 <= Number(temp.value) && Number(temp.value) < 17){
        res.innerHTML += '<p>Ta frio hein amigo!</p>'
        img.setAttribute('src', 'mtfrio.png')
    }
    if (17 <= Number(temp.value) && Number(temp.value) < 20){
        res.innerHTML += '<p>Temperatura agradavel [NÃO SAIA DAÍ]</p>'
        img.setAttribute('src', 'frio.png')
    }
    if (20 <= Number(temp.value) && Number(temp.value) < 30){
        res.innerHTML += '<p>Nossa ta quente aí</p>'
        img.setAttribute('src', 'agradavel.png')
    }
    if (30 <= Number(temp.value) && Number(temp.value) < 40){
        res.innerHTML += '<p>Liga o ar condicionado aí meu, a cpu vai explodir</p>'
        img.setAttribute('src', 'calor.png')
    }
    if (40 <= Number(temp.value) && Number(temp.value) < 50){
        res.innerHTML += '<p>Tá no Saara colega?</p>'
        img.setAttribute('src', 'deserto.png')

    }
    if (50 <= Number(temp.value)){
        res.innerHTML += '<p>Ué, como voce ta vivo?</p>'
        img.setAttribute('src', 'inferno.png')
    }
    res.appendChild(img)
    temp.value = ''
    temp.focus()

}