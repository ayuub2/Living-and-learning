var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var CareerPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Future career starts here</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Start preparing for your future today. Seriously, the time will fly by. We’re here to help you boost your skills and get the experience needed to make your CV shine.</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Employability and Careers Centre</h2>
          <p>Our careers specialists can give you valuable advice throughout your time at Essex and beyond. We offer one-to-one advice and guidance, job-hunting workshops, CV and job application reviews, and online access to graduate and part-time job vacancies.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/careers/"> www.essex.ac.uk/welcome/careers</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Big Essex Award</h2>
          <p>Stand out from the crowd and get University recognition for all your extra- curricular experience, with the Big Essex Award. Our employability award will help you identify and sell your skills and experience to employers.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/careers/www.essex.ac.uk/welcome/bige"> www.essex.ac.uk/welcome/bige</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>HEAR</h2>
          <p>When you leave us, you’ll receive a Higher Education Achievement Report, or ‘HEAR’. Your HEAR will be nationally recognised by employers and other universities and will present a complete picture of your time at Essex, from extra-curricular achievements to academic results. Take a look at our website to find out how to make the most of your HEAR.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/careers/www.essex.ac.uk/welcome/bige"> www.essex.ac.uk/welcome/hear</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_eight_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"career_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = CareerPage;
