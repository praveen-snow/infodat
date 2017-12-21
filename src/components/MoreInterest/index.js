/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
let cateGoryObj = {
    'Supply Chain':['Supply 1','Supply 2','Supply 3','Supply 4','Supply 5','Supply 6','Supply 7','Supply 8'],
    'Procurement':['Procurement 1','Procurement 2','Procurement 3','Procurement 4','Procurement 5','Procurement 6','Procurement 7','Procurement 8'],
    'Manufacturing/Operations':['Manufacturing 1','Manufacturing 2','Manufacturing 3','Manufacturing 4','Manufacturing 5','Manufacturing 6','Manufacturing 7','Manufacturing 8'],
    'Finance':['Finance 1','Finance 2','Finance 3','Finance 4','Finance 5','Finance 6','Finance 7','Finance 8'],
    'Human Resources':['Human 1','Human 2','Human 3','Human 4','Human 5','Human 6','Human 7','Human 8'],
    'Marketing':['Marketing 1','Marketing 2','Marketing 3','Marketing 4','Marketing 5','Marketing 6','Marketing 7','Marketing 8']
};
export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        mouserHover:false,
        subCateGory:cateGoryObj['Supply Chain'],
        category:cateGoryObj,
        selected:{},
        userClickedCat:'Supply Chain'
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
    let category = ["Supply Chain","Procurement","Manufacturing/Operations","Finance","Human Resources","Marketing"];
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
                    <p>5 of 5</p>
                </section>
                <center>
                    <p className="heading">More Areas of Interest</p>
                </center>
                <section className="MainContent">
                    <p>Select Areas of Interests from the Categories below.</p>
                </section>
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