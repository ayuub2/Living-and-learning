var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MapsPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Maps</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>There are three ways to stop getting lost. First, ask someone. They may not know either, but it’s always good to say hello to someone new. Second, download the Find Your Way app – details in this guide. Third, use these maps and explore. We have a simple room numbering system: letters denote the building and the first number tells you the floor. So TF.2.14 is located in The Forum on the second floor.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Campus map</h2>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/map"> www.essex.ac.uk/welcome/map</a>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"eat_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"news_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MapsPageSouthend;
