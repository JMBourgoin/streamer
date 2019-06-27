import React from 'react';

class GoogleAuth extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSignedIn: null
        };
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
       this.auth.signOut();
       this.setState({
           isSignedIn: false
       });
    }

   logIn = (e) => {
        e.preventDefault();
       this.auth.signIn().then(() => {
           this.setState({
            isSignedIn: true
            });
        });  
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
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
      
        return (<div>{this.renderAuthButton()}</div>)
    }
}

export default GoogleAuth;