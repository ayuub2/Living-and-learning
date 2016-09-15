var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageSixSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Mature and part-time students</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Mature and part time students are automatically members of our Students’ Union Mature and Part-time Students Association (MAPSA). To find out about support and guidance, including opportunities to meet other mature and part time students, check out the MAPSA website.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/groups/mature-students.aspx"> www.essex.ac.uk/welcome/mature</a><br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> mapsa@essex.ac.uk</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Students with caring responsibilities</h2>
          <p>If you are a student who is caring for a partner, family member or friend you may need extra support. Sometimes caring responsibilities combined with the pressures of studying can affect your emotional, mental or physical health. Our student support advisers are there to provide advice, guidance or support:
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/groups/carers.aspx"> www.essex.ac.uk/welcome/carers</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Council Tax</h2>
          <p>Most full-time students are exempt from Council Tax. If you’re a student living in University accommodation at our Southend Campus, you’ll automatically be exempt. If you’re not in student accommodation, you can order a council tax exemption certificate from Student Services, using our online Student Documentation Ordering System.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/students/groups/carers.aspx"> www.essex.ac.uk/welcome/carers</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/accommodation"> www.essex.ac.uk/welcome/accommodation</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/studentdocs"> www.essex.ac.uk/welcome/studentdocs</a>
          </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_five_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_seven_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageSixSouthend;
