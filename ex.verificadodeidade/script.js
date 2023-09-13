function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var foto = window.document.getElementById('foto')
    var img = window.document.getElementById('imagem')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Ano de nascimento invalido. Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
       
       if(fsex[1].checked){
        genero = 'homem'

        if (idade >=0 && idade <= 3){
            genero = 'Bebe'
            img.src = 'imagens/n.bebe2.png'
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        } else if(idade >=4 && idade <=10){
            genero = 'Criança'
            img.src = 'imagens/n.criança2.png'
            res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
        } else if (idade >=10 && idade <=15){
            genero = 'Jovem'
            img.src = 'imagens/n.al3.png'
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        }
        
        else if (idade >=10 && idade < 21){
            genero = 'Jovem'
            img.src = 'imagens/n.jovem5.png'
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        } else if (idade > 21 && idade <=49){
            genero = 'Adulto'
            img.src = 'imagens/n.adulto2.png'
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        } else if (idade >= 50 && idade <=59){
            genero = 'Meia-Idade'
            img.src = 'imagens/jiraya2.png'
            res.innerHTML = `Detectamos um senhor de ${genero} com ${idade} anos.`
        } else if(idade > 60){
            genero = 'Idoso'
            img.src = 'imagens/n.idoso2.png'
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        } 

       } else if (fsex[2].checked){
            genero = 'Mulher'

            if (idade >=0 && idade <= 3){
                genero = 'Bebe'
                img.src = 'imagens/s.bb.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = ' rgb(255, 214, 220)'

            } else if(idade >=4 && idade <=10){
                genero = 'Criança'
                img.src = 'imagens/s.criança.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = 'pink'

            } else if (idade >=10 && idade <=15){
                genero = 'Jovem'
                img.src = 'imagens/s.jovem2.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = 'lightpink'
            }
            
            else if (idade >=10 && idade < 21){
                genero = 'Jovem'
                img.src = 'imagens/s.jovem3.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = 'rgb(125, 87, 160)'

            } else if (idade > 21 && idade <=49){
                genero = 'Adulta'
                img.src = 'imagens/s.adulta2.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = ' rgb(218, 177, 255)'

            } else if (idade >= 50 && idade <=59){
                genero = 'Meia-Idade'
                img.src = 'imagens/tsunade2.png'
                res.innerHTML = ` Detectamos uma senhora de ${genero} com ${idade} anos.`
                document.body.style.background = 'rgb(255, 255, 221)'

            } else if(idade > 60){
                genero = 'Idosa'
                img.src = 'imagens/chiyo2.png'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                document.body.style.background = 'rgb(196, 139, 196)'


            } 

       }
        
            

        
        
       
       res.appendChild(img)

    }
    }

