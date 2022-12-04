import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "NODE", "PYTHON"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemsEl = screen.getAllByRole("listitem");
    expect(listItemsEl).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginBtnEl = screen.getByRole("button", { name: "Login" });
    expect(loginBtnEl).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    // returns null if no match is found
    // getByRole would've thrown
    const startLearningBtnEl = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningBtnEl).not.toBeInTheDocument();
  });

  test("start learning button will be eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningBtnEl = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 3000 } // change default timeout of 1sec to 3sec
    ); // waits 1sec to find the start learning button element

    expect(startLearningBtnEl).toBeInTheDocument();
  });
});
