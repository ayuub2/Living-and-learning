var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPageFour = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Pocket Essex app</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Pocket Essex is our official mobile app for students. It gives you instant access to lots of useful information such as computer availability, timetables, library loans, voting polls, our ‘What’s on?’ calendar and much more. Search for Pocket Essex on your app store.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/pocketessex/"> www.essex.ac.uk/welcome/pocketessex</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>MyEssex</h2>
          <p>MyEssex is our student portal that you used during your application process. Once you’ve registered you can use it to update your personal details and as a quick reference guide to other handy webpages.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/myessex/"> www.essex.ac.uk/welcome/myessex</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Count me in</h2>
          <p>Record your attendance at teaching events using the electronic reader in the teaching room. Just ‘tap in’ to your lectures using your registration card.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/course-admin/attendance.aspx"> www.essex.ac.uk/welcome/countmein</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Talk to the world</h2>
          <p>Learn a language at Essex to increase your global and cultural awareness. Language learning can give you the confidence to work and travel internationally, expand your options for studying abroad, and get a competitive edge when you’re looking for a job. There are a number of ways to do it, so look online to discover the best option for you.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/study/why/languages.aspx"> www.essex.ac.uk/welcome/languages</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"study_three_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"tech_one")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPageFour;
