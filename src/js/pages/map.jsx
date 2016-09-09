var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MapsPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Maps</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>There are three ways to stop getting lost. First, ask someone. They may not know either, but it’s always good to say hello to someone new. Second, download the Find Your Way app – details in this guide.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Who knows what the numbers mean?</h2>
          <p>If you’re looking for a specific room, follow these rules.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>If the room number has three parts and the first is alphabetical</h2>
          <p>eg TC.1.20 then the room is in one of the outer buildings. The format is building.floor.room. The first part indicates the building - “TC” is the Teaching Centre and “LH” is the Ivor Crewe Lecture Hall. The second part tells you the floor and the third the room number. For example, LH.1.12 is Ivor Crewe Lecture Hall, floor 1, room 12.</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"around_three_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"map_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MapsPage;
