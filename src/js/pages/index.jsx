var React = require("-aek/react");
var Button = require("-components/button");



var IndexPage = React.createClass({
  onClick:function(page,ev){

    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    return (
        <Button compact="true" style={{padding:"0px", margin:"0px"}} onClick={this.onClick.bind(this,"second")}>
          <img src="http://www.essex.ac.uk/campusm/edits/home/home.jpg" height="100%" width="100%"/>
        </Button>
    );
  }
});

module.exports = IndexPage;
