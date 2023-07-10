import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import { createRoot } from "react-dom/client";

test("render a star", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<Star />);
    expect(div.querySelector("svg")).toBeTruthy();
})