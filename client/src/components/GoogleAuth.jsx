import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';

const msp = state => {
    debugger
    return(
        {
            currentUser: state.session.currentUser
        }
    );
};

const mdp = dispatch => {
    return({
        signIn: () => dispatch(signIn()),
        signOut: () => dispatch(signOut())
    })
};


class GoogleAuth extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '13840900868-eribe0vh4io28n1ebfo1v82gbh0afkuu.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

   logOut = (e) => {
        e.preventDefault();
       this.auth.signOut().then(()=>{
           this.props.signOut();
       });
       
    }

   logIn = (e) => {
        e.preventDefault();
       this.auth.signIn().then(() => {
           this.props.signIn();
        });  
    }

    renderAuthButton(){
        if(this.props.currentUser === null) {
            return null;
        } else if (this.props.currentUser) {
            return <button className="ui red google button" onClick={this.logOut}>
                    <i className="google icon"></i>
                    log out
                 </button>
        } else {
            return <button className="ui red google button" onClick={this.logIn}>
                    <i className="google icon"></i>
                    log in
                   </button>
        }
    }

    render(){
        debugger
      
        return (<div>{this.renderAuthButton()}</div>)
    }
}

export default connect(msp, mdp)(GoogleAuth);