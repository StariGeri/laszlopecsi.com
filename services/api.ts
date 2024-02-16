import { createClient } from '@supabase/supabase-js';
import { ArtModel } from '@/types/ArtModel';
import { Database } from '@/types/supabase';

/**
 * @description Function to connect to Supabase database
 * @returns SupabaseClient
 */
export const connectToSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient<Database>(supabaseUrl!, supabaseKey!);

  return supabase;
};

/**
 * @description Function to fetch every art
 * @returns All arts: ArtModel[]
 */
export const fetchAllArt = async () => {
  const supabase = connectToSupabase();

  const { data, error } = (await supabase.from('art').select('*')) as { data: ArtModel[]; error: any };

  if (error) throw error;

  return data;
};

/**
 * @description Function to fetching single art by id
 * @param id number
 * @returns Single art: ArtModel
 */
export const fetchArtById = async (id: number) => {
  const supabase = connectToSupabase();

  const { data, error } = (await supabase.from('arts').select('*').eq('id', id).single()) as { data: ArtModel; error: any };

  if (error) throw error;
  return data;
};
