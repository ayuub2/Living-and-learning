var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
//var Button = require("-components/button");

var TechOnePage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
      <BasicSegment style={{position:"relative"}}>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Your IT account and password</h2>
      </BasicSegment>
      <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
        <p>Once you’re set up with an account, you can access email, log on to lab computers, connect to wi-fi and much more. If you haven’t got your login name and password yet, go to: www.essex.ac.uk/welcome/getaccount</p>
        <p>You must change your password within four weeks of starting, and then once every four months after that. The easiest way to change your password is online at: www.essex.ac.uk/welcome/password</p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Get IT help</h2>
        <p>Visit the IT Services website for helpful information, including how-to guides, answers to frequently asked questions, and links to video screencasts. www.essex.ac.uk/welcome/it</p>
        <p>If you can’t find what you’re looking for, or if you need to talk to someone, then you can get help from the IT Helpdesk. Find us in the Silberrad Student Centre at the Learning Hub on the ground floor. We’re open Monday to Thursday 8.30am to 6.00pm, and Friday 8.30am to 5.45pm. You can also follow us on Twitter @UniEssexIT</p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Wi-fi on campus</h2>
        <p>Our campus wi-fi network is called eduroam. It’s free to use and you can connect to it with your Essex email address and password. For help setting up your device go to www.essex.ac.uk/welcome/wifi</p>
      </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechOnePage;