var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var AroundPageThree = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>SATNAV</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Please note that SATNAV directions to our University using our postcode can be misleading, as they will take you to the North Towers car park, not the main entrance. We recommend following roadside directional signage once you’re in Colchester or nearby.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Travel discounts</h2>
          <p>One of your biggest costs can be travel. However, many travel companies offer student discounts. Take advantage! UniCard provides discounted travel in the Colchester area offered by First Essex Buses to students and includes travel to our Colchester Campus. For cheaper rail travel, the 16-25 railcard is available via the NUS website and includes additional discounts. Find out more about cheaper student travel, and how to buy tickets online.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.essex.ac.uk/students/campus/travel.aspx"> www.essex.ac.uk/welcome/gettinghere</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Coast and country</h2>
          <p>Essex is an ancient county; with hidden historical treasures, pretty villages and beautiful coastline. Get there using local buses or trains and enjoy the view. Some suggestions: Colchester Zoo; seaside towns at Clacton, Walton, Frinton; Colchester Castle; Layer Marney Tower; Constable Country around Dedham and the River Stour; Audley End House; Hylands House in Chelmsford for V Festival.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://www.visitessex.com/"> www.visitessex.com</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"around_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"map")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = AroundPageThree;
