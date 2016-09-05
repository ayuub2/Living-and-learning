var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var CareerPageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>CareerHub</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Browse hundreds of top jobs and graduate vacancies, sign up to exclusive careers events, book CV reviews and one-to-one careers advice, and connect with employers on CareerHub, our online jobs portal.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/careerhub</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Work for the SU</h2>
          <p>Our Students’ Union is the first Students’ Union to be awarded the Investors in People Gold Standard. Working for the Students’ Union provides a fantastic opportunity to excel in a vibrant, professional and fast-paced environment. Take a look online for current vacancies.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.su/jobs</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Be an ambassador</h2>
          <p>Essex students know best. And it’s on that premise we invite current students to be ambassadors for our University, to help out on visit days, school talks, open days and campus tours. We recruit student ambassadors at the start of the autumn term, so keep an eye out for up-coming opportunities.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/ambassador</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Volunteer with the vTeam</h2>
          <p>The vTeam is a fantastic opportunity to meet new people, make friends, give something to the local community, and gain valuable skills.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.su/vteam</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"career_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"su")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = CareerPageThree;
