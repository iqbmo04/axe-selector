/**
 * Determines if a document node is XHTML
 *
 * @param {Document} doc a document node
 */

const isXHTML = (doc: Document) => {
  if (!doc.createElement) {
    return false
  }

  const a = doc.createElement('A')
  return a.localName === 'A'
}

export default isXHTML
