var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var CulturePage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Cultural Essex</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Live shows, exhibitions, free creative workshops and more; all on your doorstep. Enjoy a kaleidoscope of arts events throughout the year. Getting involved and trying something new is what the Essex Spirit is all about. </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Art is life</h2>
          <p>We are home to a renowned art gallery, Art Exchange, which hosts regular exhibitions from international artists and holds free workshops in all kinds of arts practices, plus we own an internationally important collection of Latin American art called ESCALA.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.artexchange.org.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.escala.org.uk</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>All the world’s a stage</h2>
          <p>Our Lakeside Theatre offers a full programme of professional and student productions alongside brilliant open mic nights and live music. Students at Colchester should also check out shows by East 15 Acting School students at our Southend and Loughton Campuses.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.lakesidetheatre.org.uk
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.east15.ac.uk/productions.asp </p>
          <BasicSegment style={{height:"60px"}}>
            <Button  onClick={this.onClick.bind(this,"sports_three")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"culture_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = CulturePage;
