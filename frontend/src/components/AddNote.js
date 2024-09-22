// src/components/AddNote.js
import React, { useState } from 'react';

const AddNote = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = () => {
        onAddNote({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className="card my-3">
            <div className="card-body">
                <div className="mb-3">
                    <h5 className="card-title">Add Title</h5>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                </div>
                <h5 className="card-title">Add a note</h5>
                <div className="form-group">
                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="3"></textarea>
                </div>
                <br />
                <button className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </div>
        </div>
    );
};

export default AddNote;
