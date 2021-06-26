import { render, screen } from "@testing-library/react";

import Main from ".";

// When you have nested components
// you don't need to test the inner component
// since it already has its own tests
// so you mock instead of rendering everything from it
jest.mock("components/Menu", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu"></div>;
    },
  };
});

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole("heading", {
        name: /CRA, TypeScript e Styled Components/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the menu", () => {
    render(<Main />);

    expect(screen.getByTestId("Menu")).toBeInTheDocument();
  });

  it("should render the colors correctly", () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
  });
});
