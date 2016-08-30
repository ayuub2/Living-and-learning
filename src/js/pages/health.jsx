var React = require("-aek/react");
var Page = require("-components/page");
var {BasicSegment} = require("-components/segment");
var Button = require("-components/button");

var HealthPage = React.createClass({

  onClick:function(page,ev){
      ev.preventDefault();
      this.props.onSelect(page);

    },

  render:function(){
    return (
      <Page>
        <BasicSegment style={{position:"relative"}}>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Staying healthy and happy</h2>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", width:"100%", top:"50px", height:"525px"}}>
          <p>You’re surrounded by new people and friends. You’re juggling things like essay deadlines, a busy social life, and setting aside enough study time to prepare for exams. With so much to do, it’s fair to say student life isn’t always easy. That’s why we’re here to support you throughout your time at Essex</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Student Services Hub</h2>
          <p>If you need practical advice, a confidential conversation, or general information and guidance on University life, no matter what the issue is, the Student Services Hub, on the first floor of the Silberrad Student Centre, is the place to go. Want to know how and when to apply for accommodation? Having problems with your funding? Struggling with exam stress? Your questions matter and you’ll get answers from our team of experts.<br/>www.essex.ac.uk/welcome/hub<br/>askthehub@essex.ac.uk<br/>01206 874000<br/>Open: 9am - 5pm, Monday to Friday</p>
          <h2 style={{color:"#33ccff", fontWeight:"bold"}}>Disability support</h2>
          <p>The Student Services Hub has specialist advisers to provide you with all the guidance you need on a range of disability support services from those with mental health difficulties to those with long- term medical conditions. Come and talk to us to find out more.<br/>www.essex.ac.uk/welcome/disability<br/>www.essex.ac.uk/welcome/access </p>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"0", width:"100%", height:"60px"}}>
          <Button>Back</Button>
          <Button style={{position:"absolute", left:"45%", padding:"10px"}} circular onClick={this.onClick.bind(this,"content")}><i style=

{{margin:"auto",display:"block"}} className="grid layout icon"></i></Button>
          <Button style={{position:"absolute", right:"0px"}} onClick={this.onClick.bind(this,"health_two")}>Next</Button>
        </BasicSegment>
      </Page>
    );
  }
});
module.exports = HealthPage;
