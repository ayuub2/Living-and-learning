var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var SportsPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Sports at Essex</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Into competitive sport, or just fancy knocking a tennis ball around with a few friends? Sport at Essex welcomes everyone.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>My Essex free sport</h2>
          <p>A wide range of sport sessions are available to student members free of charge. This is your chance to stay healthy, enjoy new experiences and make new friends – at no extra cost. Just Play sessions are also free, and membership of sports clubs, travel costs and match fees for the British Universities and Colleges Sports association are also included. To enrol on My Essex Sport, visit the Sports Centre to activate your card.<br/>www.essex.ac.uk/welcome/sport</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Just Play</h2>
          <p>Have a go at something new. Our social sport programme, Just Play, lets you play alongside students, staff and members of the public in informal, friendly sporting activities throughout the year, on weekday lunchtimes and evenings.<br/>www.essex.ac.uk/welcome/justplay<br/>www.facebook.com/justplayessex<br/>@justplayessex</p>
          <BasicSegment style={{height:"60px"}}>
            <Button  onClick={this.onClick.bind(this,"welcome_four")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"sports_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = SportsPage;
