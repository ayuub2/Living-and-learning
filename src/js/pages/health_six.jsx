var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageSix = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Childcare</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our on-campus Day Nursery offers excellent day care to children from three months to five years and welcomes any child whether their parent or guardian is studying at our University, employed at our University, or a member of the public.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.wivenhoeparkdaynursery.co.uk</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Mature and part-time students</h2>
          <p>Mature and part time students are automatically members of our Students’ Union Mature and Part-time Students Association (MAPSA). To find out about support and guidance, including opportunities to meet other mature and part time students, check out the MAPSA website.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/mature<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> mapsa@essex.ac.uk</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Students with caring responsibilities</h2>
          <p>If you are a student who is caring for a partner, family member or friend you may need extra support. Sometimes caring responsibilities combined with the pressures of studying can affect your emotional, mental or physical health. Our student support drop-in service is there to provide advice, guidance or support:<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/carers </p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button onClick={this.onClick.bind(this,"health_five")}>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_seven")}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageSix;
