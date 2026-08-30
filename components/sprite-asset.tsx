const MOCKUP = "data:image/webp;base64,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";

const assets = {
  "brand-logo": { box: [5, 9, 37, 10] as const, size: [167, 48] as const },
  "brand-mark": { box: [5, 9, 10, 10] as const, size: [43, 43] as const },
  "hero-gym": { box: [49, 19, 111, 72] as const, size: [900, 536] as const },
  "program-muscle": { box: [6, 114, 22, 20] as const, size: [110, 95] as const },
  "program-fatloss": { box: [30, 114, 22, 20] as const, size: [117, 95] as const },
  "program-strength": { box: [54, 114, 22, 20] as const, size: [114, 95] as const },
  "program-functional": { box: [78, 114, 22, 20] as const, size: [114, 95] as const },
  "program-cardio": { box: [102, 114, 22, 20] as const, size: [116, 95] as const },
  "program-yoga": { box: [126, 114, 22, 20] as const, size: [122, 95] as const },
  "coach-ravi": { box: [29, 189, 24, 27] as const, size: [122, 139] as const },
  "coach-ashish": { box: [79, 189, 24, 27] as const, size: [121, 139] as const },
  "coach-shenoy": { box: [130, 189, 24, 27] as const, size: [121, 139] as const },
  "transform-1": { box: [10, 225, 33, 17] as const, size: [167, 93] as const },
  "transform-2": { box: [45, 225, 33, 17] as const, size: [166, 93] as const },
  "transform-3": { box: [80, 225, 33, 17] as const, size: [157, 93] as const },
  "transform-4": { box: [114, 225, 33, 17] as const, size: [171, 93] as const },
  "gallery-1": { box: [6, 259, 37, 19] as const, size: [192, 95] as const },
  "gallery-2": { box: [45, 259, 33, 19] as const, size: [169, 95] as const },
  "gallery-3": { box: [80, 259, 33, 19] as const, size: [177, 95] as const },
  "gallery-4": { box: [114, 259, 40, 19] as const, size: [197, 95] as const },
  "cta-bodybuilder": { box: [6, 315, 44, 21] as const, size: [235, 121] as const },
  map: { box: [115, 344, 39, 16] as const, size: [193, 74] as const },
} as const;

type SpriteAssetProps = {
  id: string;
  className?: string;
  label?: string;
  preserveAspectRatio?: string;
};

export function SpriteAsset({ id, className, label, preserveAspectRatio = "xMidYMid slice" }: SpriteAssetProps) {
  const asset = assets[id as keyof typeof assets];
  if (!asset) return null;

  const [x, y, width, height] = asset.box;
  const [displayWidth, displayHeight] = asset.size;

  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      width={displayWidth}
      height={displayHeight}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio={preserveAspectRatio}
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href={MOCKUP} x="0" y="0" width="160" height="387" preserveAspectRatio="none" />
    </svg>
  );
}
