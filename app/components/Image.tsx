import Image from "next/image";

export default function OptimizedImage({ src, alt, ...props }) {
  return (
    <Image src={src} alt={alt} loading="lazy" placeholder="blur" {...props} />
  );
}
