import React, {Component} from 'react'
import Note from './Note';
import Form from './Form';

class Main extends Component {
    constructor () {
        super();
        this.state = {
            notes: [],
            errors: true,
            title: "",
            text: ""
        }
    }

    fetchCall (endpoint, call, config = null) {
        fetch(endpoint, config)
            .then(res => res.json())
            .then(data => call(data))
    }

    componentDidMount() {
        let url = 'http://localhost:3001/api/all';
        let call = (data) => {
            this.setState({notes: data.data})
        }
        
        this.fetchCall(url, call);
    }

    handleChange (e) {
        if (e.target.value.length !== 0) {
            this.setState({ 
                errors: false,
                [e.target.name]: e.target.value
            })
            return;
        }
        this.setState({ errors: true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:3001/api/create';
        let call = (data) => {
            this.setState({ title: "", text:"" })
        }
        let data = {
            titulo: this.state.title,
            texto:this.state.text
        }
        let config = {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
        }
          console.log(data);

        if (!this.state.errors) {
            this.fetchCall(url, call, config);
        }
    }

   render () {
       let {notes} = this.state;
       return (
           <main>
               <section className="new">
                   <Form
                       action="/api/create"
                       method="post"
                       evento={this.handleSubmit}
                   >
                       <input 
                            type="text" 
                            name="title" 
                            placeholder="Título"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.title}
                        />
                       <textarea 
                            name="text" 
                            id="text" 
                            cols="30" 
                            placeholder="Añade una nota..."
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.text}
                        ></textarea>
                       <button type="submit">Crear</button>
                   </Form>

               </section>
               <section className="list">
                   {
                       notes.map((note) => {
                           return (
                               <Note
                                   key={note.id}
                                   title={note.titulo}
                                   description={note.texto}
                               />
                           )
                       })
                   }
               </section>
           </main>
       )
   }
}

export default Main;