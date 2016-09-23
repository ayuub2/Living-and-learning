var React = require("-aek/react");
var Button = require("-components/button");



var IndexPage = React.createClass({
  onClick:function(page,ev){

    ev.preventDefault();
    this.props.onSelect(page);
  },



  render:function(){
    return (

          <img src="http://www.essex.ac.uk/campusm/edits/home/home3.jpg" height="100%" width="100%" onClick={this.onClick.bind(this,"second")}/>

    );
  }
});

module.exports = IndexPage;
