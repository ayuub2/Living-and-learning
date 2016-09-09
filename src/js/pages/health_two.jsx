var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageTwo = React.createClass({

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
          <p>Our SU advice centre offers free, confidential, independent and impartial advice on any issue that might be affecting you. Our friendly, trained staff are on hand to support you throughout your time at Essex.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essexstudent.com/advice/"> www.essex.su/advice</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> suadvice@essex.ac.uk
          <br/><img height="13px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/telephone.jpg"/> 01206 874034</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>International students</h2>
          <p>As well as all the advice and support that’s available to you on-campus, you’ll find everything you need to know about pre-arrival guidance, visas, useful information on living in the UK, and additional information and support on our website.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/new/international/default.aspx"> www.essex.ac.uk/welcome/international</a><br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/immigration/enquiry/"> www.essex.ac.uk/welcome/immigration</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Nightline</h2>
          <p>Established at Essex in 1970, Nightline is a friendly help and support service run by students, for students. We work under strict confidentiality, ensuring complete anonymity, and we’re always willing to listen. From tea and toast to campbeds, whether you’re waiting for a taxi, need a revision break, or just want to chat, pop in or call us.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/health-and-wellbeing/nightline.aspx"> www.essex.ac.uk/welcome/nightline</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button onClick={this.onClick.bind(this,"health_three")} style={{position:"absolute", right:"0px"}}>Next</Button>
            <Button onClick={this.onClick.bind(this,"health_back")} style={{display:"block"}}>Back</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageTwo;
