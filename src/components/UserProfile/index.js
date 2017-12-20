/* src/components/Backdrop */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import { bindListener } from 'utils';

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
  editProfile(e){
    let id = e.target.id;
    this.props.editProfile(id);
  },
  createSubCategory(sub){
    let arr = [];
      for(let i in sub){
        arr.push(<div key={sub[i]}className="subCategoryDec">{sub[i]}</div>);
      }
    return arr;
  },
  createUserIntrest(){
    let arr = [];
    let userInterest = this.props.userDetails.userAreaInterest;
    for(let i in userInterest){
      arr.push(<div key={i} className="userPersonalInfo"><label className="userName experiance">
          {i}
      </label><div className="subCategory">{this.createSubCategory(userInterest[i])}</div></div>);
    }
    return arr;
  },
  render() {
    return (
      <div className="appBackground">
        <section className="userProfile">
          <div className="profileWrapper">
            <div className="userProfileWrapper">
              <div className="logo">
              
              </div>
              <div className="profilePicture">
                <div className="profilePictureImage">
                  <span className="editSpan"><i className="fa fa-pencil" id="editPicture" onClick={this.editProfile} aria-hidden="true"></i></span>
                  <img src="assets/png/upload.png"></img>
                </div>
              </div>
            </div>
            <div className="userProfileWrapper">
              <div className="workExperiance">
                <span className="subHeader">PERSONAL INFO <i id="editPersonalnfo" onClick={this.editProfile} className="fa fa-pencil" aria-hidden="true"></i></span>
                <div className="userPersonalInfo">
                  <label className="userName">
                    {this.props.userDetails.userName}
                  </label>
                  <span> {this.props.userDetails.jobTitle},  {this.props.userDetails.company}</span>
                  <br/>
                  <span>{this.props.userDetails.workEmail}</span>
                  <span>{this.props.userDetails.phoneNumber}</span>
                  <br/>
                  <span>{this.props.userDetails.jobFunction}</span>
                  <br/>
                  <span>BIO</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus ut feugiat risus. Donec ornare mauris vitae mauris euismod, 
                    nec elementum est porta. Nulla non quam nunc. Sed sit amet magna ut dui molestie 
                    dignissim id a nunc. Fusce ut libero sapien. Duis eu tempus mi. Nulla placerat, 
                    augue vitae dignissim faucibus, tellus felis malesuada massa, molestie ultrices nulla 
                    risus eget leo. Mauris malesuada sapien et massa maximus eleifend. Mauris posuere rhoncus 
                    mauris sit amet posuere. Sed a nibh quis urna blandit mollis sed nec est. Fusce ultricies tempus libero, 
                    tristique egestas quam ornare eu. Ut fermentum, elit ac tincidunt mattis, mi est fermentum nisi, ut viverra turpis nunc id velit.
                  </span>
                </div>
              </div>
            </div>
            <div className="userProfileWrapper">
              <div className="workExperiance">
                <span className="subHeader">WORK EXPERIANCE</span>
                <div className="userPersonalInfo">
                  <label className="userName experiance">
                    Quartz Events <i id="editWork" onClick={this.editProfile} className="fa fa-pencil" aria-hidden="true"></i>
                  </label>
                  <span>Senior Vice President</span>
                  <span>Jube 2016 - Present</span>
                  <br/>
                  <label className="userName experiance">
                    Quartz Events <i id="editWork" onClick={this.editProfile} className="fa fa-pencil" aria-hidden="true"></i>
                  </label>
                  <span>Senior Vice President</span>
                  <span>Jube 2016 - Present</span>
                  <label id="addWork" onClick={this.editProfile} className="userName experiance addMore">
                    <i id="addWork" onClick={this.editProfile} className="fa fa-plus" aria-hidden="true"></i> Previous Work Experience
                  </label>
                </div>
            </div>
            <div className="userProfileWrapper">
                <div className="workExperiance">
                  <span className="subHeader">SPECIAL INTERESTS <i id="editAreaInterest" onClick={this.editProfile} className="fa fa-pencil" aria-hidden="true"></i></span>
                  {this.createUserIntrest()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
});
