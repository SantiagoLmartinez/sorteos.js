// console.log('Conectado con html')
const _formSorteo = document.getElementById('formSorteo')
const _numGanador = document.getElementById('numGanador')

// Eventslistener
_formSorteo.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log('diste click en el botton')
    const data = new FormData(_formSorteo)
    const [min, max] = [...data.values()]

    // Validacion de inputs
    if( min === "" ){
        console.log('No ingresaste valor minimo')
        return
    }
    if(max === ""){
        console.log('Ingresar valor maximo por favor')
        return
    }
    
    // console.log( sortearNumeroAleatoreo(min,max))
    _numGanador.innerHTML = `${sortearNumeroAleatoreo(min,max)}`

})
// funcion para obtener numero aleatoreo
const sortearNumeroAleatoreo = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}