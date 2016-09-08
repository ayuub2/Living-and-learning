var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var EssexPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Essex is for life</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Your time will fly by. But Essex is forever, not just for a few years, and you’ll be part of this place for life.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Get the card</h2>
          <p>When you graduate, you’ll get an alumni card, which gets you access to all alumni events, like our popular Sports Weekend, and allows you to keep using the gym and the library.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Get the good stuff</h2>
          <p>Your alumni membership will give you:<br/>JSTOR – free access to thousands of academic journals and books<br/>Discounts – apply for your first period of postgraduate study here and get up to 33% off your first year tuition fee<br/>Careers support for three years after you graduate<br/>Monthly email and annual magazine<br/>A great range of events – from the House of Commons to the London Eye, from Madrid to Kuala Lumpur<br/>NUS Extra – at £12 for 12 months, this gets you over 160 different discounts<br/>Professional networking</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>We’ll help you stay in touch.</h2>
          <p>www.essex.ac.uk/welcome/alumni</p>
        <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"news_three")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = EssexPage;
