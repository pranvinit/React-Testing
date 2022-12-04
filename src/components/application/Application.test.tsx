import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  // Component renders correctly
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1, // corrosponds to h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2, // corrosponds to h2
      name: "Section 1",
    });

    expect(sectionHeading).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name", // equivalent to label
    });
    expect(nameEl).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameEl2).toBeInTheDocument();

    const nameEl3 = screen.getByPlaceholderText("Fullname");
    expect(nameEl3).toBeInTheDocument();

    const nameEl4 = screen.getByDisplayValue("Pranav");
    expect(nameEl4).toBeInTheDocument();

    const paragraphEl = screen.getByText(/All fields/i); // Substring case-insensitive
    expect(paragraphEl).toBeInTheDocument();

    const paragraphEl2 = screen.getByText("All fields", { exact: false });
    expect(paragraphEl2).toBeInTheDocument();

    const paragraphEl3 = screen.getByText((content) =>
      content.startsWith("All fields")
    );
    expect(paragraphEl3).toBeInTheDocument();

    const imgEl = screen.getByAltText(/a person with a laptop/i);
    expect(imgEl).toBeInTheDocument();

    const closeEl = screen.getByTitle("close");
    expect(closeEl).toBeInTheDocument();

    const customEl = screen.getByTestId("custom-element");
    expect(customEl).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const sumbitBtnEl = screen.getByRole("button");
    expect(sumbitBtnEl).toBeInTheDocument();
  });
});
