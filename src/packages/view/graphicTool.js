export function drawPath(ctx, points) {
  const startPoint = points[0]

  if (!ctx) {
    ctx = initContext()
  }

  ctx.beginPath()
  ctx.moveTo(startPoint.x, startPoint.y)

  for (let i = 1; i < points.length; i++) {
    const { x, y } = points[i]
    ctx.lineTo(x, y)
  }

  ctx.closePath()
  ctx.stroke()
}

export function getContext() {
  const canvas = $('canvas')[0]
  canvas.width = 2000
  canvas.height = 2000

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f00'
  ctx.translate(-3000, -3000)
  return ctx
}
