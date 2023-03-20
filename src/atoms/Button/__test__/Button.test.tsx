import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { ButtonSizes, ButtonVariants } from "../Button.types";
import { testSnapshots } from "utils/snapTest";
import Button from "../Button";

const buttonOnClick = jest.fn();

const buttonProps = [
  { variant: ButtonVariants.PRIMARY, size: ButtonSizes.MEDIUM },
];

describe("Button snapshot", () => {
  testSnapshots(Button, [
    {
      props: buttonProps,
      description: "Should render correctly",
    },
  ]);
});

describe("Button logic", () => {
  test("Trigger onClick fc when click Button", async () => {
    render(<Button onClick={buttonOnClick} children="Click me" />);
    const button = screen.getByText("Click me");
    await userEvent.click(button);

    expect(button).toHaveTextContent("Click");
    expect(buttonOnClick).toHaveBeenCalled();
  });
});
