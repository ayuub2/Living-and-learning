var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"absolute", width:"100%", height:"525px"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Your IT account and password</h2>
          <p>Once you’re set up with an account, you can access email, log on to lab computers, connect to wi-fi and much more. If you haven’t got your login name and password yet, go to:<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/it/getaccount/"> www.essex.ac.uk/welcome/getaccount</a></p>
          <p>You must change your password within four weeks of starting, and then once every four months after that. The easiest way to change your password is online at:<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/password/login.aspx"> www.essex.ac.uk/welcome/password</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Get IT help</h2>
          <p>Visit the IT Services website for helpful information, including how-to guides, answers to frequently asked questions, and links to video screencasts.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/"> www.essex.ac.uk/welcome/it</a></p>
          <p>If you  need IT support, our friendly staff are at the Info Point on floor 2 of The Forum, Monday to Friday 9am-5pm.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> it.southend@essex.ac.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> +44 (0)1702 328341</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Wi-fi on campus</h2>
          <p>Our campus wi-fi network is called eduroam. It’s free to use and you can connect to it with your Essex email address and password. For help setting up your device go to:<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/network/wifi/"> www.essex.ac.uk/welcome/wifi</a></p>
          <BasicSegment style={{height:"60px"}}>
              <Button onClick={this.onClick.bind(this,"study_four_southend_back")}>Back</Button>
              <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
              <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"tech_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechPageSouthend;
