var React = require("-aek/react");
var Container = require("-components/container");
var {VBox, Panel} = require("-components/layout");
var {AekReactRouter, RouterView} = require("-components/router");



var router = new AekReactRouter();

var IndexPage = require("./pages/index");
var SecondPage = require("./pages/second");
var ContentPage = require("./pages/content");
var StudyPage = require("./pages/study");

var Screen = React.createClass({
  selectButton:function(page){
    if(page == "second"){router.goto("/second/");}
    else if(page == "content"){
      router.goto("/content/");
    }
    else if(page == "study"){
      router.goto("/study/")
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
                <StudyPage path="/study/"/>
                

              </RouterView>
            </Panel>
        </VBox>
      </Container>
    );

  }

});

React.render(<Screen/>,document.body);
