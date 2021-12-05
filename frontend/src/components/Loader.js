import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <Spinner
            animation='border'
            role='status'
            style={{
                display: 'flex',
                maring: 'auto',
                height:'100px',
                width:'100px',
            }}
        >
            <span className='sr-only'>Loading...</span>    
        </Spinner>
    )
}

export default Loader
