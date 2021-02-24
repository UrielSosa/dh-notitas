let qs = function(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {

    let createForm = qs('#createForm');

    fetch('http://localhost:3000/api/all')
        .then(function(response){
            return response.json()
        })
        .then(function(pepe) {
            let lista = qs('.list');
            console.log(pepe.notas)
            for(let i = 0; i < pepe.notas.length; i++) {
                lista.innerHTML += `
                    <div class="note">
                        <h2>${pepe.notas[i].titulo}</h2>
                        <p>${pepe.notas[i].texto}</p>
                        <div class="edit">
                            <a href=""><i class="far fa-edit"></i></a>
                            <form class="deleteForm" action="">
                                <button type="submit"><i class="far fa-trash-alt"></i></button>
                            </form>
                        </div>
                    </div>
            `
            }
        })

    createForm.addEventListener('submit', function(e) {
        e.preventDefault()

        // console.log(createForm.elements.title.value)
        // console.log(createForm.elements.text.value)

        let datos = {
            titulo: createForm.elements.title.value,
            texto: createForm.elements.text.value
        }

        let config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datos)
        }

        fetch('http://localhost:3000/api/create', config)
        .then(function(envio) {
            return envio.json()
        })
        .then(function(firulais) {
            if(firulais) {
                fetch('http://localhost:3000/api/all')
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(firulais) {
                        createForm.reset();
                        let lista = qs('.list');

                        lista.innerHTML = "";
                        
                        for(let i = 0; i < firulais.notas.length; i++) {
                            lista.innerHTML += `
                                <div class="note">
                                    <h2>${firulais.notas[i].titulo}</h2>
                                    <p>${firulais.notas[i].texto}</p>
                                    <div class="edit">
                                        <a href=""><i class="far fa-edit"></i></a>
                                        <form class="deleteForm" action="">
                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                        </form>
                                    </div>
                                </div>
                        `
                        }
                    })
            }
        })

    })

})