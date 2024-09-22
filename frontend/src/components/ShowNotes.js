// src/components/ShowNotes.js
import React from 'react';

const ShowNotes = ({ notes }) => {
    return (
        <div id="notes" className="row container-fluid">
            {notes.map((note, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowNotes;
