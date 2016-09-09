var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MoneyPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Seek help if you need it</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>If you get into financial difficulty get help and talk to someone as soon as possible. The sooner your problem is identified, the sooner it can be solved. Advisers in our Student Services Hub and our independent SU Advice Centre can listen and talk you through the issues.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/budgethelp
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essexstudent.com/advice/money</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Online money management</h2>
          <p>Get help planning your finances by registering for free money management and budgeting modules from Blackbullion. You’ll need to register online with your Essex email address.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.blackbulliononline.co.uk</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Top cash tips</h2>
          <p>Read all the top tips from the Money Saving Expert aimed specifically at students:
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.moneysavingexpert.com/students </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"money_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"money_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MoneyPageTwo;
