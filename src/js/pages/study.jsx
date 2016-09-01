var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var StudyPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Your Studies</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>You’re here for an excellent education, based on research-led teaching by our leading academics. You’re also on a journey of personal development. We’ll support you in demonstrating your full potential, in questioning why and not just how. You’re here to get the knowledge you need to equip you for life as an Essex graduate, and it all starts with your subject.</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Your home department</h2>
          <p>We have 25 academic departments centres and schools, within three faculties – Humanities, Social Sciences, and Science and Health. Each is responsible for teaching and research within a defined subject area, and there are also academic centres conducting teaching and research on a smaller scale.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/depts</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Personal tutors</h2>
          <p>As an undergraduate or taught postgraduate student you’ll have a personal tutor who you’ll meet soon after you arrive. If you’re a postgraduate research student your research supervisor will take on this role. Your personal tutor helps you connect with your department, school or centre; they’re someone you can talk to if you have questions about your course or encounter any difficulties that affect your studies.<br/>
          <img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/tutor </p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button onClick={this.onClick.bind(this,"study_two")} style={{position:"absolute", right:"0px"}}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPage;
