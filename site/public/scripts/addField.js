//procurar o botão
document.querySelector("#add-time")
//quando clicar no botâo
.addEventListener('click', cloneField)


//executar acao
function cloneField() {
 //duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean - true or false

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })


    //colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
   