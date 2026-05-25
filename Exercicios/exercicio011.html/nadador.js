function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.querySelector('#txtano')
  let resultado = document.querySelector('#res')
  let fsexo = document.getElementsByName('radsex')
  let idade = ano - Number(fano.value)
  let img = document.createElement('img')
  let faixa = ''
  let genero = ''

  img.setAttribute('id', 'foto')

  if(fano.value.length == 0 || fano.value > ano){
    alert('Digite uma data válida')
  }

  else{

    if(fsexo[0].checked){
      genero = 'masculino'

      if(idade < 9){
        img.setAttribute('src', 'masc-infantilA.jpg')
        faixa = 'Infantil A'
      }
      else if(idade <= 13){
        img.setAttribute('src', 'masc-infantilB.jpg')
        faixa = 'Infantil B'
      }
      else if(idade <= 17){
        img.setAttribute('src', 'masc-juvenil.jpg')
        faixa = 'Juvenil'
      }
      else if(idade <= 25){
        img.setAttribute('src', 'masc-adulto.jpg')
        faixa = 'Adulto'
      }
      else{
        img.setAttribute('src', 'masc-master.jpg')
        faixa = 'Master'
      }
    }

    else{
      genero = 'feminino'

      if(idade < 9){
        img.setAttribute('src', 'fem-infantilA.jpg')
        faixa = 'Infantil A'
      }
      else if(idade <= 13){
        img.setAttribute('src', 'fem-infantilB.jpg')
        faixa = 'Infantil B'
      }
      else if(idade <= 17){
        img.setAttribute('src', 'fem-juvenil.jpg')
        faixa = 'Juvenil'
      }
      else if(idade <= 25){
        img.setAttribute('src', 'fem-adulto.jpg')
        faixa = 'Adulto'
      }
      else{
        img.setAttribute('src', 'fem-master.jpg')
        faixa = 'Master'
      }
    }

    resultado.innerHTML = `Atleta do gênero ${genero}, com ${idade} anos, categoria: ${faixa}!`
    resultado.style.textAlign = 'center'
    resultado.appendChild(img)
  }
}