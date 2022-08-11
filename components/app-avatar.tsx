import Image, { StaticImageData } from "next/image";

export interface AvatarProps {
  src: StaticImageData;
  alt: string;
  height: number;
  width: number;
}

export default function AppAvatar({ src, alt, height, width }: AvatarProps) {
  return (
    <span className="flex items-center space-x-4">
      <span className="relative">
        <Image
          src={src}
          alt={alt}
          className="!rounded-full rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600"
          height={height}
          width={width}
        />
      </span>
    </span>
  );
}
