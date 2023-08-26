import { Ref, ref } from 'vue'

export type GameState = 'menu' | 'playing' | 'gameover'
export const currentGameState: Ref<GameState> = ref('menu')

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export const difficulty: Ref<Difficulty> = ref('beginner')
