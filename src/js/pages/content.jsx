var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var {CBox,VBox} = require("@ombiel/aek-lib/react/components/layout");

var ContentPage = React.createClass({

onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },

  render:function(){
    return (
      <Page>
        <BasicSegment nopadding style={{height:"40%", width:"100%"}}>
          <img src="http://www.essex.ac.uk/campusm/edits/content-page/contentarrow.jpg" height="100%" width="100%" style={{position:"absolute", marginTop:"-40px"}}/>
          // TODO: include a button to the first page
        </BasicSegment>
        <BasicSegment style={{position:"absolute", top:"50%", left:"50%", marginTop:"-100px", marginLeft:"-135px", width:"300px", height:"400px"}}>
            <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
            <table  style={{width:"100%", marginTop:"-20px"}}>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%", width:"30px"}}>06</th>
                <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"study")} style={{display:"block"}}>Your studies</a></th>
              </tr>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%"}}>10</th>
                <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"tech_one")} style={{display:"block"}}>Tech World</a></th>
              </tr>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%"}}>11</th>
                <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"health")} style={{display:"block"}}>Staying health and happy</a></th>
              </tr>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
                <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"career")}>Future career starts here</a></th>
              </tr>
            </table>
            <h2 style={{color:"#2FFB3C", fontWeight:"bold"}}>Student Union</h2>
            <table  style={{width:"100%", marginTop:"-20px"}}>
              <tr>
                <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>24</th>
                <th style={{fontSize:"120%"}}>Hello wonderful people</th>
              </tr>
              <tr>
                <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>24</th>
                <th style={{fontSize:"120%"}}>What do we do?</th>
              </tr>
              <tr>
                <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>24</th>
                <th style={{fontSize:"120%"}}>10 reasons why</th>
              </tr>
              <tr>
                <th style={{color:"#2FFB3C", fontSize:"135%", width:"30px"}}>24</th>
                <th style={{fontSize:"120%"}}>This is just the start</th>
              </tr>
            </table>
            <h2 style={{color:"#ff3399", fontWeight:"bold"}}>LIVING</h2>
            <table  style={{width:"100%", marginTop:"-20px"}}>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%", width:"30px"}}>24</th>
                <th style={{fontSize:"120%"}}>Welcome home</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>25</th>
                <th style={{fontSize:"120%"}}>Sports at Essex</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Cultural Essex</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Money matters</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Eat, drink, buy</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Green space</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Get around</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Maps</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>News and media</th>
              </tr>
              <tr>
                <th style={{color:"#ff3399", fontSize:"135%"}}>28</th>
                <th style={{fontSize:"120%"}}>Essex is for life</th>
              </tr>
            </table>
        </BasicSegment>
      </Page>
    );
  }

});
module.exports = ContentPage;
