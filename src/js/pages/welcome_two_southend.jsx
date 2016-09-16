var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePageTwoSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>New home packs</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>We want to make moving in as easy as possible, so you can order stuff before you arrive that’s delivered to your room including household essentials. Alternatively, there are several large supermarkets within a few miles of campus to stock up on household things when you get here.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.everythingessex.co.uk/Home-Packs/"> www.everythingessex.co.uk/Home-Packs/</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Clifftown Theatre and Studios</h2>
          <p>A renovated Victorian gothic church, Clifftown Theatre houses five rehearsal studios and a dynamic theatre and performance space. It hosts regular public performances by our own East 15 Acting School students. There are also workshops, summer schools, community events and professional touring productions. Students are able to attend productions at reduced prices.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.clifftowntheatre.co.uk/"> www.clifftowntheatre.co.uk</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Reserve your room</h2>
          <p>You may already have reserved your University- provided accommodation, but if you haven’t, and you’re thinking about living at University Square, there may be some availability. With more than 500 ensuite single study bedrooms and studio rooms, University Square is just minutes from Southend town centre and all its facilities - everything is on your doorstep.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/universitysquare/"> www.essex.ac.uk/welcome/universitysquare</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="http://www.facebook.com/UniSquare"> www.facebook.com/UniSquare</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"welcome_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"welcome_three_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePageTwoSouthend;
