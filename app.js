let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('result')

document.getElementById('plus').addEventListener('click', function () {
    res.value = parseInt(num1.value) + parseInt(num2.value)
})
document.getElementById('min').addEventListener('click', function () {
    res.value = parseInt(num1.value) - parseInt(num2.value)
})
document.getElementById('times').addEventListener('click', function () {
    res.value = parseInt(num1.value) * parseInt(num2.value)
})
document.getElementById('div').addEventListener('click', function () {
    res.value = parseInt(num1.value) / parseInt(num2.value)
})
