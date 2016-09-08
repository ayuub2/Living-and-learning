var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EatPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Where to buy</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Print Essex – ground floor below Square 2 ¢ Market stalls every Thursday – Square 3
          <br/>The Salon – off Square 3
          <br/>The Burrow – Square 3
          <br/>Post Office – Square 4
          <br/>The SU Store – Square 4
          <br/>Copy Centre – Square 4
          <br/>Everything Essex – Square 4
          <br/>IT Helpdesk – off Square 4
          <br/>Waterstones Bookshop – Square 5
          <br/>Launderette – in the Hexagon Building (for North Campus)
          <br/>South Campus launderette – in Harwich Court<br/>Meadows launderette – in Pavilion building<br/>Quays launderette – in Mathews Quay
          <br/>Tesco supermarket – off the A133, 20 minute walk
          <br/>Aldi supermarket – Magdalen Street, Colchester town centre
          <br/>Asda supermarket – Turner Rise, near Colchester North station
          <br/>Waitrose supermarket – on the A133, 30-minute walk
          <br/>Sainsbury’s – Priory Walk, Colchester town centre</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"eat")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"eat_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EatPageTwo;
