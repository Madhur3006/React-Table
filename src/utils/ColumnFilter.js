import React from 'react';

export const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter} = column

    return ( 
        <span>
            Search: {" "}
            <input style={{color: 'black'}} value = {filterValue || ''} onChange = {(e) => setFilter(e.target.value)} />
        </span>
     );
}
 