var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var TechPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      console.log("Tech page: " + page);
      this.props.onSelect(page);

  },

  render:function(){

    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h1 style={{fontWeight:"bold"}}>Tech World</h1>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Our digital campus gives you the tools you need to study where you want, when you want and how you want.</p>

          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
          <table  style={{width:"100%", marginTop:"-20px"}}>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%", width:"30px"}}>06</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"account")} style={{display:"block"}}>Your IT account and password</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>10</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"ITHelp")} style={{display:"block"}}>Get IT help</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>11</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"wifi")} style={{display:"block"}}>Wi-Fi on campus</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"microsoft")} style={{display:"block"}}>Get Microsoft office - free</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"365")} style={{display:"block"}}>Email and Office 365</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"lynda")} style={{display:"block"}}>Lynda.com - grow your brain</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"labs")} style={{display:"block"}}>Computer labs</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"groupStudy")} style={{display:"block"}}>Group study pods</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"saving")} style={{display:"block"}}>Saving your work</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"printing")} style={{display:"block"}}>Printing and scanning</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"news")} style={{display:"block"}}>Sign-up for news</a></th>
            </tr>
          </table>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"account")}><i style={{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});

module.exports = TechPage;
