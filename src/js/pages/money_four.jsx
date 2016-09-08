var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MoneyPageFour = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Late loan?</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>For most UK undergraduates your first payment will be released a few days after you register with the University, so make sure you have enough money to see you through the first week or two. If you haven’t had your first instalment within a week of registering, first contact your funding provider to see if there’s a reason why your funding is delayed. An adviser in the Student Services Hub may be able to help explain what needs to be done and offer some short-term financial assistance until the problems are sorted out.<br/>www.essex.ac.uk/welcome/hub</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>NUS Extra</h2>
          <p>You can save large amounts of money when you shop on campus, in Colchester and online by using the NUS Extra student discount card. This card is available to all students and offers amazing discounts on clothes, food, music, entertainment and travel from national and local companies including Amazon, Odeon, Pizza Express, Superdrug, ASOS, and Spotify. The sooner you apply the sooner you’ll start to save money!<br/>www.nus.org.uk/nus-extra</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"money_three")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"eat")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MoneyPageFour;
