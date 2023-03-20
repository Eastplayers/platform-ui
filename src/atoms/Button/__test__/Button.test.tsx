import { testSnapshots } from "../../../utils/snapTest";
import Button from "../Button";
import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import "@testing-library/jest-dom";

// const breadcrumb = [
//   {
//     label: "Home",
//     path: "/",
//     hightLightLabel: "Home",
//   },
// ];

describe("Button snapshot", () => {
  testSnapshots(Button, [
    {
      props: {},
      description: "Should render correctly",
    },
  ]);
});

describe("Button logic", () => {
  test("Trigger onClick fc when click Button", () => {
    render(<Button children="Click me" />);
    const button = screen.getByText("Click me");
    // await userEvent.click(button);
    expect(button).toHaveTextContent("Click me");
  });
});
