const range = document.querySelector('.range-input')

const handleInputRange = (event) => {
    console.log(range.value);
    event.target.parentNode.parentNode.style.setProperty(
        '--value',
        event.target.value
    )
    // изменение значения тега `<output>`
    event.target.nextElementSibling.value = event.target.value;
}

range.addEventListener('input', handleInputRange)