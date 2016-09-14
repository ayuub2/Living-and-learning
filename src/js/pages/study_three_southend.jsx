var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPageThreeSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Develop your talent</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Unleash your potential and visit our Talent Development Centre, delivering workshops, 1:1 sessions and weekly classes on study planning, time management, essay planning and writing, reading, researching and referencing skills, English language support for International students, and many other study-related topics. Find us in TF.2.19 on the second floor of The Forum.<br/><a href="http://www.essex.ac.uk/students/study-resources/tdc/"><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/tdc</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Moodle</h2>
          <p>Moodle is our online learning environment. It lets you get to course materials, and has smart features to enhance your learning, including discussion forums, chat facilities, quizzes, surveys, glossaries and wikis.<br/><a href="https://moodle.essex.ac.uk/"><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/moodle</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>FASER</h2>
          <p>You can use FASER to submit your coursework online, produce a watermarked copy of your work and receive feedback all in one place.<br/><a href="https://www.essex.ac.uk/e-learning/tools/faser/account/login.aspx?ReturnUrl=%2fe-learning%2ftools%2ffaser"><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/faser</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Listen Again</h2>
          <p>Did you miss something? Our Listen Again service lets you listen to lectures again (see what we did there?) so you don’t miss a thing.<br/><a href="http://listenagain.essex.ac.uk/"><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/listenagain</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Find your way around campus</h2>
          <p>Find Your Way is our interactive campus map app. Download it to help you find any location on campus and get directions quickly and easily. There’s also a handy web version.<br/><a href="http://findyourway.essex.ac.uk/"><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/findyourway</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"study_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"study_four_southend")}>Next</Button>
          </BasicSegment>
      </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPageThreeSouthend;
