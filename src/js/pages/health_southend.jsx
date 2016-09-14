var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Staying healthy and happy</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>You’re surrounded by new people and friends. You’re juggling things like essay deadlines, a busy social life, and setting aside enough study time to prepare for exams. With so much to do, it’s fair to say student life isn’t always easy. That’s why we’re here to support you throughout your time at Essex. All you have to do is ask. </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Student Services Hub</h2>
          <p>If you need practical advice, a confidential conversation, or general information and guidance on University life, no matter what the issue is, the Student Services Hub, on the second floor of The Forum, is the place to go. The Hub, home to Student Administration, Income, and Student Support, is normally open from 10am to 4pm, during term time.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/hub </p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Student Administration</h2>
          <p>We’ll guide you through your registration, be here to oversee your exams, undertake your DBS checks, and be on hand when you need official documents during your education.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> askthehub-sc@essex.ac.uk 
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328444</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"tech_four_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageSouthend;
