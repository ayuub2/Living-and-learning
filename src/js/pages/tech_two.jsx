var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
//var Button = require("-components/button");

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
        <p>As an Essex student you can download Microsoft Office 365, for free. You can install it for free on up to five computers, and up to five mobile devices (also for free!). You can get your free software online about one week before your official start date. p.s Did we mention it was free? u www.essex.ac.uk/welcome/office365</p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Email and Office 365</h2>
        <p>All of our students get a Microsoft Office 365 email account that gives you your very own Essex email address and plenty of space to store your emails. We use email to contact you about important stuff, so make sure you check it regularly! u www.essex.ac.uk/welcome/email </p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Lynda.com - grow your brain</h2>
        <p>At Essex we care about your personal development, so you have free access to Lynda. com, a massive online video library offering thousands of courses and tutorials on a wide range of topics. Develop skills at your own pace, build confidence, discover your interests and beef up your CV. www.essex.ac.uk/welcome/lynda</p>
      </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechTwoPage;
