import React from 'react';

const EditOption = () => {
    return (
        <article className='edit-card-wrapper'>
            <div>
                <small className="edit-option">
                    Edit
                </small>
                <small className="edit-option">
                    Save
                </small>
                <small className="edit-option">
                    Cancel
                </small>
            </div>
        </article>
    );
};

export default EditOption;