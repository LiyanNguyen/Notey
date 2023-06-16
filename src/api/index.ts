import supabase from "../config/supabase"

export const GET_Notes = async () => {
  const { data, error } = await supabase
    .from('Note')
    .select()
    .order('createdAt', { ascending: false })
  
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