var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");

var StudyPage = React.createClass({
  render:function(){
    return (
      <Page>
        <BasicSegment>
          <h1>Hello Study</h1>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = StudyPage;
