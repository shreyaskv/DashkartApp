import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {entryActions} from '../_actions';
import {connect} from 'react-rdux';

const styles = theme => ({
    margin: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      position: 'absolute',
      bottom: '20vh',
      margin: 0,
    },
  });


class EntryPage extends Component{

    getPin = () => {
        this.props.requestOTP();
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <center>
                    <h4>
                        Dash Kart
                    </h4>
                <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin} onClick={this.getPin}>
                    GET OTP
                </Fab>
                </center>
            </div>
        );
    }
}


EntryPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    requestOTP: () => {
        dispatch(entryActions.requestOTP()) 
    }
  })
  

const connectedEntryPage = connect(null, mapDispatchToProps)(withStyles(styles)(EntryPage));
export { connectedEntryPage as EntryPage };