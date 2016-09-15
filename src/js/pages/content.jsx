var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
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


var ContentPage = React.createClass({

onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },


  render:function(){
    console.log(location.name);
    //TODO:change back to colchester
    if(location.name == "southend"){
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
    }

  }

});
module.exports = ContentPage;
