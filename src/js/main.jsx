var React = require("-aek/react");
var Container = require("-components/container");
var {VBox, Panel} = require("-components/layout");
var {AekReactRouter, RouterView} = require("-components/router");



var router = new AekReactRouter();

var IndexPage = require("./pages/index");
var SecondPage = require("./pages/second");
var ContentPage = require("./pages/content");

var Screen = React.createClass({
  selectButton:function(page){
    if(page == "second"){router.goto("/second/");}
    else if(page == "content"){
      router.goto("/content/");
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
                <ContentPage path="/content/"/>

              </RouterView>
            </Panel>
        </VBox>
      </Container>
    );

  }

});

React.render(<Screen/>,document.body);
