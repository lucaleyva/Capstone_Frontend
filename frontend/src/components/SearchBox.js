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
        // ? There's a weird bug where when you delete 'd-flex' add it in and then save, it will align the search bar and button online. but when you refresh the page, the alignment is thrown off.
        // TODO: Get Pascal's help
        <Form onSubmit={submitHandler} inline class='d-flex'>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                class="form-control me-sm-2"
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-light'
                class="btn btn-secondary my-2 my-sm-0"
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox

