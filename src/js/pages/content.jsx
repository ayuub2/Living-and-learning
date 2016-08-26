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
        <BasicSegment nopadding style={{height:"30%", width:"100%"}}>
          <img src="http://www.essex.ac.uk/campusm/edits/content-page/contentarrow.jpg" height="100%" width="100%"/>
        </BasicSegment>
      </Page>
    );
  }

});
module.exports = ContentPage;
