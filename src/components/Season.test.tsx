import React from "react";
import { render, screen } from "@testing-library/react";
import Season from "./Season";

describe("Season Component", () => {
  it("renders all season names", () => {
    render(<Season season={1} />);

    expect(screen.getByText("Winter")).toBeInTheDocument();
    expect(screen.getByText("Fool's Spring")).toBeInTheDocument();
    expect(screen.getByText("Second Winter")).toBeInTheDocument();
    expect(screen.getByText("Spring of Deception")).toBeInTheDocument();
    expect(screen.getByText("Third Winter")).toBeInTheDocument();
    expect(screen.getByText("The Pollening")).toBeInTheDocument();
    expect(screen.getByText("Actual Spring")).toBeInTheDocument();
    expect(screen.getByText("Summer")).toBeInTheDocument();
    expect(screen.getByText("Hell's Front Porch")).toBeInTheDocument();
    expect(screen.getByText("False Fall")).toBeInTheDocument();
    expect(screen.getByText("Second Summer")).toBeInTheDocument();
    expect(screen.getByText("Actual Fall")).toBeInTheDocument();
  });

  it("applies active class to current season", () => {
    render(<Season season={8} />);

    const activeSeason = screen.getByText("Summer");
    expect(activeSeason).toHaveClass("active");
    expect(activeSeason).not.toHaveClass("inactive");
  });

  it("applies inactive class to non-current seasons", () => {
    render(<Season season={8} />);

    const inactiveSeasons = screen.getAllByText(/Winter|Spring|Fall/);
    inactiveSeasons.forEach((season) => {
      if (season.textContent !== "Summer") {
        expect(season).toHaveClass("inactive");
        expect(season).not.toHaveClass("active");
      }
    });
  });
});
