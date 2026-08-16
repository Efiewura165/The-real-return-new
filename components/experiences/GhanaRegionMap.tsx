import { GHANA_MAP_BACKGROUND_PATHS, GHANA_MAP_REGIONS, GHANA_MAP_VIEWBOX } from "@/lib/ghana-map-data";
import { slugify } from "@/lib/utils";

export function GhanaRegionMap() {
  return (
    <svg viewBox={GHANA_MAP_VIEWBOX} className="h-auto w-full max-w-sm" role="img" aria-label="Map of Ghana's regions">
      <g transform="translate(0,447.63782)">
        {GHANA_MAP_BACKGROUND_PATHS.map((bg, i) => (
          <path key={i} d={bg.d} fill={bg.fill} stroke="none" />
        ))}
        {GHANA_MAP_REGIONS.map((region) => {
          const hasPackages = region.targets.length > 0;
          const path = (
            <path
              d={region.d}
              className={
                hasPackages
                  ? "fill-forest/25 stroke-background stroke-[6] transition-colors duration-300 hover:fill-gold-luxury"
                  : "fill-foreground/10 stroke-background stroke-[6]"
              }
            >
              <title>{hasPackages ? region.label : `${region.label}: experiences coming soon`}</title>
            </path>
          );

          return hasPackages ? (
            <a key={region.key} href={`#${slugify(region.targets[0])}`} className="cursor-pointer">
              {path}
            </a>
          ) : (
            <g key={region.key}>{path}</g>
          );
        })}
      </g>
    </svg>
  );
}
