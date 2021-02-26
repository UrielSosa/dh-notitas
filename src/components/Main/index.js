import React, {Component} from 'react'
import Note from './Note';
import {notes} from '../helpers';
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

    handleSubmit (e) {
        e.preventDefault();
        console.log('entro en el prevent');
    }

   render () {
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
                        />
                       <textarea 
                            name="text" 
                            id="text" 
                            cols="30" 
                            placeholder="Añade una nota..."
                            onChange={(e) => this.handleChange(e)}
                        ></textarea>
                       <button type="submit">Crear</button>
                   </Form>

               </section>
               <section className="list">
                   {
                       notes.notes.map((note, i) => {
                           return (
                               <Note
                                   key={i}
                                   title={note.title}
                                   description={note.description}
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