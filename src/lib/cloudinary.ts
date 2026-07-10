const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL ||
  (CLOUDINARY_CLOUD_NAME ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}` : "");

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string | number;
  format?: string;
}

const normalizeAssetPath = (assetPath: string) => {
  if (!assetPath) return assetPath;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  const [pathname] = assetPath.split("?");
  const withoutLeadingSlash = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return withoutLeadingSlash.split("/").map(encodeURIComponent).join("/");
};

const buildTransformations = (options?: CloudinaryTransformOptions) => {
  if (!options) return "";

  const transformations = [
    options.width ? `w_${options.width}` : null,
    options.height ? `h_${options.height}` : null,
    options.crop ? `c_${options.crop}` : null,
    options.quality ? `q_${options.quality}` : null,
    options.format ? `f_${options.format}` : null,
  ].filter(Boolean);

  return transformations.length > 0 ? `${transformations.join(",")}/` : "";
};

export const getCloudinaryAssetUrl = (
  assetPath: string,
  options?: CloudinaryTransformOptions
) => {
  if (!assetPath) return assetPath;

  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  if (!CLOUDINARY_BASE_URL) {
    const normalizedPath = normalizeAssetPath(assetPath);
    return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
  }

  const normalizedPath = normalizeAssetPath(assetPath);
  const transformPrefix = buildTransformations(options);

  return `${CLOUDINARY_BASE_URL}/image/upload/${transformPrefix}${normalizedPath}`;
};
