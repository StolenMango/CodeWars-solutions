function toUnderscore(string) {
  if (typeof string === "number") {
    return string.toString();
  }
  let snakeCaseString = string
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
  return snakeCaseString;
}
