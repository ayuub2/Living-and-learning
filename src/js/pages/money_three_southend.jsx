var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MoneyPageThreeSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Check your entitlements</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Student finance can get rather complicated but it’s important to make sure you’re receiving any monies you’re entitled to. Advisers in the Student Services Hub can talk you through what’s available and there is information online. You can also check the NUS website for information about benefits and entitlements.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/students/money/"> www.essex.ac.uk/welcome/money</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.nus.org.uk/en/advice/money-and-funding/"> www.nus.org.uk/en/advice/money-and-funding </a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Make it go further</h2>
          <p>As well as funds you’re entitled to, there may be other ways of generating income, such as charities and trusts, part-time employment and discretionary hardship funds. We’ve produced a lot of useful information on this, so make sure you take a look.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/students/money/"> www.essex.ac.uk/welcome/money</a></p>
        <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"money_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"money_four_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MoneyPageThreeSouthend;
