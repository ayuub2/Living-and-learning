var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var NewsPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Student webpages </h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Featuring a wealth of student information. Make this your homepage. Forever, if you like.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/students/"> www.essex.ac.uk/welcome/students </a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>What’s on?</h2>
          <p>Our ‘What’s on?’ calendar brings together all the events happening across our three campuses, so you can make the most of your time at Essex.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/events/">www.essex.ac.uk/welcome/events </a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Rebel</h2>
          <p>Rebel is a creative community that is available to all students at Essex. If you are interested in journalism, video, TV, radio, photography, design or any form of creativity, come and find us in the SU Creative Studios in the Silberrad Student Centre, or find out more online.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="https://www.essexstudent.com/"> www.essexstudent.com</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"news_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"news_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = NewsPageTwo;
