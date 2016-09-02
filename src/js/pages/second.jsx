var React = require("-aek/react");
var Page = require("-components/page");
var {Segment} = require("-components/segment");
var Button = require("-components/button");
var {AekReactRouter} = require("-components/router");
var {CBox,VBox} = require("@ombiel/aek-lib/react/components/layout");

var router = new AekReactRouter();

var SecondPage = React.createClass({
  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <Segment style={{padding:"0px", margin:"0px", height:"100%", width:"100%"}}>
          <Button style={{position:"relative",padding:"0px", bottom:"0px", margin:"0px",height:"100%", width:"100%"}} onClick={this.onClick.bind(this,"content")}>
            <img style={{position:"relative", display:"block", height:"100%", width:"100%"}} src="http://www.essex.ac.uk/campusm/edits/second-home-page/background.jpg">
              <VBox>
                <CBox>
                  <img style={{display:"block"}} src="http://www.essex.ac.uk/campusm/edits/second-home-page/house-image.jpg" height="25%" width="100%"/>
                  <h1 style={{color:"black", fontWeight:"bolder", fontSize:"300%", fontFamily:"Helvetica"}}>WELCOME HOME</h1>
                  <p style={{fontWeight:"bolder", fontSize:"100%", fontFamily:"Helvetica", color:"white", textTransform:"uppercase"}}>Your new home is a place of wonderful<br/> contrasts. Set in acres of rolling parkland,<br/> and built in the architectural style of 1960s<br/> Brutalism. Welcome to our Essex. Welcome<br/> to our incredible community.  Welcome home. </p>
                  <h2 style={{color:"black", fontWeight:"normal", fontSize:"200%", fontFamily:"Helvetica"}}>So now what?</h2>
                  <p style={{fontWeight:"normal", fontSize:"80%", fontFamily:"Helvetica", color:"white"}}>It’s time to get your head around all the help, guidance and advice<br/> that’s on campus – with one aim in mind: that you get the degree<br/> that we know you’re capable of getting. </p>
                  <p style={{fontWeight:"normal", fontSize:"80%", fontFamily:"Helvetica", color:"white"}}>Because, what you learn now will prepare you for the best<br/> experience any student could wish for.</p>
                  <p style={{fontWeight:"normal", fontSize:"80%", fontFamily:"Helvetica", color:"white"}}>But you’re not just any student. You’re an Essex student.<br/> That means it’s your turn to keep the Essex Spirit alive – as<br/> thousands of Essex students have since 1964.</p>
                  <h2 style={{color:"black", fontWeight:"normal", fontSize:"200%", fontFamily:"Helvetica"}}>Lets get started...</h2>
                </CBox>
              </VBox>
            </img>
          </Button>
        </Segment>
      </Page>
    );
  }
});

module.exports = SecondPage;
