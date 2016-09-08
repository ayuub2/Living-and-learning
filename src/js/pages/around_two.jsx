var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var AroundPageTwo = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>On your bike</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>We’ve got excellent facilities for cyclists and cycling onto campus is easy from Colchester and Wivenhoe. There’s plenty of bicycle parking on campus, along with cycle routes off Boundary Road and Valley Road which let you park your bike at either end of campus.<br/>www.essex.ac.uk/welcome/travel</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Taxis</h2>
          <p>There are taxi pick-up and drop-off points on both the north and south sides of campus.<br/>www.essex.ac.uk/welcome/travel</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Accessible travel</h2>
          <p>From a useful campus access map to further information about accessible car parking spaces, visit our website for information on accessible travel.<br/>www.essex.ac.uk/welcome/access-travel <br/>disab@essex.ac.uk</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Cars, and how to share them </h2>
          <p> you drive onto our Colchester Campus, be aware that you’ll need to display a valid Pay and Display ticket inside your car when you’re parking. Unfortunately if you fail to do so you may receive a parking fine. Students living off-campus caIfn register to get reduced rates. Further information is online. Our University has a popular and growing car sharing scheme, which saves on fuel and money and eases parking issues on campus.<br/>www.essex.ac.uk/welcome/</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"around")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"around_three")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = AroundPageTwo;
