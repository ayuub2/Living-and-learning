var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var FuturePage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      console.log("Tech page: " + page);
      this.props.onSelect(page);

  },

  render:function(){

    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h1 style={{fontWeight:"bold"}}>Future career starts here</h1>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>Start preparing for your future today. Seriously, the time will fly by. We’re here to help you boost your skills and get the experience needed to make your CV shine.</p>

          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>LEARNING</h2>
          <table  style={{width:"100%", marginTop:"-20px"}}>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%", width:"30px"}}>06</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"employ")} style={{display:"block"}}>Employability and Careers Centre</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>10</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"award")} style={{display:"block"}}>Big Essex Award</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>11</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"hear")} style={{display:"block"}}>HEAR</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"frontrunner")} style={{display:"block"}}>Frontrunners</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"interns")} style={{display:"block"}}>Essex Interns</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"abroad")} style={{display:"block"}}>Essex abroad</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"career")} style={{display:"block"}}>CareerHub</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"suWork")} style={{display:"block"}}>Work for the SU</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"ambassador")} style={{display:"block"}}>Be an ambassador</a></th>
            </tr>
            <tr>
              <th style={{color:"#33ccff", fontSize:"135%"}}>16</th>
              <th style={{fontSize:"120%"}}><a onClick={this.onClick.bind(this,"vTeam")} style={{display:"block"}}>Volunteer with the vTeam</a></th>
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

module.exports = FuturePage;
