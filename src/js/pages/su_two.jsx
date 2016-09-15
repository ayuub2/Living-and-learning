var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var CampusLocator = require("uoe-campus-awareness/campus-locator");
var location;


  var campusLocator = new CampusLocator();
  campusLocator.getCampus()
  .then(function(result) {
  location = result;
   // Success
  }, function(error) {
  console.error(error); // failed
  })
  .then(function() {
  // Code that is run regardless of whether the request succeeded or failed
  });


var SuPageTwo = React.createClass({
  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    var url;
    if(location.name == "Colchester"){
      url = "http://www.essex.ac.uk/campusm/su_two/su.jpg";
    }
    else{
      url = "http://www.essex.ac.uk/campusm/su/su.jpg";
    }
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,"su_three")}>
            <img src={url} height="100%" width="100%"/>
          </Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageTwo;
