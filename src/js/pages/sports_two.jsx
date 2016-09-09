var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var SportsPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Evolve Gym</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our first class Evolve Gym is designed to inspire and motivate you to keep fit. There’s a choice of annual memberships available to suit your needs and personal training is also available for an additional fee.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/gym </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Clubs and societies</h2>
          <p>There are more than 150 sports clubs and societies for you to choose from at Essex, run by our Students’ Union. Sports clubs cover everything from football to mountaineering and our societies guild offers you a ready-made network of like- minded students. Whatever you’re into, we’re confident that there will be a society that’s perfect for you. And if there isn’t, you can set one up.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essexstudent.com/societies</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Essex Blades for competitors</h2>
          <p>Our sports teams compete in a variety of local, regional and national competitions, including British Universities & Colleges Sport (BUCS) competitions, as well as just for fun. There are more than 50 sports clubs that are free for you to join.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/blades</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"sports")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"sports_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = SportsPageTwo;
