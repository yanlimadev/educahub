import { render, screen } from "@testing-library/react";
import AsideMenuItem from ".";

const mock = {
  label: "label",
  href: "./test",
  active: false,
};

describe("<AsideMenuItem />", () => {
  it("Should render the AsideMenuItem correctly", () => {
    render(<AsideMenuItem {...mock}> ICON </AsideMenuItem>);

    // The element is in the document?
    expect(screen.getByRole("link", { href: mock.href })).toBeInTheDocument();

    // Did are the label text loaded?
    expect(
      screen.getByRole("heading", { text: mock.label })
    ).toBeInTheDocument();

    // Did are the class applied?
    expect(screen.getByRole("listitem")).toHaveAttribute(
      "class",
      "aside-menu-item cursor-pointer"
    );
  });

  it("Should add 'active' to the class when the prop 'active' is set to 'true'", () => {
    render(
      <AsideMenuItem {...mock} active={true}>
        ICON
      </AsideMenuItem>
    );

    // Did are the class applied?
    expect(screen.getByRole("listitem")).toHaveAttribute(
      "class",
      "aside-menu-item cursor-pointer active"
    );
  });
});
