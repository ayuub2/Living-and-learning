var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPageFour = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Bystander project</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>At Essex, we have a culture of challenging the status quo and speaking up for what’s right. If you would like to learn how to challenge inappropriate behavior and how to report harassment, our bystander project is for you. Find out more with our Bystander Guide or email sso@essex.ac.uk.</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Hop on the safety bus</h2>
          <p>For just £1 the safety bus collects from under podia at Sub Zero and will drop you as near to your front door as possible, calling at stops in Wivenhoe, Greenstead, The Hythe and The Quays. The service runs Monday to Saturday 8.30pm to 3.30am and Sunday 8pm to 1am.<br/>www.essexstudent.com/safetybus @SUSafetyBus</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Fire safety</h2>
          <p>Remember three important things to stay safe in the event of a fire: shout out, get out, stay out. Please read the emergency evacuation notice in your accommodation, work or study location for fire safety procedures. If you have a permanent or temporary disability that may mean you have difficulty in evacuating one or more areas, you can arrange for a Personal Emergency Evacuation Plan (PEEP).<br/>www.essex.ac.uk/welcome/emergency<br/>www.essex.ac.uk/welcome/peep</p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button onClick={this.onClick.bind(this,"health_three")}>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_five")}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPageFour;
