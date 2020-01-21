export default function splitIntoTwoLines (text) {
  let halfway = Math.floor(text.length / 2)
  const before = text.lastIndexOf(' ', halfway)
  const after = text.indexOf(' ', halfway + 1)
  halfway = (before === -1 || (after !== -1 && halfway - before >= after - halfway)) ? after : before

  const line1 = text.substr(0, halfway)
  const line2 = text.substr(halfway + 1)

  return {
    line1,
    line2
  }
}
