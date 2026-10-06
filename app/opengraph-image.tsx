import { renderSocialImage } from "@/lib/social-image";

export const alt = "Satelliting LLC - remote-first web design and development studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderSocialImage();
}
