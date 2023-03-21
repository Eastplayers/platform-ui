import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SizeArr } from "../../../types/common";
import { testSnapshots } from "../../../utils/snapTest";
import Button from "../Button";
import { ButtonProps, Variants } from "../Button.types";

const buttonOnClick = jest.fn();

const buttonProps: ButtonProps[] = [];

Variants.forEach((variant) => {
  SizeArr.forEach((size) => buttonProps.push({ variant, size }));
});

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
    render(<Button onClick={buttonOnClick}>Click me</Button>);
    const button = screen.getByText("Click me");
    await userEvent.click(button);

    expect(button).toHaveTextContent("Click me");
    expect(buttonOnClick).toHaveBeenCalled();
  });
});
