import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import BlogPost from "../pages/BlogPost";

describe("Blog post route", () => {
  it("renders the selected story content from the blog data", () => {
    render(
      <MemoryRouter initialEntries={["/blog/story-01"]}>
        <Routes>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /empowering coastal communities/i })).toBeInTheDocument();
    expect(screen.getByText(/general exhibit was contracted by cordio east africa/i)).toBeInTheDocument();
  });
});
