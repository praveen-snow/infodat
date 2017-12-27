/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import Webcam from 'react-webcam';

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
closeModal(){
    this.props.close();
},
setRef(webcam){
    this.webcam = webcam;
},
capture(){
    const imageSrc = this.webcam.getScreenshot();
    console.log("Captured Image ::::>>>",imageSrc);
},
render() {
    return (
        <div>
            <Webcam
                audio={false}
                height={280}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
            />
            <button className="captureBtn" onClick={this.capture}>Capture</button>
        </div>);
    },
});
