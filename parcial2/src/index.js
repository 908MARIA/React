import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.course.name}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.name} {props.excercises}
    </p>
  );
};

const Content = props => {
  console.log(props);
  return (
    <div>
      <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
      <Part name={props.parts[3].name} excercises={props.parts[3].exercises} />
    </div>
  );
};

const Total = props => {
  return (
    <p>
      Number of excercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises +
        props.parts[3].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };
 
 
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
