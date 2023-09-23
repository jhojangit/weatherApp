import React from 'react'

const Filter = ({city, handleSelect}) => {




    return (
        <div>
            <li onClick={() => handleSelect(city)}>{city}</li>
        </div>
    )
}

export default Filter