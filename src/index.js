import React from 'react'
import ReactDOM from 'react-dom'

const wasmSource = import('../build/react_rust_wasm')

wasmSource.then(wasm => {

    const bigComputation = () => {
        alert('big computation in JS')
    }

    const App = () => {
        return (
            <div>
                <h1>Click me m8!</h1>
                <button onClick={bigComputation}>Run Computation (JS)</button>
                <button onClick={wasm.big_computation}>Run Computation (Rust)</button>
            </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById('root'))

})