var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechPageThreeSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Computer Labs</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our IT labs are the perfect place to study or work.
          The Learning Hub on the second floor of The Forum features an open study space with forty-two PCs, with islands of computers and seating, six group working pods with an interactive projector, a quiet reading space with six PCs and power points for charging laptops, and a separate media space providing three Mac suites.
          At the Gateway Building, IT Lab 1 (room GB.3.53) has forty PCs; this can sometimes be used as a teaching area so please check information on the door before entering. IT Lab 2 (room GB.2.34) has ten PCs and this floor also has two group working pods. In addition, the student common room has three PCs for drop in use.
          Clifftown Studios has six PCs, located in seminar room J on the ground floor. Touchdown points are also scattered throughout The Gateway Building and The Forum.
          You can scan, copy and print your work from the Info Point, open study space, student common room and seminar room J. Large capacity printers are located in IT Lab 1 & 2. For computer lab locations, opening hours and real- time availability visit: <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/it/services/computers-and-software/default.aspx"> www.essex.ac.uk/welcome/computers</a></p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Saving your work</h2>
          <p>As part of your Office 365 email account you get 1Tb of cloud storage space for all your documents with OneDrive. OneDrive lets you create, edit, and share documents online. You also get at least 300 MB of local storage, known as your M: drive. You can access this by going to ‘My Documents’ on any lab computer.</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"tech_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"tech_four_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechPageThreeSouthend;
