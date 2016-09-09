var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Your address and your post</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>You can find your full postal address online and in your accommodation guide. Your address is your hall’s name, flat and room numbers followed by University of Essex, Wivenhoe Park, Colchester, Essex, CO4 3SQ. However, addresses are different for the Quays and The Meadows. Post is delivered to accommodation during the week, and some larger items or items requiring a signature may need to be collected from the University Post Room, on floor two below The Store. You can send mail to the UK, Europe or the rest of the world from our Post Office on Square 4.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/residences </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Our brilliant Residence Life team</h2>
          <p>Our Residence Life team is here to help you settle in and support you during your time living on campus. Each Residents’ Assistant (RA) is assigned an area and will aim to get to know you and organise a range of social activities. Plus they can help if you’ve got any concerns or complaints. Residence Life operates outside of office hours when other University support services are closed.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/reslife </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"welcome_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"welcome_four")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePageThree;
