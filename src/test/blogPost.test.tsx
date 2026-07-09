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

    expect(screen.getByRole("heading", { name: /ge production founder selected for video consortium's ssp africa 2026 fellowship/i })).toBeInTheDocument();
    expect(screen.getByText(/we're excited to share that jesse otumba/i)).toBeInTheDocument();

  });
});
