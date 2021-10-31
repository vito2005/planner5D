let ctx

export function init() {
  const canvas = $('canvas')[0]
  canvas.width = 2000
  canvas.height = 2000

  ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f00'
  ctx.translate(-3000, -3000)
}

export function moveToPoint(x, y) {
  ctx.moveTo(x, y)
}

export function beginPath() {
  ctx.beginPath()
}

export function drawPath(x, y) {
  ctx.lineTo(x, y)
}

export function endPath() {
  ctx.closePath()
  ctx.stroke()
}
