var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechFourPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Printing and scanning</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Printing and scanning is available in all our computer labs and near our group study pods. Printing isn’t free, so you’ll need to top up your account with print credits which can be bought online or at a kiosk. You can photocopy in the Library and Silberrad Student Centre. www.essex.ac.uk/welcome/printing</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Sign-up for news</h2>
          <p>When you start you’ll be added to a number of University email lists. We’ll use these to send you important information about your course. You’ll also be subscribed to a small number of opt-out lists, used to send useful information, and, while some of this may be about events, marketing or other opportunities, we try to avoid sending too much. You can also join lists to find others who share your interests, thoughts and passions. www.essex.ac.uk/welcome/news</p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechFourPage;
