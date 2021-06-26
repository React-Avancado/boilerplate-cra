import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Menu from ".";

describe("<Menu />", () => {
  it("should render the links", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });
});
