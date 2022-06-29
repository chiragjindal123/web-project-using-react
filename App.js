import logo from './logo.svg';
import './app.css';
import React from 'react';
import Box from './Box';

const Stats = (props) => {
let boxes = props.boxes;
let black_count = 0, red_count = 0, yellow_count = 0, blue_count = 0, green_count = 0;
 boxes.forEach(box => {
  if (box.color == "black") {
    black_count++;
  } else if (box.color == "red") {
    red_count++;
  } else if (box.color == "yellow") {
    yellow_count++;
  } else if (box.color == "blue") {
    blue_count++;
  } else if (box.color == "green") {
    green_count++;
  }
});

return (
  <div className='stats'>
    Total heading color count:
    <div>Black: {black_count}</div>
    <div>Red: {red_count}</div>
    <div>Yellow: {yellow_count}</div>
    <div>Blue: {blue_count}</div>
    <div>Green: {green_count}</div>
  </div>
);
}

class App extends React.Component {
state = {
    boxes: [
        {
            id: 1,
            heading: "First Heading",
            color: "black"
        },
        {
            id: 2,
            heading: "Second Heading",
            color: "black"
        },
        {
            id: 3,
            heading: "Third Heading",
            color: "black"
        },
        {
            id: 4,
            heading: "Fourth Heading",
            color: "black"
        },
        {
            id: 5,
            heading: "Fifth Heading",
            color: "black"
        },
        {
            id: 6,
            heading: "Sixth Heading",
            color: "black"
        },
        {
          id: 7,
          heading: "Seventh Heading",
          color: "black"
      },
    ]
};

changeColor(id, color) {
  let boxes = this.state.boxes;
  boxes[id-1].color = color;
  this.setState({
      boxes: boxes
  });
}

render() {
    return (
        <div>
            <div className='row'>
                {this.state.boxes.map( box =>
                    <div className='col'>
                        <Box
                            id={box.id}
                            heading={box.heading}
                            color={box.color}
                            changeColor={this.changeColor.bind(this)}
                        />
                    </div>
                )}
            </div>
            <div className='row'>
                <Stats boxes={this.state.boxes}/>
            </div>
        </div>
    );
}
}

export default App;