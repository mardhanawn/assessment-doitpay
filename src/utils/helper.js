function formattingCharUnderscoreWithSpace(text) {
  return text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

function formattingHtmltoString(text) {
  const withoutTags = text?.replace(/<[^>]*>/g, '')

  const items = withoutTags
    ?.split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '')

  return [...new Set(items)].join(', ')
}

function removePrefixLanguage(text) {
  return text?.split(':')[1]?.trim()
}

export { formattingCharUnderscoreWithSpace, formattingHtmltoString, removePrefixLanguage }
