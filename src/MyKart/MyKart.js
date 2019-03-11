import React from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import {homePageActions} from '../_actions';

const styles = theme => ({
    margin: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      position: 'absolute',
      bottom: '5vh',
      margin: 0,
    },
    kartitem: {
        padding: '2%',
    },
  });

class MyKart extends React.Component {

    state = {
      kartItems: [],
    }

    openAddItem = () => {
        console.log("asdf");
        this.props.setSpaceOccupier("Add Item");
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
              <div>
                {this.state.kartItems &&
                    <Paper className={classes.kartitem} elevation={1}>
                        <Typography variant="h5" component="h3">
                          This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                          Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                }
              </div>
            <center>
                <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin} onClick={this.openAddItem}>
                    <AddIcon />
                </Fab>
            </center>
            </div>
        )
    }
    
}

MyKart.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    setSpaceOccupier: (occupier) => {
        dispatch(homePageActions.setSpaceOccupier(occupier)) 
    }
  })
  

const connectedMyKart = connect(null, mapDispatchToProps)(withStyles(styles)(MyKart));
export { connectedMyKart as MyKart };