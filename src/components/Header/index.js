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
    applyForm(){
      this.props.navSignUpForm();
    },
    render() {
        return (
            <div className="appHeader">
                <nav className="appNavigator">
                    <div className="wrapper">
                        <div className="leftWrapper">
                        </div>
                        <div className="rightWrapper">
                          <button type="button" className="btn btn-primary btnPrimary" onClick={this.applyForm} >
                            Apply
                          </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

});
