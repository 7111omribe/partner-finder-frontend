import React from 'react';


const Checkbox = (params) => {
    return (
        <div className="mb-3">
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1" style={{marginRight: '6px'}}>
                    {params['text']}
                </label>
            </div>
        </div>

    );
};

export default Checkbox;
