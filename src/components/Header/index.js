/* src/components/Header */

import React from 'react';
import { bindListener } from 'utils';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    unsubscribe: ()=>{},
    getInitialState() {
        return {
            noHideSignUp:true
        };
    },
    componentWillMount() {
        ss.use();
        this.unsubscribe = bindListener(this.props.currentListener, state => {
            if(state['userProfilePage']){
                this.setState({noHideSignUp:false});
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
                            {this.state.noHideSignUp ? this.createSignUp() : false}
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

});
