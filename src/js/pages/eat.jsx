var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EatPage = React.createClass({

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
          <p>Love variety? You’ve got it at Colchester Campus, with a fantastic choice of places to eat and drink, plus outlets to pick up groceries and other handy stuff, and even a salon for your nails and hair. You might never need to leave.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Where to eat and drink</h2>
          <p><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> SU Bar – Square 3
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Canteen – Square 3
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Zest Café – Square 3
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Costa – Square 3
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> The Kitchen – Square 3
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Frango’s – next to the Lecture Theatre Building
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Happy Days diner – Square 4
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Top Bar and Fusion – Square 4 (upstairs)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Blues Café – Square 4 (upstairs)
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Limehouse for snacks – off Square 4
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> Lakeside Café – Square 5
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/point.jpg"/> No. 64, our unique bus cafe – opposite the Silberrad Student Centre</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"money_four_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"eat_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EatPage;
