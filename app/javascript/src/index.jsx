import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Index extends React.Component {
    render() {
        console.log("Index does render")
        return (
            <React.Fragment>
                {/* If Layout is null, render will not be called on Index */}
                {Layout && <Layout>
                    <h1>Hello World</h1>
                </Layout>}
            </React.Fragment>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Index />, (document.body.appendChild(document.createElement('div')) || {}).current);
})
