var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");



var SuPageFour = React.createClass({
  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,"second")}>
            <img src="http://www.essex.ac.uk/campusm/su/su_four.jpg" height="100%" width="100%"/>
          </Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageFour;
