var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var SportsPageTwoSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Sport and more</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Southend Leisure and Tennis Centre at Garon Park hosts sports classes including swimming, basketball and tennis. Free transport is available at specific times. Check with your Students’ Union for details.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.southend-leisure.com/centre/southend-swimming-and-diving-centre/</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Clubs and societies</h2>
          <p>Clubs and Societies at Southend Campus are growing all the time. Our sports teams compete in British Universities & Colleges Sport (BUCS) competitions, as well as just for fun. Whatever you’re into, we’re confident that there will be a society that’s perfect for you. And if there isn’t, you can set one up.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essexstudent.com/southend/societies/</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"sports_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}}  onClick={this.onClick.bind(this,"culture")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = SportsPageTwoSouthend;
