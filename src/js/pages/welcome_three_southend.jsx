var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePageThreeSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Our brilliant Residence Life team</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"60px", height:"525px"}}>
          <p>Our Residence Life team is here to help you settle in and support you during your time living on campus. Each residents’ assistant (RA) is assigned an area and will aim to get to know you and organise a range of social activities. Plus they can help if you’ve got any concerns or complaints. Residence Life operates outside of office hours when other University support services are closed. To contact an RA, get in touch with security on 01702 328408.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/>www.essex.ac.uk/welcome/reslife </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>What’s here?</h2>
          <p>All single study rooms have central heating, bedroom furniture, a desk and bookshelves. Each shared kitchen contains a cooker, refrigerator, freezer, microwave oven, kettle, iron, vacuum cleaner, ironing board and storage units.  </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"welcome_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"welcome_four_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePageThreeSouthend;
