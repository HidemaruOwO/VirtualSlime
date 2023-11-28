export function importImage(path: string) {
  const images = import.meta.glob("/src/images/**/*.{png,jpg,jpeg,webp,gif}");
  if (path) {
    return images[`/src${path}`]();
  } else {
    return images["/src/images/icons/not-found.png"]();
  }
}
