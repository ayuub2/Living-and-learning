var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechTwoPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Get Microsoft office - free</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>As an Essex student you can download Microsoft Office 365, for free. You can install it for free on up to five computers, and up to five mobile devices (also for free!). You can get your free software online about one week before your official start date. p.s Did we mention it was free?<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/services/email-and-office365/default.aspx"> www.essex.ac.uk/welcome/office365</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Email and Office 365</h2>
          <p>All of our students get a Microsoft Office 365 email account that gives you your very own Essex email address and plenty of space to store your emails. We use email to contact you about important stuff, so make sure you check it regularly!<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/services/email-and-office365/default.aspx"> www.essex.ac.uk/welcome/email</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Lynda.com - grow your brain</h2>
          <p>At Essex we care about your personal development, so you have free access to Lynda. com, a massive online video library offering thousands of courses and tutorials on a wide range of topics. Develop skills at your own pace, build confidence, discover your interests and beef up your CV.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/services/learning-technology/default.aspx"> www.essex.ac.uk/welcome/lynda</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"tech_one")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"tech_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechTwoPage;
