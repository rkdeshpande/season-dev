import React from "react";
import { render, screen } from "@testing-library/react";
import TitleCard from "./TitleCard";

describe("TitleCard Component", () => {
  it("renders the title", () => {
    render(
      <TitleCard
        isSpring={false}
        isSummer={false}
        isAutumn={false}
        isWinter={false}
      />,
    );
    expect(screen.getByText("What Boston Season Is It?")).toBeInTheDocument();
  });

  it("applies spring class when isSpring is true", () => {
    render(
      <TitleCard
        isSpring={true}
        isSummer={false}
        isAutumn={false}
        isWinter={false}
      />,
    );
    const springIcon = screen.getByTestId("spring-icon");
    expect(springIcon).toHaveClass("spring");
  });

  it("applies summer class when isSummer is true", () => {
    render(
      <TitleCard
        isSpring={false}
        isSummer={true}
        isAutumn={false}
        isWinter={false}
      />,
    );
    const summerIcon = screen.getByTestId("summer-icon");
    expect(summerIcon).toHaveClass("summer");
  });

  it("applies autumn class when isAutumn is true", () => {
    render(
      <TitleCard
        isSpring={false}
        isSummer={false}
        isAutumn={true}
        isWinter={false}
      />,
    );
    const autumnIcon = screen.getByTestId("autumn-icon");
    expect(autumnIcon).toHaveClass("autumn");
  });

  it("applies winter class when isWinter is true", () => {
    render(
      <TitleCard
        isSpring={false}
        isSummer={false}
        isAutumn={false}
        isWinter={true}
      />,
    );
    const winterIcon = screen.getByTestId("winter-icon");
    expect(winterIcon).toHaveClass("winter");
  });
});
