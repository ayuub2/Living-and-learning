var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var WelcomePage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Welcome Home</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our Colchester Campus is set in beautiful parkland, just over a mile away from the small village of Wivenhoe. All of our accommodation is within walking distance of central campus. You’ll be sharing your new home with people from all over the world, so there are plenty of opportunities for you to make lots of new friends</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>What’s here? </h2>
          <p>All single study rooms have central heating, bedroom furniture, a desk and bookshelves. Each shared kitchen contains a cooker, refrigerator, freezer, microwave oven, kettle, iron, vacuum cleaner, ironing board and storage units. </p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>What to bring</h2>
          <p>You’ll need to supply your own bedding and towels, coat hangers, cooking utensils, crockery, cutlery, saucepans and frying pans</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"su_four_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"welcome_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = WelcomePage;
