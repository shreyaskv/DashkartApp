import React from 'react';
import { connect } from 'react-redux';

class Payment extends React.Component {

    render() {
        return(
            <div>
                Payment
            </div>
        )
    }
    
}


const connectedPayment = connect(null, null)(Payment);
export { connectedPayment as Payment };