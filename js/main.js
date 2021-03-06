// console.log('Conectado con html')
const _formSorteo = document.getElementById('formSorteo')
const _numGanador = document.getElementById('numGanador')
const _numeroGanadorContainer = document.getElementById('numeroGanadorContainer')
const _alertas = document.querySelector('.alertas')

// Eventslistener
_formSorteo.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log('diste click en el botton')
    const data = new FormData(_formSorteo)
    const [min, max] = [...data.values()]

    // Validacion de inputs
    if( min === "" ){
        // alert('No ingresaste valor minimo')
        _alertas.innerHTML = `<p class="alert alert-danger w-75">No ingresaste valor minimo</p>`
        _formSorteo.reset()
        return
    }
    if(max === ""){
        // alert('Ingresar valor maximo por favor')
        _alertas.innerHTML = `<p class="alert alert-danger w-75">No ingresaste valor maximo</p>`
        _formSorteo.reset()
        return
    }
    if(max < min){
        // alert('El numero minimo debe ser menor al maximo')
        _alertas.innerHTML = `<p class="alert alert-danger w-75">El numero minimo debe ser menor al maximo</p>`
        _formSorteo.reset()
        return
    }
    
    // console.log( sortearNumeroAleatoreo(min,max))
    mostrarNumeroGanadorDom()
    _alertas.innerHTML = ''
    _numGanador.innerHTML = `${sortearNumeroAleatoreo(min,max)}`

})
// funcion para obtener numero aleatoreo
const sortearNumeroAleatoreo = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}
// funcion para mostrar numero ganador en el DOM
const mostrarNumeroGanadorDom = () =>{
    _numeroGanadorContainer.classList.remove('d-none')
}
// funcion msj alertas dom
const alertasDom = () => {
    // PENDIENTE
}