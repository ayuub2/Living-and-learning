var React = require("-aek/react");
var Page = require("-components/page");
<<<<<<< HEAD
var {BasicSegment, Segment} = require("-components/segment");
=======
var { Segment, BasicSegment } = require("-components/segment");
>>>>>>> origin/master
var CampusLocator = require("uoe-campus-awareness/campus-locator");

var ContentPage = React.createClass({

<<<<<<< HEAD

=======
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
>>>>>>> origin/master

  /**
    Grabs the users current location, and re-renders the page
  */
  getLocation: function() {
    var campusLocator = new CampusLocator();

<<<<<<< HEAD
var ContentPage = React.createClass({
  componentDidMount:function(){
    this.getCity();
  },
  getInitialState:function(){
    return {};
  },
  getCity:function(){
    var campusLocator = new CampusLocator();
    campusLocator.getCampus()
    .then(this.onSuccess, this.onFailure)
    .then(function() {
      if(location == null){
        city = "Colchester";
      }
    });
  },
  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);
    },
  onSuccess:function(result){
    location = result;
     this.setState({
       location:location
     });
  },
  onFailure:function(error){
    console.log(error);
    this.setState({
      location:"Colchester"
    });
  },

  render:function(){
    city = this.state.location;
    if(typeof(city) === "undefined"){
      console.log("loading...");
      return (
        <Segment loading={true} >Loading...</Segment>
=======
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
>>>>>>> origin/master
      );
    } else {
      var city = this.state.location.name,

          // Properties for hyperlinks
          linkProperties = {
            style: {
              display: "block",
              fontSize: "120%"
            },
            href: "javascript:void(0);"
          };

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
                    <th><a onClick={this.onSelectMenu("study_southend")} onTouchStart={this.onSelectMenu("study_southend")} {...linkProperties}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th><a onClick={this.onSelectMenu("tech_southend")} onTouchStart={this.onSelectMenu("tech_southend")} {...linkProperties}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th><a onClick={this.onSelectMenu("health_southend")} onTouchStart={this.onSelectMenu("health_southend")} {...linkProperties}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th><a onClick={this.onSelectMenu("career_southend")} onTouchStart={this.onSelectMenu("career_southend")} {...linkProperties}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th><a onClick={this.onSelectMenu("su")} onTouchStart={this.onSelectMenu("su")} {...linkProperties}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th><a onClick={this.onSelectMenu("su_two")} onTouchStart={this.onSelectMenu("su_two")} {...linkProperties}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th><a onClick={this.onSelectMenu("su_three")} onTouchStart={this.onSelectMenu("su_three")} {...linkProperties}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th><a onClick={this.onSelectMenu("su_four")} onTouchStart={this.onSelectMenu("su_four")} {...linkProperties}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th><a onClick={this.onSelectMenu("welcome_southend")} onTouchStart={this.onSelectMenu("welcome_southend")} {...linkProperties}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th><a onClick={this.onSelectMenu("sports_southend")} onTouchStart={this.onSelectMenu("sports_southend")} {...linkProperties}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th><a onClick={this.onSelectMenu("enjoy_southend")} onTouchStart={this.onSelectMenu("enjoy_southend")} {...linkProperties}>Enjoy yourself</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th><a onClick={this.onSelectMenu("money_southend")} onTouchStart={this.onSelectMenu("money_southend")} {...linkProperties}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th><a onClick={this.onSelectMenu("eat_southend")} onTouchStart={this.onSelectMenu("eat_southend")} {...linkProperties}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th><a onClick={this.onSelectMenu("map_southend")} onTouchStart={this.onSelectMenu("map_southend")} {...linkProperties}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th><a onClick={this.onSelectMenu("news_southend")} onTouchStart={this.onSelectMenu("news_southend")} {...linkProperties}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th><a onClick={this.onSelectMenu("essex_southend")} onTouchStart={this.onSelectMenu("essex_southend")} {...linkProperties}>Essex is for life</a></th>
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
                    <th><a onClick={this.onSelectMenu("study")} onTouchStart={this.onSelectMenu("study")} {...linkProperties}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th><a onClick={this.onSelectMenu("tech_one")} onTouchStart={this.onSelectMenu("tech_one")} {...linkProperties}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th><a onClick={this.onSelectMenu("health")} onTouchStart={this.onSelectMenu("health")} {...linkProperties}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th><a onClick={this.onSelectMenu("career")} onTouchStart={this.onSelectMenu("career")} {...linkProperties}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th><a onClick={this.onSelectMenu("su")} onTouchStart={this.onSelectMenu("su")} {...linkProperties}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th><a onClick={this.onSelectMenu("su_two")} onTouchStart={this.onSelectMenu("su_two")} {...linkProperties}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th><a onClick={this.onSelectMenu("su_three")} onTouchStart={this.onSelectMenu("su_three")} {...linkProperties}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th><a onClick={this.onSelectMenu("su_four")} onTouchStart={this.onSelectMenu("su_four")} {...linkProperties}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th><a onClick={this.onSelectMenu("welcome")} onTouchStart={this.onSelectMenu("welcome")} {...linkProperties}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th><a onClick={this.onSelectMenu("sports")} onTouchStart={this.onSelectMenu("sports")} {...linkProperties}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>31</th>
                    <th><a onClick={this.onSelectMenu("culture")} onTouchStart={this.onSelectMenu("culture")} {...linkProperties}>Cultural Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th><a onClick={this.onSelectMenu("money")} onTouchStart={this.onSelectMenu("money")} {...linkProperties}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th><a onClick={this.onSelectMenu("eat")} onTouchStart={this.onSelectMenu("eat")} {...linkProperties}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>40</th>
                    <th><a onClick={this.onSelectMenu("green")} onTouchStart={this.onSelectMenu("green")} {...linkProperties}>Green space</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>41</th>
                    <th><a onClick={this.onSelectMenu("around")} onTouchStart={this.onSelectMenu("around")} {...linkProperties}>Get around</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th><a onClick={this.onSelectMenu("map")} onTouchStart={this.onSelectMenu("map")} {...linkProperties}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th><a onClick={this.onSelectMenu("news")} onTouchStart={this.onSelectMenu("news")} {...linkProperties}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th><a onClick={this.onSelectMenu("essex")} onTouchStart={this.onSelectMenu("essex")} {...linkProperties}>Essex is for life</a></th>
                  </tr>
                </table>
            </BasicSegment>
          </Page>
        );
      }
    }
    else{if(city == "Southend"){
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
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"study_southend")} style={{display:"block"}}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"tech_southend")} style={{display:"block"}}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"health_southend")} style={{display:"block"}}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"career_southend")}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su")}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_two")}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_three")}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_four")}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"welcome_southend")}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"sports_southend")}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"enjoy_southend")}>Enjoy yourself</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"money_southend")}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"eat_southend")}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"map_southend")}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"news_southend")}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"essex_southend")}>Essex is for life</a></th>
                  </tr>
                </table>
            </BasicSegment>
          </Page>
        );
      }
      else{
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
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"study")} style={{display:"block"}}>Your studies</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>05</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"tech_one")} style={{display:"block"}}>Tech World</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>09</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"health")} style={{display:"block"}}>Staying health and happy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#33ccff", fontSize:"135%"}}>17</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"career")}>Future career starts here</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>20</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su")}>Hello wonderful people</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>21</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_two")}>What do we do?</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>22</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_three")}>10 reasons why</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>23</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"su_four")}>This is just the start</a></th>
                  </tr>
                </table>
                <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
                <table  style={{width:"100%", marginTop:"-20px"}}>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"welcome")}>Welcome Home</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"sports")}>Sports at Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>31</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"culture")}>Cultural Essex</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>33</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"money")}>Money matters</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>37</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"eat")}>Eat, drink, buy</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>40</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"green")}>Green space</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>41</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"around")}>Get around</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>44</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"map")}>Maps</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>46</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"news")}>News and media</a></th>
                  </tr>
                  <tr>
                    <th style={{color:"#ff3399", fontSize:"135%"}}>49</th>
                    <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"essex")}>Essex is for life</a></th>
                  </tr>
                </table>
            </BasicSegment>
          </Page>
        );
      }}


  }

});
module.exports = ContentPage;
