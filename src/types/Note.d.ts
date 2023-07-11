export type Note = {
  id: string
  title: string
  description: string
  rating: number
  color: 'blue' | 'red' | 'yellow' | 'green' | 'slate'
  createdAt: string
}