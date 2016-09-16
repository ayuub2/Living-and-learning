var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MoneyPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Money matters </h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Part of being a student means looking after your money and spending it wisely – as chances are you won’t have much! There are some simple steps you can take to budget wisely, and there’s help if you get into financial trouble.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Plan a budget </h2>
          <p>Getting a huge wad of cash in your bank account at the start of the year isn’t the easiest way to plan out your finances for the months ahead. The National Union of Students advises that you plan your budget very carefully. Make sure you remember all your outgoings and be realistic – include:
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> rent
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> food
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> going out
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> books
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> other bills
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> events like Christmas and birthdays
          <br/>good place to start is by looking at average living costs for a student on the NUS website. There are also some good money management tips on the NUS finance pages. You’ll also find ‘top ten tips’ for better budgeting online.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.nus.org.uk/en/advice/">www.nus.org.uk/en/advice</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"enjoy_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"money_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MoneyPageSouthend;
