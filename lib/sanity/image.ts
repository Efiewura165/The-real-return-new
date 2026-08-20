import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "./client";

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: Image) {
  if (!builder) return undefined;
  return builder.image(source).auto("format").fit("max");
}
