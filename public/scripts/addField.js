document.querySelector("#add-time")
    .addEventListener('click', cloneField)
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // cloneNode faz pegar todo o conteúdo dentro do .schedule-item
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function (field) {
        field.value = ''
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}