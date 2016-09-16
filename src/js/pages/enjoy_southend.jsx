var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EnjoySouthend = React.createClass({

  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Enjoy yourself</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>With seven miles of coastline, Southend offers leisure activities aplenty. Getting involved and trying something new is what the Essex Spirit is all about.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Cultural Southend</h2>
          <p>Southend is a town that thrives on culture, is home to a museum, planetarium, art gallery, several theatres and an eight-screen cinema – there is plenty to see and do! Southend also has a great live music scene with venues hosting a mix of traditional and alternative music.
          <p>The town holds many special events throughout the year, including Southend Carnival, a Film Festival in April/May, the Leigh Folk Festival in June and a sailing regatta in September. In the build up to Christmas you’ll also find festive markets along the High Street.</p>
          <img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://http://www.visitsouthend.co.uk/"> www.visitsouthend.co.uk/</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Take the town trail</h2>
          <p>To get started, you might like to take our town trail which includes some useful shops to know about, some places to relax and watch the world go by, some historical landmarks, and some key local facilities that you might want to use.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/welcome/trail"> www.essex.ac.uk/welcome/trail</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Nightlife</h2>
          <p>Our Students’ Union takes advantage of our town centre location by working with local businesses to pinpoint the best events and deals on offer. There’s also a wide variety of night clubs, live bands in local pubs, sporting events, and a local cinema to name but a few.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/arrow.jpg"/><a href="http://www.essex.ac.uk/careers/www.essex.ac.uk/welcome/bige"> www.essex.ac.uk/welcome/hear</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"sports_two_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"enjoy_two_southend")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EnjoySouthend;
