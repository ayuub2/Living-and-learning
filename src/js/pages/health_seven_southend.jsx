var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageSeven = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Electrical safety</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Most full-time students are exempt from Council Tax. If you’re a student living in University accommodation at our Colchester Campus, you’ll automatically be exempt. If you’re living within the area covered by Colchester Borough Council, then the University will notify the council of your student status and you can apply online for exemption. If you’re living in other areas, then you’ll need to obtain a council tax exemption certificate from the student information team, at the Student Services Hub - and apply to your local council.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/accommodation/"> www.essex.ac.uk/welcome/accommodation</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Our security officers</h2>
          <p>You’ll find our security staff in University Square, The Forum and The Gateway Building. They’re here to help you 24/7, 365 days a year. A friendly, approachable team, they’re always willing to assist and all are first aiders.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 07827 988085 (University Square)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328408 (University Square)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328508 (The Forum)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328208 (The Gateway Building)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328325 (Clifftown Studios)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328326 (Clifftown Studios)</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Emergencies</h2>
          <p>In an emergency, please contact security. Our security staff will contact the emergency services and make sure they get to the right place. In the event of sudden illness or collapse, call 999 directly then inform security.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/emergencies.aspx"> www.essex.ac.uk/welcome/emergencies</a>
          </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_six_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_eight")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageSeven;
