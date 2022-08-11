export default function getClassVariant(
  styles: { readonly [key: string]: string },
  variant?: string
) {
  if (!variant) {
    return "";
  }
  let withDarkMode: string[] = [];
  for (const [key, value] of Object.entries(styles)) {
    if (key === variant) {
      withDarkMode.push(value);
      continue;
    }
    if (key.includes("dark") && key.includes(variant)) {
      withDarkMode.push(value);
    }
  }
  return withDarkMode;
}
