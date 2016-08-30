var React = require("-aek/react");
var Container = require("-components/container");
var {VBox, Panel} = require("-components/layout");
var {AekReactRouter, RouterView} = require("-components/router");

var router = new AekReactRouter();

var IndexPage = require("./pages/index");
var SecondPage = require("./pages/second");
var ContentPage = require("./pages/content");
var StudyPage = require("./pages/study");
var StudyPageTwo = require("./pages/study_two");
var StudyPageThree = require("./pages/study_three");
var StudyPageFour = require("./pages/study_four");
var HealthPage = require("./pages/health");

var TechPage = require("./pages/tech");
var TechOnePage = require("./pages/tech_one");
var TechTwoPage = require("./pages/tech_two");
var TechThreePage = require("./pages/tech_three");
var TechFourPage = require("./pages/tech_four");

var Screen = React.createClass({

  selectButton:function(page){
    if (page == "second") {
      router.goto("/second/");
    }
    else if (page == "content") {
      router.goto("/content/");
    }
    else if(page == "study"){
      router.goto("/study/");
    }
    else if(page == "study_two"){
      router.goto("/study_two/");
    }
    else if(page == "study_three"){
      router.goto("/study_three/");
    }
    else if(page == "study_four"){
      router.goto("/study_four/");
    }
    else if(page == "health"){
      router.goto("/health/");
    }
    else if(page == "health_two"){
      router.goto("/health_two/");
    }
    else if(page == "study"){
      router.goto("/study/");
    }
    else if (page == "tech") {
      router.goto("/tech/");
    }
    else if (page == "account" || page == "ITHelp" || page == "wifi") {
      router.goto("/tech_one/");
    }
    else if (page == "microsoft" || page == "365" || page == "lynda") {
      router.goto("/tech_two/");
    }
    else if (page == "labs" || page == "groupStudy" || page == "saving") {
      router.goto("/tech_three/");
    }
    else if (page == "printing" || page == "news") {
      router.goto("/tech_four/");
    }
  },

  render:function() {
    return (
      <Container>
        <VBox>
            <Panel>
              <RouterView router={router}>
                <IndexPage path="/" onSelect={this.selectButton}/>
                <SecondPage path="/second/" onSelect={this.selectButton}/>
                <ContentPage path="/content/" onSelect={this.selectButton}/>
                <StudyPage path="/study/" onSelect={this.selectButton}/>
                <StudyPageTwo path="/study_two/" onSelect={this.selectButton}/>
                <StudyPageThree path="/study_three/" onSelect={this.selectButton}/>
                <StudyPageFour path="/study_four/" onSelect={this.selectButton}/>
                <HealthPage path="/health/" onSelect={this.selectButton}/>
                <HealthPageTwo path="/health_two/" onSelect={this.selectButton}/>
                <TechPage path="/tech/" onSelect={this.selectButton}/>
                <TechOnePage path="/tech_one/" onSelect={this.selectButton}/>
                <TechTwoPage path="/tech_two/" onSelect={this.selectButton}/>
                <TechThreePage path="/tech_three/" onSelect={this.selectButton}/>
                <TechFourPage path="/tech_four/" onSelect={this.selectButton}/>
              </RouterView>
            </Panel>
        </VBox>
      </Container>
    );
  }
});

React.render(<Screen/>,document.body);
