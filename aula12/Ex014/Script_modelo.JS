function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 5
    let minuto = String(data.getMinutes()).padStart(2, '0')
    msg.innerHTML = `Agora são ${hora} horas e  ${minuto} minutos. `
    if (hora >=5 && hora < 12){
    img.src = 'fotomanha.png'
    msg.innerHTML +='bom dia'
    document.body.style.background= '#dbd196' }

    else if (hora >= 0 && hora < 5 ){
        img.src = 'fotomadrugada.png'
        document.body.style.background = 'black'
      msg.innerHTML += 'boa madrugada!'}

     

        else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        msg.innerHTML += 'Boa tarde!'
        document.body.style.background= '#b77a36'}


        else{
         img.src = 'fotonoite.png'
         msg.innerHTML += 'Boa noite!'
         document.body.style.background = '#48362c'
        }
    
}

