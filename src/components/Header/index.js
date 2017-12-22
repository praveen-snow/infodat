/* src/components/Header */

import React from 'react';
import { bindListener } from 'utils';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    unsubscribe: ()=>{},
    userDetailsUnsubscribe: ()=>{},
    getInitialState() {
        return {
            noHideSignUp:true,
            userName:''
        };
    },
    componentWillMount() {
        ss.use();
        this.unsubscribe = bindListener(this.props.currentListener, state => {
            if(state['userProfilePage']){
                this.setState({noHideSignUp:false});
            }
        });
        this.userDetailsUnsubscribe = bindListener(this.props.userDetailsListener, state => {
            let userName = '';
            if(state !== '' && state){
                userName = state.split(" ");
                userName = userName[0];
                this.setState({userName:userName});
            }
        });
    },
    componentWillUnmount() {
        ss.unuse();
    },
    componentDidMount() {

    },
    signIn(e){
        let id = e.target.id;
        this.props.signIn(id);
    },
    applyForm(){
      this.props.navSignUpForm();
    },
    createSignUp(){
        let arr = [];
            arr.push(<a key="signIn" onClick={this.signIn} id="SignIn" href="javascript:void(0);">Sign in</a>)
            arr.push(<button key="signUp" type="button" className="btn btn-primary btnPrimary" onClick={this.applyForm} >
                APPLY
            </button>);
        return arr;
    },
    createUserNav(){
        let userName = this.state.userName;
        let arr = [];
            arr.push(<a key="userLogo" href="javascript:void(0);"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>)
            arr.push(<button key="signUp" type="button" className="userName" onClick={()=>{return}} >
                {userName} <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>);
        return arr;
    },
    render() {
        return (
            <div className="appHeader">
                <nav className="appNavigator">
                    <div className="wrapper">
                        <div className="leftWrapper">
                            <div className="logoWrap">
                                <img className="headerLogo" src="assets/png/favicon-32x32.png"></img>
                                <h1> The Network</h1>
                            </div>
                        </div>
                        <div className="rightWrapper">
                            {this.state.noHideSignUp ? this.createSignUp() : this.createUserNav()}
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

});
