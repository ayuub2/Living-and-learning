var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var NewsPageSouthend = React.createClass({

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
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="http://blogs.essex.ac.uk/essexspirit/"> http://blogs.essex.ac.uk/essexspirit/</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/arrow.jpg"/><a href="https://www.essex.ac.uk/it/groups-lists/"> www.essex.ac.uk/welcome/news</a></p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Social media</h2>
          <p>We have more than 60 Facebook pages. There’s one for each school or department, plus the Southend Student Services Hub page. You can find us on Twitter too.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="https://www.facebook.comwww.facebook.com/southendstudents/"> www.facebook.com/southendstudents/</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="https://www.facebook.comwww.facebook.com/uniofessex/"> www.facebook.com/uniofessex/</a>
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/twitter.jpg"/>@Uni_of_Essex</p>
          <h2 style={{color:"#ff3399", fontWeight:"bold"}}>Student webpages</h2>
          <p>Featuring a wealth of student information. Make this your homepage. Forever, if you like.
          <br/><img height="10px" width="10px" src="http://www.essex.ac.uk/campusm/edits/icons/blue/fb.jpg"/><a href="https://www.essex.ac.uk/welcome/students"> www.essex.ac.uk/welcome/students</a></p>
          <BasicSegment style={{height:"60px"}}>
            <Button onClick={this.onClick.bind(this,"map_southend_back")}>Back</Button>
            <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
            <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"news_two")}>Next</Button>
          </BasicSegment>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = NewsPageSouthend;
