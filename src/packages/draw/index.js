import * as projectView from './adapters/project'

function drawList(listClassName, listItemClassName, arrayData) {
  const listItems = arrayData.map(({ url, itemTitle }) =>
    $(`<li></li>`)
      .addClass(listItemClassName)
      .append($(`<a href="${url}">${itemTitle}</a>`))
  )

  $(`ul.${listClassName}`).append(listItems)
}

export { projectView, drawList }
