//procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)


//executar um acao
function cloneField(){
    //duplicar os campos. que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
     fields = newFieldContainer.querySelectorAll('input')
