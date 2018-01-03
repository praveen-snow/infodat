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
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<div className="profilePicture">
						<div className="profilePictureImage">
						  <span className="editSpan">
						  <a id="editPicture" onClick={this.editProfile} className="editcolor"  aria-hidden="true">EDIT</a>
						  </span>
						</div>
					</div>
				</div>
				
				<div className="col-lg-9">
					<div className="userPersonalInfo">
						<div className="userName">
						{this.props.userDetails.userName}
						</div>
						<div>[ {this.props.userDetails.jobTitle} ],  [{this.props.userDetails.company}]
						<a id="editPersonalnfo" onClick={this.editProfile} className="editcolor" aria-hidden="true"> EDIT</a>
						</div>
						<div className="def-padd">
							<span>{this.props.userDetails.workEmail}</span>
							<br/>
							{this.props.userDetails.phoneNumber}
						</div>
						<div className="def-padd">[{this.props.userDetails.jobFunction}]</div>
					</div>
				</div>
				
				<div className="clearfix"></div>
				{/*<div className="col-lg-12">
					<div className="desc-block">ABOUT ME <span className="editcolor">SHOW MORE</span><br/>
						<span className="edit-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Vivamus ut feugiat risus. Donec ornare mauris vitae mauris euismod, 
							nec elementum est porta. Nulla non quam nunc. Sed sit amet magna ut dui molestie 
							dignissim id a nunc. Fusce ut libero sapien. Duis eu tempus mi. Nulla placerat, 
							augue vitae dignissim faucibus, tellus felis malesuada massa, molestie ultrices nulla 
							risus eget leo. Mauris malesuada sapien et massa maximus eleifend. Mauris posuere rhoncus 
							mauris sit amet posuere. Sed a nibh quis urna blandit mollis sed nec est. Fusce ultricies tempus libero, 
							tristique egestas quam ornare eu. Ut fermentum, elit ac tincidunt mattis, mi est fermentum nisi, ut viverra turpis nunc id velit.
						</span>
					</div>
					<div className="hrline"></div>
		</div>*/}


			  <div className="col-lg-12">
				<div className="desc-block">
				<input type="checkbox" className="read-more-state" id="name" />
					<span>ABOUT ME</span><label htmlFor="name" className="read-more-trigger"></label>
					<p className="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Vivamus ut feugiat risus. Donec ornare mauris vitae mauris euismod, 
							nec elementum est porta. Nulla non quam nunc. Sed sit amet magna ut dui molestie 
							dignissim id a nunc. Fusce ut libero sapien.
						<span className="read-more-target">
						Duis eu tempus mi. Nulla placerat, 
							augue vitae dignissim faucibus, tellus felis malesuada massa, molestie ultrices nulla 
							risus eget leo. Mauris malesuada sapien et massa maximus eleifend. Mauris posuere rhoncus 
							mauris sit amet posuere. Sed a nibh quis urna blandit mollis sed nec est. Fusce ultricies tempus libero, 
							tristique egestas quam ornare eu. Ut fermentum, elit ac tincidunt mattis, mi est fermentum nisi, ut viverra turpis nunc id velit.</span>
					</p>
					<div className="hrline"></div>
				</div>
				</div>

				<div className="clearfix"></div>
				<div className="col-lg-5">
				
					<div className="expname">
						<h3>WORK EXPERIANCE 
						<a id="editWork" onClick={this.editProfile} aria-hidden="true" className="editcolor"> Edit</a></h3>
						<div className="expname">
							<h4>Quartz Events </h4>
							Senior Vice President
							<br/>
							June 2016 - Present
						</div>
						
						<div className="expname">
							<h4>Quartz Events </h4>
							Senior Vice President
							<br/>
							June 2016 - Present
						</div>
						<label id="addWork" onClick={this.editProfile} className="userName experiance addMore">
							<i id="addWork" onClick={this.editProfile} className="fa fa-plus" aria-hidden="true"></i> Previous Work Experience
						</label>
					</div>	
				</div>
				
				
				<div className="col-lg-7">
					<h3>Current Company Profile</h3>
					<div className="row">
						<div className="col-lg-4">						
							<div className="companylogo">
								LOGO
							</div>						
						</div>
						<div className="col-lg-8">
						<h2>Quartz B2B</h2>
							<div className="row">
								<div className="col-lg-6">
									<span>Industry</span><br/>
									<span>Revenue</span><br/>
									<span>Employee Size</span>
								</div>
								
								<div className="col-lg-6">
									<span>Events</span><br/>
									<span>$X-X Million</span><br/>
									<span>1-50</span>
								</div>	
							</div>
						</div>
					</div>
				</div>

				<div className="clearfix"></div>
				<div className="col-lg-12">
				<div className="hrline"></div>
				</div>
				
				<div className="col-lg-12">
					<h3>Special Interests
					<a id="editWork" onClick={this.editProfile} aria-hidden="true" className="editcolor"> Edit</a>
					</h3>
					<div className="row">
						<div className="col-lg-12">
						<label>Supply Chain</label>
						</div>
						<div className="clearfix"></div>
						<div className="col-lg-3">
							<div className="interest-box">
							3PLs
							</div>
						</div>
						<div className="col-lg-3">
							<div className="interest-box">
							Procurement & Strategic Sourcing
							</div>
						</div>
						<div className="col-lg-3">
						</div>
						<div className="col-lg-3">
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<label>Human Resources</label>
						</div>
						<div className="clearfix"></div>
						<div className="col-lg-3">
							<div className="interest-box">
							Recuriting & Staffing
							</div>
						</div>
						<div className="col-lg-3">
							<div className="interest-box">
							Benefits & Compensation
							</div>
						</div>
						<div className="col-lg-3">
							<div className="interest-box">
							Employee Engagement
							</div>
						</div>
						<div className="col-lg-3">
						</div>
					</div>
					
				</div>
		</div>
		</div>
		</div>   
    );
  },
});
