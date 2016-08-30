var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");
var {AekReactRouter} = require("-components/router");

var router = new AekReactRouter();

var ContentPage = React.createClass({

onClick:function(ev){
    ev.preventDefault();
  },

  render:function(){
    return (
      <Page>
        <BasicSegment nopadding style={{height:"40%", width:"100%"}}>
          <img src="http://www.essex.ac.uk/campusm/edits/content-page/contentarrow.jpg" height="100%" width="100%" style={{position:"absolute", marginTop:"-40px"}}/>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", top:"50%", left:"50%", marginTop:"-120px", marginLeft:"-135px", width:"300px", height:"400px"}}>
            <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
            <table style={{width:"100%", marginTop:"-20px"}}>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%"}}>06</th>
                <th style={{fontSize:"120%"}}>Your studies</th>
              </tr>
              <tr>
                <th style={{color:"#33ccff", fontSize:"135%"}}>10</th>
                <th style={{fontSize:"120%"}}>Tech World</th>
              </tr>
            </table>
        </BasicSegment>
      </Page>
    );
  }

});
module.exports = ContentPage;
