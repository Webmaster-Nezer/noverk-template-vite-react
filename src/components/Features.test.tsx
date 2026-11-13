import { render, screen } from "@testing-library/react";
import { Features } from "./Features";

describe("Features", () => {
  it("lists each feature", () => {
    render(<Features items={[{ title: "Fast", text: "Quick." }, { title: "Typed", text: "Safe." }]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("heading", { name: "Typed" })).toBeInTheDocument();
  });
  it("shows nothing without features", () => {
    const { container } = render(<Features items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
