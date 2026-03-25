import { useEffect } from 'react'

type SwipeOptions = {
  onSwipeRight?: () => void
  onSwipeLeft?: () => void
  edgeThreshold?: number
  minSwipeDistance?: number
}

export function useSwipe({
  onSwipeRight,
  onSwipeLeft,
  edgeThreshold = 20,
  minSwipeDistance = 50,
}: SwipeOptions) {
  useEffect(() => {
    let startX = 0
    let startY = 0
    let fromEdge = false

    function handleTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      fromEdge = startX <= edgeThreshold
    }

    function handleTouchEnd(e: TouchEvent) {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const deltaX = endX - startX
      const deltaY = endY - startY

      // Nur horizontale Swipes berücksichtigen
      if (Math.abs(deltaX) < Math.abs(deltaY)) return
      if (Math.abs(deltaX) < minSwipeDistance) return

      if (deltaX > 0 && fromEdge && onSwipeRight) {
        onSwipeRight()
      } else if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft()
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeRight, onSwipeLeft, edgeThreshold, minSwipeDistance])
}