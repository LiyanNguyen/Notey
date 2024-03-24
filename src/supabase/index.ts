import supabase from "../config/supabase"

export const GET_Notes = async (ascending: boolean, color: string) => {
  const { data, error } = await supabase
    .from('Note')
    .select()
    .order('rating', { ascending: ascending })
    .eq(color === 'all' ? '' : 'color', color === 'all' ? '' : color)
  
  return { data, error }
}

export const POST_NewNote = async (title: string, description: string, color: string, rating: number) => {
  const { data, error } = await supabase
    .from('Note')
    .insert({
      title: title,
      description: description,
      color: color,
      rating: rating,
    })
  
  return { data, error }
}

export const PUT_updateNote = async (id:string, title: string, description: string, color: string, rating: number) => {
  const { data, error } = await supabase
    .from('Note')
    .update({
      title: title,
      description: description,
      color: color,
      rating: rating,
    })
    .eq('id', id)

  return { data, error }
}

export const DELETE_deleteNote = async (id: string) => {
  const { data, error } = await supabase
    .from('Note')
    .delete()
    .eq('id', id)

  return { data, error }
}