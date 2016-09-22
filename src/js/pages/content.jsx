var React = require("-aek/react");
var Page = require("-components/page");
var { Segment, BasicSegment } = require("-components/segment");
var CampusLocator = require("uoe-campus-awareness/campus-locator");

var ContentPage = React.createClass({

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

  /**
    http://stackoverflow.com/questions/20377837/how-to-access-custom-attributes-from-event-object-in-react
  */
  onSelectMenu: function(page) {
    return function(event) {
      event.preventDefault();
      this.props.onSelect(page);
    }.bind(this);
  },

  render:function(){

    // If the location is null, we're still fetching a
    // location
    if(this.state.location == null) {
      return  (
        <Page>
          <Segment>
            <Segment variation="vertical" loading={true}></Segment>
            <Segment variation="vertical">Fetching your location...</Segment>
          </Segment>
        </Page>
      );
    } else {
      var city = this.state.location.name;

      if(city == "Southend"){
        return (
          <Page>
            <BasicSegment nopadding style={{height:"40%", width:"100%"}}>
              <img src="http://www.essex.ac.uk/campusm/edits/content-page/contentarrow.jpg" height="100%" width="100%" style={{position:"absolute", marginTop:"-40px"}}/>
              // TODO: include a button to the first page ? maybe
            </BasicSegment>
            <BasicSegment style={{position:"absolute", top:"50%", left:"50%", marginTop:"-100px", marginLeft:"-135px", width:"300px", height:"400px"}}>
                <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%", width:"30px"}}>01</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("study_southend")} onTouchStart={this.onSelectMenu("study_southend")} style={{display:"block"}}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("tech_southend")} onTouchStart={this.onSelectMenu("tech_southend")} style={{display:"block"}}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("health_southend")} onTouchStart={this.onSelectMenu("health_southend")} style={{display:"block"}}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("career_southend")} onTouchStart={this.onSelectMenu("career_southend")}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su")} onTouchStart={this.onSelectMenu("su")}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_two")} onTouchStart={this.onSelectMenu("su_two")}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_three")} onTouchStart={this.onSelectMenu("su_three")}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_four")} onTouchStart={this.onSelectMenu("su_four")}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("welcome_southend")} onTouchStart={this.onSelectMenu("welcome_southend")}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("sports_southend")} onTouchStart={this.onSelectMenu("sports_southend")}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("enjoy_southend")} onTouchStart={this.onSelectMenu("enjoy_southend")}>Enjoy yourself</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("money_southend")} onTouchStart={this.onSelectMenu("money_southend")}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("eat_southend")} onTouchStart={this.onSelectMenu("eat_southend")}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("map_southend")} onTouchStart={this.onSelectMenu("map_southend")}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("news_southend")} onTouchStart={this.onSelectMenu("news_southend")}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("essex_southend")} onTouchStart={this.onSelectMenu("essex_southend")}>Essex is for life</a></th>
                  </tr>
                </table>
            </BasicSegment>
          </Page>
        );
      } else {
        return (
          <Page>
            <BasicSegment nopadding style={{height:"40%", width:"100%"}}>
              <img src="http://www.essex.ac.uk/campusm/edits/content-page/contentarrow.jpg" height="100%" width="100%" style={{position:"absolute", marginTop:"-40px"}}/>
              // TODO: include a button to the first page ? maybe
            </BasicSegment>
            <BasicSegment style={{position:"absolute", top:"50%", left:"50%", marginTop:"-100px", marginLeft:"-135px", width:"300px", height:"400px"}}>
                <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%", width:"30px"}}>01</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("study")} onTouchStart={this.onSelectMenu("study")} style={{display:"block"}}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("tech_one")} onTouchStart={this.onSelectMenu("tech_one")} style={{display:"block"}}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("health")} onTouchStart={this.onSelectMenu("health")} style={{display:"block"}}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("career")} onTouchStart={this.onSelectMenu("career")}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su")} onTouchStart={this.onSelectMenu("su")}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_two")} onTouchStart={this.onSelectMenu("su_two")}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_three")} onTouchStart={this.onSelectMenu("su_three")}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("su_four")} onTouchStart={this.onSelectMenu("su_four")}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("welcome")} onTouchStart={this.onSelectMenu("welcome")}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("sports")} onTouchStart={this.onSelectMenu("sports")}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>31</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("culture")} onTouchStart={this.onSelectMenu("culture")}>Cultural Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("money")} onTouchStart={this.onSelectMenu("money")}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("eat")} onTouchStart={this.onSelectMenu("eat")}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>40</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("green")} onTouchStart={this.onSelectMenu("green")}>Green space</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>41</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("around")} onTouchStart={this.onSelectMenu("around")}>Get around</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("map")} onTouchStart={this.onSelectMenu("map")}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("news")} onTouchStart={this.onSelectMenu("news")}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onSelectMenu("essex")} onTouchStart={this.onSelectMenu("essex")}>Essex is for life</a></th>
                  </tr>
                </table>
            </BasicSegment>
          </Page>
        );
      }
    }
  }

});
module.exports = ContentPage;
