var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EatPageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Eat, drink, buy</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Love variety? You’ve got it at Southend Campus, with a fantastic choice of places to eat and drink – depending on what tickles your fancy.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Food and drink</h2>
          <p>Cold drinks and snacks are available in vending machines in The Gateway Building and The Forum. Both food and drink is provided by Nosh at The Forum. Our town centre location provides instant access to the High Street and surrounding area, which offers a full range of places to eat – from coffee shops and sandwich bars, to value-for- money restaurant chains.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Supermarkets</h2>
          <p>There is a ‘My Local’ supermarket on the High Street, and Tesco Express supermarket is located in Heygate Avenue – only a few minutes away. There’s also a large Sainsbury’s supermarket on London Road, just across the road from our University Square accommodation.</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"money_four_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"eat_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EatPageSouthend;
