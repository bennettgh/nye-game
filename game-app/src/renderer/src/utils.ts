export function calculateTargetPosition(elementRef) {
  if (elementRef.current) {
    const { left, top, width, height } = elementRef.current.getBoundingClientRect()
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    return {
      x: left - centerX + width / 2,
      y: top - centerY + height / 2
    }
  }
  return { x: 0, y: 0 }
}

export function getAdaptiveFontSize(text: string) {
  const maxSize = 2
  const minSize = 0.75
  const shortTextThreshold = 0
  const longTextThreshold = 100

  if (text.length <= shortTextThreshold) {
    return `${maxSize}rem`
  }

  // Linear interpolation between maxSize and minSize
  const scale =
    maxSize -
    ((text.length - shortTextThreshold) / (longTextThreshold - shortTextThreshold)) *
      (maxSize - minSize)
  // Clamp the result to not go below minSize
  return `${Math.max(minSize, scale)}rem`
}
