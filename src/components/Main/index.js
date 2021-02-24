import React from 'react'
import Note from './Note';
import {notes} from '../helpers';

const Main = () => {

    return (
        <main>

        <section className="new">
            <form id="createForm" action="/movies/create" method="post">
                <input type="text" name="title" placeholder="Título" />
                <textarea name="text" id="text" cols="30" placeholder="Añade una nota..."></textarea>
                <button type="submit">Crear</button>
            </form>
        </section>

        <section className="list">
        <p>La cantidad de notas son: {notes.count}</p>
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

export default Main;