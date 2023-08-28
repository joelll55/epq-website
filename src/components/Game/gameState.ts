import { Ref, ref } from 'vue'

export type GameState = 'menu' | 'playing' | 'gameover' | 'starting'
export const currentGameState: Ref<GameState> = ref('menu')

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
/**
 * The difficulty of the game
 */
export const difficulty: Ref<Difficulty> = ref('beginner')

/**
 * The time in milliseconds that the game will last
 */
export const gameTime: Ref<number> = ref(60000)

/**
 * The current score of the game
 */
export const score: Ref<number> = ref(0)

/**
 * The katex string of the current question
 */
export const currentQuestionKatex: Ref<string> = ref('')

/**
 * The answer to the current question
 */
export const currentQuestionAnswer: Ref<string> = ref('')

export const pregameUserHighScore: Ref<number> = ref(0)

export const pregameHighestScore: Ref<number> = ref(0)
