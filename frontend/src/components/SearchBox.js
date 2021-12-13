import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} className="d-flex">
            <Form.Control
                type='text'
                placeholder='Type to search'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className="form-control me-sm-2"
                >
                </Form.Control>

                <Button
                    type='submit'
                    variant='outline-light'
                    className="btn btn-primary"
                    >
                    Submit
                </Button>
        </Form>
    )
}

export default SearchBox

