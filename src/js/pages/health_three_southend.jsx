var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageThreeSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Dignity and respect</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>We are Essex. We encourage a culture of dignity and respect. We’re committed to upholding an environment that’s free from any form of harassment or bullying. Though rare, these incidents can occur and if they do our network of trained harassment advisors are on hand to help.<a href="http://www.essex.ac.uk/equality/"> www.essex.ac.uk/welcome/equality</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Staying safe</h2>
          <p>Stay safe, stay happy. Follow some common- sense tips whether you’re living on or off campus.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Avoid walking or cycling alone in isolated areas or unlit or poorly lit footpaths.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Arrange to walk with others at night and keep to well-lit streets – avoid shortcuts
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Lock your room when you leave and don’t let strangers in to your building
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Don’t use ATMs if anyone suspicious is hanging around
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Don’t carry large sums of money around, or store large sums in your room – use banking facilities
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Get a personal alarm, available at SU Advice Centre, Information Centre and Nightline
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/point.jpg"/> Be vigilant and report anything suspicious to our security staff on 328508 or, if off campus, the local police, by calling 101 and 999 in an emergency
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/> www.essex.ac.uk/welcome/safe</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"health_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_four_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageThreeSouthend;
