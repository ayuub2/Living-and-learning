var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var GreenPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Green space</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Wivenhoe Park has a fascinating history. Today, its striking landscape of more than 200 acres provides a tranquil place for all to enjoy, including protected wildlife species like ducks and geese</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Famous history</h2>
          <p>For several centuries this was the home of the Rebow family, descendants of Flemish cloth weavers from Colchester – England’s oldest recorded town. Wivenhoe House was designed for Isaac Rebow in 1759 by Thomas Reynolds, and the parkland was designed by Richard Woods. Wivenhoe House was used for teaching, offices and social space when the University opened in 1964 and today it’s home to our Edge Hotel School.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.wivenhoehouse.co.uk/"> www.wivenhoehouse.co.uk</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Park life</h2>
          <p>In the vast area of parkland to the south side of campus you’ll find 40 acres of sports fields, two lakes and BBQ area, a disc golf course and the Vice Chancellor’s Lakeside House. It’s also home to many species of wildlife. Our University Campus Garden offers allotments to volunteers who wish to grow seasonal produce. It’s managed by a volunteer group of staff and students as a co-operative enterprise and anyone is welcome to join.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="https://www.facebook.com/CampusFarm"> www.facebook.com/CampusFarm</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"eat_three_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"around")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = GreenPage;
