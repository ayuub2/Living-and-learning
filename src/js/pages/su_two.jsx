var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");



var SuPageTwo = React.createClass({
  onClick:function(page,ev){
    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    return (
      <Page>
        <BasicSegment style={{padding:"0px", margin:"0px"}}>
          <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,"su_three")}>
            <img src="http://www.essex.ac.uk/campusm/su/su_two.jpg" height="100%" width="100%"/>
          </Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = SuPageTwo;
