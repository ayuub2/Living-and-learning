var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageTwoSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>SU Advice</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our SU advice centre offers free, confidential, independent and impartial advice on any issue that might be affecting you. Our friendly, trained staff are on hand to support you throughout your time at Essex. Open 11am–3pm  on Tuesdays and Fridays and 12pm-5pm on Thursdays. Find us above the Students’ Union Lounge.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/>www.essexstudent.com/southend/advice
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/>suacsou@essex.ac.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01702 328235</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>International students</h2>
          <p>As well as all the advice and support that’s available to you on-campus, you’ll find everything you need to know about pre-arrival guidance, visas, useful information on living in the UK, and additional information and support on our website.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/new/international/default.aspx"> www.essex.ac.uk/welcome/international</a><br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/immigration/enquiry/"> www.essex.ac.uk/welcome/immigration</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Nightline</h2>
          <p>Established at Essex in 1970, Nightline is a friendly help and support service run by students, for students, located at Colchester Campus. We work under strict confidentiality, ensuring complete anonymity, and we’re always willing to listen.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/health-and-wellbeing/nightline.aspx"> www.essex.ac.uk/welcome/nightline</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button onClick={this.onClick.bind(this,"health_three")} style={{position:"absolute", right:"0px"}}>Next</Button>
            <Button onClick={this.onClick.bind(this,"health_southend_back")} style={{display:"block"}}>Back</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageTwoSouthend;
