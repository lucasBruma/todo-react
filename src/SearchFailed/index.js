import React from 'react';

function SearchFailed({searchValue}) {
    return (
        <p>No se encontraron resultados para "{searchValue}"</p>
    );
}

export {SearchFailed};