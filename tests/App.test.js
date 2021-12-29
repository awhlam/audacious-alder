import React from "react";
import { render } from "@testing-library/react";
import { App } from "../client/src/components/App.jsx";

describe("App Component", function () {
  it("should have a title", function () {
    let { getByText } = render(<App />);
    expect(getByText("Audacious Alder Clothing")).toMatchInlineSnapshot(`
      <h1>
        Audacious Alder Clothing
      </h1>
    `);
  });
});