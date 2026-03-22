"use client";

import Image, { ImageProps } from "next/image";
import { CldImage, CldImageProps } from "next-cloudinary";

interface SmartImageProps extends Omit<ImageProps, "src" | "priority"> {
  src: string;
  preload?: boolean;
  cldProps?: Partial<CldImageProps>;
}

/**
 * Resolves a Cloudinary public-ID shorthand (local /food.png or raw public ID)
 * and returns the correct src string for CldImage.
 */
const toCldSrc = (src: string) =>
  src.startsWith("/")
    ? `simmer-restaurant/${src.split(".")[0].substring(1)}`
    : src;

/**
 * Renders the right image component depending on the URL scheme:
 * - Unsplash / external http → next/image (optimizer-friendly)
 * - Cloudinary / local path → CldImage (transformation pipeline)
 */
export const SmartImage = ({
  src,
  alt,
  className,
  fill,
  sizes,
  preload,
  cldProps,
  ...props
}: SmartImageProps) => {
  const isExternal =
    src.startsWith("http") && !src.includes("res.cloudinary.com");

  if (isExternal) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        fill={fill}
        sizes={sizes}
        preload={preload}
        {...props}
      />
    );
  }

  return (
    <CldImage
      src={toCldSrc(src)}
      alt={alt}
      className={className}
      fill={fill}
      sizes={sizes}
      preload={preload}
      crop="fill"
      gravity="auto"
      {...cldProps}
      {...(props as any)}
    />
  );
};

export default SmartImage;
