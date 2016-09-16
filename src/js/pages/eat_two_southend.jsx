var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EatPageTwoSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Banks</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Southend has all the major UK banks, including HSBC, NatWest, Lloyds TSB, Barclays and The Cooperative, each with an ATM (cash point machine) along Southend High Street. These ATMs will take cards from all the major providers.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Shopping</h2>
          <p>If you love shopping, then as well as the High Street stores Southend offers you’ll find some larger shopping centres not far away. These include intu Lakeside at Grays, Westfield in Stratford, East London and the Eastgate Shopping Centre at Basildon.</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"eat_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"eat_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EatPageTwoSouthend;
