/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
render() {
    return (
        <div>
            <h2 className="Heading">Edit Previous Work Experience</h2>
            <form className="row networkApplyForm">
                <div className="field col-lg-12">
                    <input className={"noErrorField"} id="invitationNumber" type="text"/>
                    <field-label>COMPANY</field-label>
                </div>
                <div className="field col-lg-12">
                    <input className={"noErrorField"} id="invitationNumber" type="text"/>
                    <field-label>TITLE</field-label>
                </div>
                <span className="spanClass">From</span>
                <div className="flexFlow">
                    <div className= "field col-lg-6">
                        <input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow"></span>
                        <field-label>MONTH</field-label>
                    </div>
                    <div className= "field col-lg-6">
                        <input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow"></span>
                        <field-label>YEAR</field-label>
                    </div>
                </div>
                <span className="spanClass">To</span>
                <div className="flexFlow">
                    <div className= "field col-lg-6">
                        <input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow"></span>
                        <field-label>MONTH</field-label>
                    </div>
                    <div className= "field col-lg-6">
                        <input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow"></span>
                        <field-label>YEAR</field-label>
                    </div>
                </div>
            </form>
        </div>);
    },
});
