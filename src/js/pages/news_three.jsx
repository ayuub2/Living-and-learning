var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var NewsPageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Find your voice</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>We run a series of surveys to get your feedback, some of which feed into national university league tables, so speak up!
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/surveys </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Use your vote</h2>
          <p>If you’re eligible to vote in UK local and general elections, make sure you’re on the electoral register once you’ve settled into your accommodation, using your new address. Don’t miss your chance to have your say. You can join the UK electoral register online.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.gov.uk/get-on-electoral-registe</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"news_two_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"essex")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = NewsPageThree;
