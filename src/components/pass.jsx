import React, { Component } from 'react';

class Pass extends Component {
    state = {
        retail_name: '',
        barcode_number: 1
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.create_pass()}</span>
                {/* <button>Increme nt</button> */}
            </React.Fragment>

        );
    }

    create_pass() {
        const { barcode_number } = this.state;
        return barcode_number === 0 ? 'invalid barcode number' : barcode_number;
    }
}

export default Pass;