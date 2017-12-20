/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        zoom:0,
        rotate:0
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
handleOnChangeZoom(value) {
    this.setState({
      zoom: value
    })
},
handleOnChangeRotate(value) {
    this.setState({
      rotate: value
    })
},
render() {
    return (
        <div>
            <h2 className="Heading">Upload Profile Image</h2>
            <center>
                <img className="upload" src="assets/png/upload.png"></img>
            </center>
            <div className="editAbles">
                <Slider
                    value={this.state.zoom}
                    orientation="horizontal"
                    onChange={this.handleOnChangeZoom}
                />
            </div>
            <div className="editAbles">
                <Slider
                    value={this.state.rotate}
                    orientation="horizontal"
                    onChange={this.handleOnChangeRotate}
                />
            </div>
        </div>);
    },
});
