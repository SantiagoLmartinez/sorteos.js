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
        alert('No ingresaste valor minimo')
        _formSorteo.reset()
        return
    }
    if(max === ""){
        alert('Ingresar valor maximo por favor')
        _formSorteo.reset()
        return
    }
    if(max < min){
        alert('El numero minimo debe ser menor al maximo')
        _formSorteo.reset()
        return
    }
    
    // console.log( sortearNumeroAleatoreo(min,max))
    _numGanador.innerHTML = `${sortearNumeroAleatoreo(min,max)}`

})
// funcion para obtener numero aleatoreo
const sortearNumeroAleatoreo = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}