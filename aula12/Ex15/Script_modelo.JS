function verificar(){
 let data = new Date()
 let ano = data.getFullYear()
 let fano = document.querySelector('#txtano')
 let resultado = document.querySelector('#res')
 let fsexo = document.getElementsByName('radsec')
 let idade = ano - Number(fano.value)
 let img = document.createElement('img')
 let faixa = ''

 img.setAttribute('id', 'foto')

 let genero = ''

 if(fano.value.length == 0 || fano.value > ano){
    alert('Digite uma data válida')
 }

   else{

    if(fsexo[0].checked){
        genero = 'masculino'

        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'bebe-homem.jpg')
            faixa = 'criança'}

        else if(idade < 21){
            img.setAttribute('src','homem-jovem.jpg')
            faixa = 'jovem'
        }
        else if(idade < 50){
           img.setAttribute('src','homem-adulto.jpg')
           faixa = 'adulto'}

        else{
           img.setAttribute('src','idoso-homem.jpg')
           faixa = 'idoso'
        }
    }

    else{
        genero = 'feminino'

        if(idade >= 0 && idade < 10){
           img.setAttribute('src', 'bebe-mulher.jpg')
           faixa = 'criança'}
        else if(idade < 21){
           img.setAttribute('src', 'mulher-jovem.jpg')
           faixa = 'jovem'}
        else if(idade < 50){
            img.setAttribute('src', 'mulher-adulta.jpg')
            faixa = 'adulta'}
        else{
            img.setAttribute('src', 'idosa-mulher.jpg')
            faixa = 'idosa'}
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${faixa}, do gênero ${genero}. Com ${idade} anos!`
}
resultado.style.textAlign = 'center'
resultado.appendChild(img)
 }
