var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var SportsPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Sports at Essex</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Into competitive sport, or just fancy kicking a ball around with a few friends? Sport at Essex welcomes everyone.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Evolve Gym</h2>
          <p>Packed with state-of-the-art equipment and based at University Square, Evolve makes it easy to help you get fitter. Prices are very competitive and great value, and classes run every weekday and come free with membership.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/sport/facilities/colchester.aspx"> www.essex.ac.uk/sport/facilities/colchester</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Just Play</h2>
          <p>Have a go at something new. Our social sport programme, Just Play, lets you play alongside students, staff and members of the public in informal, friendly sporting activities throughout the year, on weekday lunchtimes and evenings.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/sport/about/just-play.aspx"> www.essex.ac.uk/welcome/justplay</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="http://www.facebook.com/justplayessex"> www.facebook.com/justplayessex</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/twitter.jpg"/> @JustPlaySou</p>
          <BasicSegment style={{height:"60px"}}>
            <Button  onClick={this.onClick.bind(this,"welcome_four_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"sports_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = SportsPageSouthend;
