import React from 'react';
import { connect } from 'react-redux';
import { } from '../_actions';
import { commissioningActions } from '../_actions';
import {MyKart} from '../MyKart';
import {CheckOut} from '../CheckOut';
import {Payment} from '../Payment';
import {AddItem} from '../MyKart';

class MainContent extends React.Component {

    render() {
        return(
            <div className="maincontent">
                {
                    this.props.spaceOccupier ?
                        this.props.spaceOccupier === 'My Kart' ? <MyKart /> :
                            this.props.spaceOccupier === 'Add Item' ? <AddItem /> :
                                this.props.spaceOccupier === 'Check Out' ? <CheckOut /> : <Payment />
                    : <MyKart />
                }
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    const { spaceOccupier  } = state.homePage
    return {
        spaceOccupier
    };
}

const connectedMainContent = connect(mapStateToProps)(MainContent);
export { connectedMainContent as MainContent};