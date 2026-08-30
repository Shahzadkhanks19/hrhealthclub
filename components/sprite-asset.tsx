import Image from "next/image";

const dimensions: Record<string, [number, number]> = {
  "brand-logo": [167, 48],
  "brand-mark": [43, 43],
  "hero-gym": [900, 536],
  "program-muscle": [110, 95],
  "program-fatloss": [117, 95],
  "program-strength": [114, 95],
  "program-functional": [114, 95],
  "program-cardio": [116, 95],
  "program-yoga": [122, 95],
  "coach-ravi": [122, 139],
  "coach-ashish": [121, 139],
  "coach-shenoy": [121, 139],
  "transform-1": [167, 93],
  "transform-2": [166, 93],
  "transform-3": [157, 93],
  "transform-4": [171, 93],
  "gallery-1": [192, 95],
  "gallery-2": [169, 95],
  "gallery-3": [177, 95],
  "gallery-4": [197, 95],
  "cta-bodybuilder": [235, 121],
  map: [193, 74],
};

type SpriteAssetProps = {
  id: string;
  className?: string;
  label?: string;
  preserveAspectRatio?: string;
};

export function SpriteAsset({ id, className, label }: SpriteAssetProps) {
  const [width, height] = dimensions[id] ?? [100, 100];

  return (
    <Image
      src={`/images/${id}.svg`}
      width={width}
      height={height}
      alt={label ?? ""}
      className={className}
      unoptimized
    />
  );
}
