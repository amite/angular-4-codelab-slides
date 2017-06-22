// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#1F2022",
  secondary: "white",
  tertiary: "yellow",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgImage="https://images.unsplash.com/photo-1483959651481-dc75b89291f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=25785d80c05a38a4969be5222adacb33" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Angular 4 Codelab
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Welcome to the new Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=6367eb61d0e9bb735f3b572a996d9c4e" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Origins of Modern Angular
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
           How did we get here?
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Quick Tour | Basic Angular Setup
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Three Files to Hello World
          </Text>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Heading margin="30" size={6} caps fit textColor="tertiary">Let's get it started 🎉</Heading>
          <Terminal title="1. amite: ~(zsh)" output={[
            "npm install react react-dom next",

          ]}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1453134765485-7f9a71a803d5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=f8f4546ad3c32482c3efa86493f188ca" bgDarken={0.50} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module One - Conceptual overview of Angular
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            8 keys to mastering Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Two - Bootstrap your angular project
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Getting started with angular-cli
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=30fa16d53354bae230f354209e64105b" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Three - What is @ngModule?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Demystifying NgModules in Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1473662711507-13345f9d447c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=77a438abd0cbfcf8fa00c4fab5a5d566" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Four - Using Components
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The basics of Angular Components
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1491895781182-2d272c8f7d5b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=ac46d0af1f4c59f28dd551de163f5924" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Five - Templates
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to build ui with Angular Templates
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1475578749612-705fc64d0574?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=712716f46f70b6812a37a05da0be463c" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Six - Data Binding
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Learn to [(bind)] in Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1496434645698-3c544e472a07?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=2b91ea1077e3afde81287bd4fc73aea9" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Seven - Directives
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Understanding Directives in Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1464245051818-30da1a636203?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=f900b3f0fce9dd036ef6bf05e9fd42a0" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Eight - Services
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            What services do in Angular
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=c6562e69af26fcf2a61450212c7a13cd" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Nine - Dependency Injection
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How Providers and DI works in Angular
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
