var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
//var Button = require("-components/button");

var TechThreePage = React.createClass({

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
        <p>Our computer labs are the perfect place to study or work. Many labs stay open until late and some are open 24/7. For computer lab locations, opening hours and real-time availability visit: www.essex.ac.uk/welcome/computers </p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Group study pods</h2>
        <p>Our pods are designed for small groups who want to share and work collaboratively. In each pod you’ll find a Windows computer, projector, writeable wall surfaces and pens. You can also connect your own laptop. Pods are available on a first come, first served basis and are perfect for groups of three or more. www.essex.ac.uk/welcome/pods</p>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Saving your work</h2>
        <p>As part of your Office 365 email account you get 1Tb of cloud storage space for all your documents with OneDrive. OneDrive lets you create, edit, and share documents online. You also get at least 300 MB of local storage, known as your M: drive. You can access this by going to ‘My Documents’ on any lab computer.</p>
      </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechThreePage;