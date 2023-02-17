import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Loading.css'

function Loading(props) {
    return (
        <div className='loading-parent'>
            <Spinner/>
        </div>
    );
}

export {Loading};