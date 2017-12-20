/* src/components/Header */

import React from 'react';
import { bindListener } from 'utils';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    getInitialState() {
        return {
        };
    },
    componentWillMount() {
        ss.use();
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
                            
                            <a onClick={this.signIn} id="SignIn" href="javascript:void(0);">Sign in</a>
                            
                          <button type="button" className="btn btn-primary btnPrimary" onClick={this.applyForm} >
                            APPLY
                          </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

});
