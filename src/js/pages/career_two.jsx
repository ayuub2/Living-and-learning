var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var CareerPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Frontrunners</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Frontrunners is our unique placement scheme for students. We’ll give you challenging employment opportunities on campus and help you develop the skills you need to compete for the best jobs. We’ll even give you on-the-job training and pay you, too.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/frontrunners<br/><img height="13px" width="13px" src="http://www.essex.ac.uk/campusm/edits/icons/fb.jpg"/> www.facebook.com/EssexFrontrunners</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Essex interns</h2>
          <p>Essex interns create paid internships exclusively for you as an Essex student. They’re flexible too; part time during term time or full time in vacations. You can even take part up to three years after you graduate, as part of our Essex graduates support package.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/interns
          <br/><img height="13px" width="13px" src="http://www.essex.ac.uk/campusm/edits/icons/fb.jpg"/>www.facebook.com/internshipsessex
          <br/><img height="13px" width="13px" src="http://www.essex.ac.uk/campusm/edits/icons/twitter.jpg"/> @EssexInterns</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Essex abroad</h2>
          <p>Want to teach English in France? Or work in Shanghai over the summer with an internship? From Thailand to Columbia the world is your oyster, so go on and get out there.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/essexabroad </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"career")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"career_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = CareerPageTwo;
