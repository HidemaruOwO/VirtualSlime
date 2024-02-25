import fs from "fs";
import process from "process";

export function importImage(path: string) {
  const images: Object = import.meta.glob(
    "/src/images/**/*.{png,jpg,jpeg,webp,gif}"
  );
  if (path && fs.existsSync(`${process.cwd()}/src${path}`)) {
    return images[`/src${path}`]();
  } else {
    return images["/src/images/icons/not-found.png"]();
  }
}
