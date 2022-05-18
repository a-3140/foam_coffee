import { onMounted, onUnmounted, ref } from 'vue';

export interface CursorCoordinates {
  x: number
  y: number
}

export const useCursorCoordinates = () => {
  // state encapsulated and managed by the composable
  const coordinates = ref<CursorCoordinates>({ x: 0, y: 0 })

  // a composable can update its managed state over time.
  function getCoords(mouseEvent: MouseEvent) {
    coordinates.value = {
      x: mouseEvent.pageX,
      y: mouseEvent.pageY,
    }
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', getCoords))
  onUnmounted(() => window.removeEventListener('mousemove', getCoords))

  return coordinates
}
