var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePageSouthend = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Welcome Home</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Southend-on-Sea stretches along seven miles of award-winning coastline, famous for its beach resort and pier. Our Southend Campus is part of a vibrant town centre and all of our accommodation is within walking distance of The Forum, The Gateway Building and our Clifftown Theatre and Studios. You’ll be sharing your new home with people from all over the world, so there are plenty of opportunities for you to make lots of new friends. </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>The Forum </h2>
          <p>The Forum offers library space, a state-of-the-art 200-seater lecture theatre, and a dedicated Learning Hub, alongside open study spaces. The Students’ Union offices, the Learning Hub and Student Services are also based here.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/theforum"> www.essex.ac.uk/welcome/theforum</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>The Gateway Building</h2>
          <p>The Gateway Building has bright and airy teaching and study spaces, plus a Business Hub. Here, you’ll find, Essex Business School, our School of Health and Human Sciences, East 15 Acting School and The Centre for Psychoanalytic Studies.</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"su_four_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"welcome_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePageSouthend;
