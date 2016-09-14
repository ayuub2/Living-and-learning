var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechPageFourSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
        <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Sign-up for news</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>When you start you’ll be added to a number of University email lists. We’ll use these to send you important information about your course. You’ll also be subscribed to a small number of opt-out lists, used to send useful information, and, while some of this may be about events, marketing or other opportunities, we try to avoid sending too much. You can also join lists to find others who share your interests, thoughts and passions.<br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="https://www.essex.ac.uk/it/groups-lists/"> www.essex.ac.uk/welcome/news</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"tech_three_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechPageFourSouthend;
