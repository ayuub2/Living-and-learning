var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EatPageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Banks on campus</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Lloyds TSB bank – Square 3, with ATM
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Santander bank – Square 4, with ATM</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Nearby Towns</h2>
          <p>Colchester town centre is around two miles away from our Colchester Campus, and offers a full range of shops for food, books, music and clothes, plus a good range of places to eat and socialise. Wivenhoe is a smaller town, situated about a mile away that has a small number of pubs, restaurants and shops in a riverside location.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.visitcolchester.com</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"eat_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"green")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EatPageThree;
