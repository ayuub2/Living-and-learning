var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var CampusLocator = require("uoe-campus-awareness/campus-locator");

var SuPageThree = React.createClass({

  /**
    On Mount, grab the current location
  */
  componentDidMount: function() {
    this.getLocation();
  },

  // Grab the initial state
  getInitialState: function() {
    return {
      location: null
    };
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

  /**
    If we don't have a location, default to Colchester
    and re-render the view
  */
  onLocationError: function(error) {
    this.setState({ location: CampusLocator.campus[0] });
    console.error(error);
  },

  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },

  render:function(){
    var city = this.state.location.name,
        url;

    if(city == "Colchester"){
      url = "http://www.essex.ac.uk/campusm/su/su_three.jpg";
    }
    else{
      url = "http://www.essex.ac.uk/campusm/su_two/su_three.jpg";
    }
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,"su_four")}>
            <img src={url} height="100%" width="100%"/>
          </Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageThree;
