import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import {connect} from 'react-redux';
import {kartActions} from '../_actions';
 
class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data !== null){
      this.setState({
        result: data,
      });

      var kartID = JSON.parse(data);
      console.log(kartID.kartID);
      this.props.sendKartID(kartID.kartID);
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: '95%',
      width: '95%',
      margin: 'auto',
      verticalAlign: 'middle',
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendKartID: (kartID) => {
      dispatch(kartActions.sendKartID(kartID)) 
  }
})

const connectedAddItem = connect(null, mapDispatchToProps)(AddItem);
export { connectedAddItem as AddItem };