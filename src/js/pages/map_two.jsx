var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var MapsPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>If the number has three parts and the first contains numbers and letters</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", height:"525px"}}>
          <p>eg 5N.7.16, then the room is in square 4 or 5 (we didn’t say this would be easy). The format is entrance.floor.room. The first part tells you the square and corner (eg 4S is the south corner of square 4), which matches the labels on the entrances (eg door 4NW is next to The Store). The second part is the floor and the third part the room. For example, 5NW.6.12 is in the north-west (NW) corner of Square 5 (entrance “5NW”), floor 6, room 12.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>If the number has two elements and the second element has three digits</h2>
          <p>eg 4.722, the room is in the Maths/Social Studies/Rab Butler/Square 1 building area. The first number shows the floor and the last three digits show the room number.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Also…</h2>
          <p>If the last three digits are 700-799 the room is off Square 1, and if the last three digits are 500- 599 the room is in the Square 2 area (Computer Science). For example, 5.512 is room 512, floor 5. See? Easy! </p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"map")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"news")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = MapsPageTwo;
