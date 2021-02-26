import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form';

const Note = ({title, description}) => {
 return (
    <div className="note">
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="edit">
        <a href="/"><i className="far fa-edit"></i></a>
            <Form action="" method="post">
                 <button type="submit"><i className="far fa-trash-alt"></i></button>
            </Form>
    </div>
</div>
 )
}

Note.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Note;