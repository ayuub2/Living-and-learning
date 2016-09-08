var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var AroundPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Get around</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Get around town, go to the seaside, get out and about. There is much to explore in Essex from castles to beaches, and it’s all within easy reach</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Trains</h2>
          <p>Colchester has three stations; the main station is Colchester North Station, and the other two are Colchester Town and Hythe stations. Wivenhoe also has a railway station. Regular trains run between London Liverpool Street and Colchester North Station and the journey to London takes around an hour. Train services from Colchester North Station also run to Norwich, Ipswich, Felixstowe and Harwich.<br/>www.nationalrail.co.uk </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Buses</h2>
          <p>Local bus and taxi services connect Colchester North Station to our University. There are also frequent buses between our University and Wivenhoe, and two buses per hour to Clacton. Our main University bus stop is at Valley Road junction, near Square 1, and there are other stops for North Towers, South Courts and Meadows and Quays. Full details of travelling to and from our Colchester Campus, and further links to timetables and ticket information is online.<br/>www.essex.ac.uk/welcome/travel<br/>www.firstgroup.com/ukbus/essex</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"green")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"around_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = AroundPage;
