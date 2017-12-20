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
                <h2 className="Heading">Edit Personal Info</h2>
                <form className="row networkApplyForm">
                    <div className="field col-lg-12">
                        <input className={"noErrorField"} id="invitationNumber" type="text"/>
                        <field-label>WORK EMAIL</field-label>
                    </div>
                    <div className="field col-lg-12">
                        <input className={"noErrorField"} id="invitationNumber" type="text"/>
                        <field-label>PHONE NUMBER</field-label>
                    </div>
                    <div className="field col-lg-12">
                        <textarea className={"noErrorField"} id="invitationNumber" type="text"/>
                        <field-label>BIO</field-label>
                    </div>
                </form>
            </div>
        );
    },
});
