var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var NewsPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>News and media </h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Find out what’s going on. Subscribe to e-bulletins, follow us on social media, read Essex Spirit. Get involved.</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Essex spirit</h2>
          <p>Keep up-to-date with important news, events and offers from across the University with our Essex Spirit blog. Go to our email lists to subscribe to the fortnightly e-bulletin.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> http://blogs.essex.ac.uk/essexspirit/
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/> www.essex.ac.uk/welcome/news</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Social media</h2>
          <p>We have more than 60 Facebook pages, including one for each department, and we love Twitter. Join the conversation.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/> www.facebook.com/uniofessex/
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/twitter.jpg"/>@Uni_of_Essex</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Join Welcome Week on Facebook</h2>
          <p>Join our event page on Facebook to find out everything you need to know about welcome week at our Colchester Campus. We’ll keep you up-to-date with all the latest news and information so you know where to go and what to do during your first week at Essex.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/> www.essex.ac.uk/welcome/fb-events</p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"map_two")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"news_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = NewsPage;
