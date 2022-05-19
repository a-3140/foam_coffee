import { onMounted, onUnmounted, ref } from 'vue';

export interface CursorCoordinates {
  x: number
  y: number
}

export const useCursorCoordinates = () => {
  const coordinates = ref<CursorCoordinates>({ x: 0, y: 0 })

  function getCoords(mouseEvent: MouseEvent) {
    coordinates.value = {
      x: mouseEvent.pageX,
      y: mouseEvent.pageY,
    }
  }

  onMounted(() => window.addEventListener('mousemove', getCoords))
  onUnmounted(() => window.removeEventListener('mousemove', getCoords))

  return coordinates
}
