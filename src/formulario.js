const caixaMensagens = document.querySelectorAll(".caixa-msg")
const botaoEnviar = document.querySelector(".botao-enviar")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")

caixaMensagens.forEach((item, indice) => {
    item.addEventListener('change', () =>{
        if(item.value !== ''){
            caixaMensagens[indice].classList.remove('vazia')
            campoObrigatorio[indice].classList.remove('ativado')
            item.classList.add('caixa-escrita')
        }
    })
    
})

botaoEnviar.addEventListener("click", function(enviar){
    enviar.preventDefault();
    let count = 0
    caixaMensagens.forEach(function(item, indice){
        
        if(item.value === ''){
            campoObrigatorio[indice].classList.add('ativado')
            caixaMensagens[indice].classList.add('vazia')
        } else if (item.value !== '') {
            count += 1
            if (count === 4) {
                alert('Formulario enviado')
            }
        }

        
    })

    
})