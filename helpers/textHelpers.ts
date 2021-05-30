export function toTitleCase(string: string) {
  return string.replace(/\w\S*/g, function (text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
  })
}
