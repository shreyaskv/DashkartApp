import React from 'react';
import { connect } from 'react-redux';
import {TopBar} from './TopBar.js';
import {MainContent} from './MainContent.js';
import { askForPermissioToReceiveNotifications } from '../_helpers/firebaseConfig';
import {EntryPage} from '../Entry';

class HomePage extends React.Component {

    componentDidMount(){
        askForPermissioToReceiveNotifications();
    }

    render() {
        return(
            <div>
                {this.props.isloggedin === true &&
                <div>
                    <TopBar />
                    <MainContent />
                </div>
                }
                {
                    this.props.isloggedin === false &&
                    <EntryPage />
                }
            </div>
        )
    }
}


const connectedHomePage = connect(null, null)(HomePage);
export { connectedHomePage as HomePage };