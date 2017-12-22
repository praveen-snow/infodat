/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
let cateGoryObj = {
    'Category 1':['Sub Category 1.1','Sub Category 1.2','Sub Category 1.3','Sub Category 1.4','Sub Category 1.5','Sub Category 1.6','Sub Category 1.7','Sub Category 1.8','Sub Category 1.9'],
    'Category 2':['Sub Category 2.1','Sub Category 2.2','Sub Category 2.3','Sub Category 2.4','Sub Category 2.5','Sub Category 2.6','Sub Category 2.7','Sub Category 2.8','Sub Category 2.8'],
    'Category 3':['Sub Category 3.1','Sub Category 3.2','Sub Category 3.3','Sub Category 3.4','Sub Category 3.5','Sub Category 3.6','Sub Category 3.7','Sub Category 3.8','Sub Category 3.8'],
    'Category 4':['Sub Category 4.1','Sub Category 4.2','Sub Category 4.3','Sub Category 4.4','Sub Category 4.5','Sub Category 4.6','Sub Category 4.7','Sub Category 4.8','Sub Category 4.8'],
    'Category 5':['Sub Category 5.1','Sub Category 5.2','Sub Category 5.3','Sub Category 5.4','Sub Category 5.5','Sub Category 5.6','Sub Category 5.7','Sub Category 5.8','Sub Category 5.8'],
    'Category 6':['Sub Category 6.1','Sub Category 6.2','Sub Category 6.3','Sub Category 6.4','Sub Category 6.5','Sub Category 6.6','Sub Category 6.7','Sub Category 6.8','Sub Category 6.8']
};
export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        mouserHover:false,
        subCateGory:cateGoryObj['Category 1'],
        category:cateGoryObj,
        selected:{},
        userClickedCat:'Category 1'
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
goToPersonalInfoPage(){
    this.props.goToPersonalInfoPage();
},
subCateGorySelection(e){
    let id = e.target.id;
    let selected = this.state.selected;
    if(selected[id]){
        delete selected[id];
    } else {
        selected[id] = true;
    }
    this.setState({selected:{...selected}});
},
createSubCategory(){
    let subCategory = this.state.subCateGory;
    let selected = this.state.selected;
    let arr = [];
    for(let i in subCategory){
        arr.push(<div key={subCategory[i]}><div id ={subCategory[i]} onClick = {this.subCateGorySelection} className={selected[subCategory[i]] ? "subCategory selected" : "subCategory"}>
            {subCategory[i]}
        </div></div>);
    }
    return arr;
},
categorySelection(e){
    let key = e.target.id;
    let category = this.state.category;
    let newSubCategory = category[key];
    this.setState({subCateGory:newSubCategory,userClickedCat:key});
},
createCategoryBtns(){
    let category = ["Category 1","Category 2","Category 3","Category 4","Category 5","Category 6"];
    let arr = [];
    let selected = this.state.selected;
    let cateGoryObj = this.state.category;
    let selectedCategory = [];
    let temp = '';
    for(let cat in cateGoryObj){
        temp = cateGoryObj[cat];
        for(let selCat in selected){
            if( temp.indexOf( selCat ) >=0 ){
                selectedCategory.push(cat);
            }
        }
    }
    selectedCategory = selectedCategory.filter((x, i, a) => a.indexOf(x) == i);
    for(let i in category){
        let selectedClass = "";
        if(selectedCategory.indexOf(category[i]) >= 0){
            selectedClass = "cartBorder catSelected";
        }else if(this.state.userClickedCat === category[i]){
            selectedClass = "cartBorder";
        }
        arr.push(
            <div key = {category[i]} id={category[i]} onClick={this.categorySelection} className="cateGory">
                <h3 className={ selectedClass } key = {category[i]} id={category[i]}>{category[i]}</h3>
            </div>
        );
    }
    return arr;
},
goToThankYouPage(){
    let userInterest = {};
    let userInterestSubCategory = [];
    let cateGoryObj = this.state.category;
    let selected = {...this.state.selected};

    for(let cat in cateGoryObj){
        let tempObj = cateGoryObj[cat];
        userInterestSubCategory = [];
        for(let key in selected){
            if(tempObj.indexOf(key) >=0 ){
                userInterestSubCategory.push(key);
                userInterest[cat] = userInterestSubCategory;
            }
        }
    }
    //console.log(userInterest);
    this.props.goToThankYouPage(userInterest);
},
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <section className="MainContent">
                    <p>4 of 5</p>
                </section>
                <center>
                    <p className="heading">Areas of Interest</p>
                </center>
                <section className="MainContent">
                    <p>Select Areas of Interests from the Categories below.</p>
                </section>
                <center>
                    <p className="subHeading">{this.props.userJobFunction}</p>
                </center>
                <center className="categoryBtn">
                    {this.createCategoryBtns()}
                </center>
                <div className="AllCateGory">
                    <div className="wrapper">
                        <div className="subCateGory">
                            <div className="flexFlow">
                                <div className="subWrapper">
                                    {this.createSubCategory()}
                                </div>
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
                        onClick={this.props.goBack}>PREVIOUS</button>
                    <button className={nextClass} onClick={this.goToThankYouPage}>NEXT</button>
                </center>
                <center>
                    <label className="skip" onClick={this.goToThankYouPage}>Skip this step</label>
                </center>
            </div>
        </div>
    );
},
});

{/* <div className="AllCateGory">
<div className="wrapper">
    {this.createCategory()}
</div>
</div> */}