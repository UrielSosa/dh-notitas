const qs = element => document.querySelector(element)

window.addEventListener('load', function() {
    let id = new URLSearchParams(window.location.search);
    id = id.get('id');

    let inputTitle = qs('#title');
        inputText = qs('#text');
        editForm = qs('form');


    fetch(`http://localhost:3000/notes/${id}`)
        .then(response => response.json())
        .then(nota => {
            inputTitle.value = nota.title;
            inputText.value = nota.text;
            inputTitle.disabled = false
            inputText.disabled = false
        })
    
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let data = {
            title: this.elements.title.value,
            text: this.elements.text.value
        }
        let settings = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/notes/edit/${id}?_method=put`, settings)
        .then(function(response) {
            return response.json()
        })
        .then(function(edit) {
            if(edit.status == 200) {
                window.location.href = "index.html";
                return;
            }
        })
    })
    
})