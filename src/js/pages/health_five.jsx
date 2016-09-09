var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageFive = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Health matters</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>If you’re studying on a course for more than six months, you’re required to register with a local doctor. Our Colchester Campus has its own health centre or you can use the NHS Choices postcode finder to find your nearest doctor.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.rowhedgesurgery.co.uk/"> www.rowhedgesurgery.co.uk</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.nhs.uk/pages/home.aspx"> www.nhs.uk</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>About meningitis</h2>
          <p>You’re going to be living communally and meeting new people from all over the world. Whatever your age, you should be vaccinated against meningitis before coming to university. Please speak to your doctor and get immunised as soon as possible. The vaccination is free and won’t make you unwell.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/health-and-wellbeing/illness.aspx"> www.essex.ac.uk/welcome/illness</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Alcohol and drugs on campus</h2>
          <p>University life is about discovering new social opportunities, some may involve alcohol, and many won’t. We encourage students to act responsibly when using alcohol and acknowledge that using illegal drugs on our campuses is not permitted. Our wellbeing team offers confidential, on-campus support if you have concerns about alcohol or drug use. Meanwhile, get the facts.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/health-and-wellbeing/alcoh"> www.essex.ac.uk/welcome/alcohol-drugs </a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_four")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_six")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageFive;
