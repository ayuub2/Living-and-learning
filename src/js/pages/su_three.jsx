var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var CampusLocator = require("uoe-campus-awareness/campus-locator");

var SuPageThree = React.createClass({

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
    if(this.state.location === null){
      city = "Colchester";
    }
    else{
      city = this.state.location.name;
    }


    if(city == "Colchester"){
      url = "http://www.essex.ac.uk/campusm/su/su_three.jpg";
    }
    else{
      url = "http://www.essex.ac.uk/campusm/su_two/su_three.jpg";
    }
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <img src={url} height="100%" width="100%" onClick={this.onClick.bind(this,"su_four")}/>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageThree;
