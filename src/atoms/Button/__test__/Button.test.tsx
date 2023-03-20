import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testSnapshots } from "../../../utils/snapTest";
import Button from "../Button";
import { ButtonSizes, ButtonVariants } from "../Button.types";

const buttonOnClick = jest.fn();

const buttonProps = [
  { variant: ButtonVariants.PRIMARY, size: ButtonSizes.MEDIUM },
  { variant: ButtonVariants.PRIMARY, size: ButtonSizes.BIG },
  { variant: ButtonVariants.SECONDARY, size: ButtonSizes.MEDIUM },
  { variant: ButtonVariants.SECONDARY, size: ButtonSizes.BIG },
  { variant: ButtonVariants.GHOST, size: ButtonSizes.MEDIUM },
  { variant: ButtonVariants.GHOST, size: ButtonSizes.BIG },
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
    render(<Button onClick={buttonOnClick}>Click me</Button>);
    const button = screen.getByText("Click me");
    await userEvent.click(button);

    expect(button).toHaveTextContent("Click me");
    expect(buttonOnClick).toHaveBeenCalled();
  });
});
