const valores1 = document.getElementById('valores-1');
const valores2 = document.getElementById('valores-2');
const tipoOperacion = document.getElementById('operacion');
const calcular = document.getElementById('evento');
const resultado = document.getElementById('resultado');

calcular.addEventListener('click', operacion);

function operacion() { 

        if (valores1.value === "" || valores2.value === "" || tipoOperacion.value === 'elejir'){
                resultado.innerText = 'Faltan datos';
                alert('Debe completar todos los campos');
                return
        }

        if (tipoOperacion.value === 'suma'){
                resultado.innerText = parseFloat(valores1.value) + parseFloat(valores2.value);
        } else if (tipoOperacion.value === 'resta'){
                resultado.innerText = parseFloat(valores1.value) - parseFloat(valores2.value);
        } else if (tipoOperacion.value === 'multiplicacion'){
                resultado.innerText = parseFloat(valores1.value) * parseFloat(valores2.value);
        } else if (tipoOperacion.value === 'division') {
                resultado.innerText = parseFloat(valores1.value) / parseFloat(valores2.value);
        } 
};

