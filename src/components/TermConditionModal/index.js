/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],




componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
render() {
return (
    <div className="VZ_BasicModal" onClick={this.props.close}>
        <div className="ModalWrap">
          <section className="MainContent">
            <p dangerouslySetInnerHTML={{__html: this.props.mainTxt}}></p>
          </section>
        </div>
    </div>
);
},
});
