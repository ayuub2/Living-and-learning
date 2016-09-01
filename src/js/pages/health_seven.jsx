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
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Council Tax</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Most full-time students are exempt from Council Tax. If you’re a student living in University accommodation at our Colchester Campus, you’ll automatically be exempt. If you’re living within the area covered by Colchester Borough Council, then the University will notify the council of your student status and you can apply online for exemption. If you’re living in other areas, then you’ll need to obtain a council tax exemption certificate from the student information team, at the Student Services Hub - and apply to your local council.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/accommodation </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Electrical safety</h2>
          <p>Your safety is our priority and to keep you safe from fire and electric shock, we have rules on the use of certain electrical items. Please read our electrical safety guidance online.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/electricalsafety </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Our security patrol officers</h2>
          <p>Our University patrol officers are based on Square 3 in the Information Centre. They’re here to help you 24/7, 365 days a year. A friendly, approachable team, they’re always willing to assist and all are first aiders. Contact them externally on telephone: 01206 872125 or from accommodation StudentCom PC phone: 224 2125</p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button onClick={this.onClick.bind(this,"health_six")}>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_eight")}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageSeven;
