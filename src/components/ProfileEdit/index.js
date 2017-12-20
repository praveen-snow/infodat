/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import AddWork from './addWorkExperiance';
import EditWork from './editWorkExperiance';
import CompanyInfo from './editCompanyInfo';
import EditPersonalInfo from './editPersonalnfo';
import EditPicture from './editPicture';
import EditAreaInterest from './editAreaOfInterest';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
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
getEditModals(){
    let modalIdentifier = this.props.id;
    switch(modalIdentifier) {
        case 'editWork':
            return (<EditWork/>);
            break;
        case 'addWork':
            return (<AddWork/>);
            break;
        case 'companyInfo':
            return (<CompanyInfo/>);
            break;
        case 'editPersonalnfo':
            return (<EditPersonalInfo/>);
            break;
        case 'editPicture':
            return (<EditPicture/>);
            break;
        case 'editAreaInterest':
            return (<EditAreaInterest/>);
            break;
        default:
            return;
    }
},
render() {
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
    return (
        <div className="VZ_BasicModal">
            <div className="ClickLayer" onClick={this.closeModal}></div>
            <div className="ModalWrap">
                <div className="closeBtn"><img className="closeImg" onClick={this.closeModal}src="assets/png/close.png"></img></div>
                <section className="MainContent">
                    {this.getEditModals()}
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
                </section>
            </div>
            
        </div>);
    },
});
