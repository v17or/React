import React, { Component } from 'react' 
import {Editor} from 'slate-react'
import {Value} from 'slate'


// Criar um valor inicial para não crashar a aplicação...
const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'Meu primeiro paragrafo!',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})

export default class Texteditor extends Component {

    state = {
        value: initialValue,
    }

    onChange = ({ value }) => {
        this.setState({ value })
    }

    render() {
        return(
            <Editor value={this.state.value} onChange={this.onChange} />
        )
    }
}
