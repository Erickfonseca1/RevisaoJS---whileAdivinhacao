let numero = prompt('Adivinhe o número que estou pensando!')

while (numero != 10) {
    alert('Infelizmente, você não acertou.')
    numero = prompt('Tente novamente:')
}

alert('Parabéns, você acertou!')