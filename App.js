import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "tag" }, "iam h1 tag"),
//     React.createElement("h2", { id: "adjacent" }, "iam adjacent h1 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "tag" }, "iam h1 tag"),
//     React.createElement("h2", { id: "adjacent" }, "iam adjacent h1 tag"),
//   ]),
// ]);

const parent = <h1 className="test">welcome world</h1>;

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// console.log(heading);
// const TitleComponent = (props) => <h1>{props.a + props.b}</h1>;

// const HeadingComponent2 = () => (
//   <div>
//     <h1>Iam component without return statement</h1>
//   </div>
// );

// const HeadingComponent = () => {
//   return (
//     <div>
//       <h1>Iam Functional component</h1>
//       <HeadingComponent2 />

//       {TitleComponent(2, 3)}
//     </div>
//   );
// };

const HeaderComponet = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}),
  React.createElement("h2", {}),
  React.createElement("h3", {}),
]);

const HeaderComponent2 = (
  <div className="title">
    <h1>HeaderComponent2</h1>
    <h2>HeaderComponent2</h2>
    <h3>Header componet2</h3>
  </div>
);

const HeaderFunctionalComponent = () => {
  return (
    <div>
      <h1>Functional component</h1>
      <h2>Functional component</h2>
      <h3>Functional component</h3>
      {/* {console.log(HeaderComponent2)} */}
      <h2>{2 + 3}</h2>
      {HeaderComponent2}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeaderComponent2);
// root.render(<HeaderComponent2 />);
root.render(<HeaderFunctionalComponent />);
