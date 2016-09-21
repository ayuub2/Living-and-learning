var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var CampusLocator = require("uoe-campus-awareness/campus-locator");
var location;
var city;

  var campusLocator = new CampusLocator();
  campusLocator.getCampus()
  .then(function(result) {
  location = result;
   // Success
  }, function(error) {
  console.error(error); // failed
  })
  .then(function() {
    if(location == null){
      city = "Colchester";
    }
  });


var SuPageFour = React.createClass({
  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    var url;
    var page;
    if(location != null){
      city = location.name;
    }
    if(city == "Colchester"){
      url = "http://www.essex.ac.uk/campusm/su/su_four.jpg";
      page = "welcome";
    }
    else{
      url = "http://www.essex.ac.uk/campusm/su_two/su_four.jpg";
      page = "welcome_southend";
    }
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,page)}>
            <img src={url} height="100%" width="100%"/>
          </Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageFour;
