import { beforeEach, describe, expect, it, vi } from "vitest";
import { getCloudinaryAssetUrl } from "./cloudinary";

describe("getCloudinaryAssetUrl", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_CLOUDINARY_CLOUD_NAME", "demo");
  });

  it("builds a cloudinary image URL from a public asset path", () => {
    expect(getCloudinaryAssetUrl("/hero.jpg")).toContain(
      "https://res.cloudinary.com/"
    );
    expect(getCloudinaryAssetUrl("/hero.jpg")).toContain("/image/upload/");
    expect(getCloudinaryAssetUrl("/hero.jpg")).toContain("hero.jpg");
  });

  it("preserves explicit URLs and supports transformations", () => {
    const remoteUrl = "https://example.com/photo.jpg";
    expect(getCloudinaryAssetUrl(remoteUrl)).toBe(remoteUrl);

    expect(getCloudinaryAssetUrl("/hero.jpg", { width: 800, height: 600, crop: "fill" })).toContain(
      "w_800"
    );
    expect(getCloudinaryAssetUrl("/hero.jpg", { width: 800, height: 600, crop: "fill" })).toContain(
      "h_600"
    );
  });

  it("encodes local asset paths with spaces for browser-safe URLs", () => {
    expect(getCloudinaryAssetUrl("/About page.jpg")).toContain("About%20page.jpg");
  });
});
