/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import AvatarEditor from 'react-avatar-editor'

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        userName:'',
        passWord:'',
        zoom:1.2,
        rotate:0,
        image:'',
        mouserHover:false
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
loadImage(){
    console.log("load image");
    this.inputElement.click();
},
imageUpload(e){
    const file = e.target.files[0];
    console.log(file.name);
    this.setState({image:file.name});
},
imageRotate(){
    let rotate = this.state.rotate;
    rotate = rotate + 45;
    if(rotate > 360){
        return;
    }
    this.setState({rotate:rotate})
},
render() {
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
    return (
        <div className="VZ_BasicModal">
            <div className="ClickLayer" onClick={this.closeModal}></div>
            <div className="ModalWrap">
            <div className="closeBtn"><img className="closeImg" onClick={this.closeModal}src="assets/png/close.png"></img></div>
                <section className="MainContent">
                    <h2 className="Heading">Upload Profile Image</h2>
                    <center>
                        <div className="imageClicker">
                            <AvatarEditor
                                image="assets/png/pic.jpg"
                                width={250}
                                height={250}
                                border={50}
                                color={[255, 255, 255, 0.6]} // RGBA
                                scale={this.state.zoom}
                                rotate={this.state.rotate}
                                disableDrop={false}
                            />
                            <input
                                type="file"
                                ref={input => this.inputElement = input}
                                className = {"uploadImage"}
                                onChange={this.imageUpload}
                            />
                        </div>
                    </center>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Zoom
                            <Slider
                                tooltip={false}
                                min={1.2}
                                max={12}
                                step={0.1}
                                value={this.state.zoom}
                                orientation="horizontal"
                                onChange={this.handleOnChangeZoom}
                            />
                        </div>
                        <div className="col-sm">
                            Straighten
                            <Slider
                                tooltip={false}
                                min={0}
                                max={360}
                                step={45}
                                value={this.state.rotate}
                                orientation="horizontal"
                                onChange={this.handleOnChangeRotate}
                            />
                        </div>
                        <div style={{display:'flex'}}className="col-sm imageAction">
                            <div className="col-sm">
                                <i onClick={()=>{return}} className="fa fa-crop" aria-hidden="true"></i>
                                <br/>
                                Crop
                            </div>
                            <div className="col-sm">
                                <i onClick={this.imageRotate} className="fa fa-repeat" aria-hidden="true"></i>
                                Rotate
                            </div>
                            <div className="col-sm">
                                <i onClick={this.loadImage} className="fa fa-upload" aria-hidden="true"></i>
                                Upload
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <button className="getStarted previous" 
                        onMouseOver={()=>{
                            this.setState({mouserHover:true});
                        }}
                        onMouseOut={()=>{
                            this.setState({mouserHover:false});
                        }}
                        onClick={this.closeModal}>CANCEL
                    </button>
                    <button className={nextClass} onClick={this.props.goToCompanyInfoPage}>SAVE CHANGES</button>
                </center>
            </div>
        </div>);
    },
});


{/* <ImagesUploader
                    url="http://localhost:3030/assets/ImagesUploader/"
                    optimisticPreviews
                    onLoadEnd={(err) => {
                        if (err) {
                            console.error(err);
                        }
                    }}
                    label=""
                /> */}