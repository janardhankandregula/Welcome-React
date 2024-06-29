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

const HeadingComponent2 = () => (
  <div>
    <h1>Iam component without return statement</h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <div>
      <h1>Iam Functional component</h1>
      <HeadingComponent2 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
root.render(<HeadingComponent />);
