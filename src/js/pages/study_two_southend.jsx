var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPageTwoSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>The Forum Library</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our library offers more than 140,000 books, with access to over 65,000 e-books and 33,000 e-journals online. With silent and group study spaces, and networked PCs, it’s a fantastic environment for you to work in. It’s open 8am to 10pm Monday to Friday, 8am to 7pm Saturday and 11am to 5pm Sunday. You can also access all materials at our Albert Sloman Library, Colchester Campus - and your library card gives you access to all public libraries in Essex.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/forumlibrary
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> gbennett@essex.ac.uk</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Peer Mentoring</h2>
          <p>Whether you’re an undergraduate or postgraduate student, you can have a peer mentor – a fellow student who can answer your questions about life at university and help you settle in.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> peermentor@essex.ac.uk (Undergraduate students)<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> pgmentor@essex.ac.uk (Postgraduate students)<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/study-resources/mentoring/default.aspx"> www.essex.ac.uk/welcome/mentoring</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Timetables</h2>
          <p>Once you’ve chosen all your modules and they’ve been confirmed, they’ll appear on your personal timetable. You can see your timetable online – just login with your Essex username and password. If you’re at East 15 your timetable will be provided by your School.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/course-admin/timetables.aspx"> www.essex.ac.uk/welcome/timetable</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Module enrolment</h2>
          <p>You can select your optional module choices for your course via eNROL<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/enrol/home/home_phase1.asp"> www.essex.ac.uk/welcome/enrol</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"study_southendBack")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button  onClick={this.onClick.bind(this,"study_three_southend")} style={{position:"absolute", right:"0px"}}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPageTwoSouthend;
