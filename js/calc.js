const screen = document.getElementById('calc_screen'),
        keys = document.getElementById('key_calc');

// let estadoOperacion = false,
 let   num1,
    tipoOperacion;


const calc = () =>{ 
    if(!keys) return
        keys.addEventListener('click', e =>{
            const t = e.target,
                  d = t.dataset;
             
            if(d.number) writeScreen(d.number);
            if(d.math) getOperation(t, d.math);
            if(d.operation) writeOperation(d.operation);
    })
}

const writeScreen = numero => {
    screen.textContent === '0'//|| estadoOperacion === true
        ? screen.textContent = numero
        : numero === '.' && !screen.textContent.includes('.')
            ? screen.textContent += numero
            :numero !== '.' 
                ?screen.textContent += numero
                :null;
        estadoOperacion = false;
}
const getOperation = (element, opMath) =>{
    //estadoOperacion = true;
    num1 = Number (screen.textContent);
    tipoOperacion = opMath;
    screen.textContent = element.textContent;
}
const writeOperation = operacion =>{
    const result = (num1, tipoOperacion) =>{
        const num2 = Number (screen.textContent);
        let resultado;
        switch (tipoOperacion) {
            case 'mas':
                resultado = num1 + num2;
                break;
            case 'mult':
                resultado = num1 * num2;
                break;
            case 'min':
                resultado = num1 - num2;
                break;
            case 'div':
                resultado = num1 / num2;
                break;
            default:
                break;
        }
        resultado === Infinity
        ? screen.textContent = 'Error!'
        : screen.textContent = resultado;
    }
    operacion === 'clear'
    ? screen.textContent = '0'
    : result(num1, tipoOperacion);
    //estadoOperacion = true;
}
calc();