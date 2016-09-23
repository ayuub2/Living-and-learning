var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var CampusLocator = require("uoe-campus-awareness/campus-locator");

var SuPageFour = React.createClass({

  getInitialState: function() {
    return {
      location: null
    };
  },

  /**
    On Mount, set up the default state
  */
  componentDidMount: function() {
    this.getLocation();
  },


  /**
    Grabs the users current location, and re-renders the page
  */
  getLocation: function() {
    var campusLocator = new CampusLocator();

    campusLocator.getCampus()
      .then(this.onLocationSuccess, this.onLocationError);
  },


  /**
    When we have a location, update the component state
    to re-render the view
  */
  onLocationSuccess: function(result) {
    this.setState({ location: result });
  },

  onLocationError: function(error) {
    this.setState({ location: {city:"Colchester"} });
    console.error(error);
  },

  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },

  render:function(){
    var city;
    var url;
    var page;
    if(this.state.location === null){
      city = "Colchester";
    }
    else{
      city = this.state.location.name;
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
