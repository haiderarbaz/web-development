function ReactWorks() {
  return (
    <section>
      <h1>How react works behind the scene?</h1>
      <p>This is some content 😊</p>
    </section>
  );
}

//compiled code (we can get this by pasting the above code in(https://babeljs.io/repl)
//this both code will also work.

//first way
// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// function ReactWorks() {
//   return _jsxs("section", {
//     children: [
//       _jsx("h1", {
//         children: "How react works behind the scene?",
//       }),
//       _jsx("p", {
//         children: "This is some content 😊",
//       }),
//     ],
//   });
// }

//second way
// import React from "react";
// function ReactWorks() {
//   return React.createElement(
//     "section",
//     null,
//     React.createElement("h1", null, "How react works behind the scene?"),
//     React.createElement("p", null, "This is some content 😊")
//   );
// }

export default ReactWorks;
