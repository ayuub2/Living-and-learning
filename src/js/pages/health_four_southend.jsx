var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageFourSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Income</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>If you need to pay your tuition fees or rent, we’re the people to see. We’ll also help you out with any finance queries you might have.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/webpay"> www.essex.ac.uk/webpay</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/>southinc@essex.ac.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328218</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Student Support</h2>
          <p>We’re here for you if you need emotional support, welfare or funding advice, as well as providing guidance on health and wellbeing. We also offer a comprehensive disability service. You can access general support information and guidance at the Hub counter during normal opening hours or book in to see an adviser to discuss confidential or complex matters. Take a look at our webpages or drop us an email for further information.
          <br/><img height="12px" width="12px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/students/disability/"> www.essex.ac.uk/students/disability</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> support-sc@essex.ac.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328351</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Fire safety</h2>
          <p>Remember three important things to stay safe in the event of a fire: shout out, get out, stay out. Please read the emergency evacuation notice in your accommodation, work or study location for fire safety procedures. If you have a permanent or temporary disability that may mean you have difficulty in evacuating one or more areas, you can arrange for a Personal Emergency Evacuation Plan (PEEP).
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/campus/emergency.aspx"> www.essex.ac.uk/welcome/emergency</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/health-safety/fire/peep.aspx"> www.essex.ac.uk/welcome/peep</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_three_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_five_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageFourSouthend;
