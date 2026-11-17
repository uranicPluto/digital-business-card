import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FeedbackCard } from "./index";

describe("customer feedback form", () => {
  it("requires a rating and then confirms a mock submission", () => {
    render(<FeedbackCard />);

    fireEvent.click(screen.getByRole("button", { name: "Submit Feedback" }));
    expect(screen.getByText("Please select a star rating before submitting.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "4 stars" }));
    fireEvent.change(screen.getByRole("textbox", { name: "Share your feedback" }), {
      target: { value: "Friendly and helpful service." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit Feedback" }));

    expect(screen.getByText("Thank you! Your feedback has been received.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Feedback Submitted" })).toBeDisabled();
  });
});