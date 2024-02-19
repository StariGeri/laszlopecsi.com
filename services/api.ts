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

// call it here to avoid multiple connections
const supabase = connectToSupabase();

/**
 * @description Function to fetch the arts based on the search term
 * @returns All arts: ArtModel[]
 */
export const fetchAllArt = async (searchTerm = '') => {
  let query = supabase.from('art').select('*').order('title', { ascending: true });

  const searchParam = searchTerm.toLowerCase();

  if (searchParam && searchParam !== '') {
    query = query.ilike('title', `%${searchParam}%`);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data as ArtModel[];
};

// function to query the number of arts
export const fetchArtCount = async (searchTerm = '') => {
  let query = supabase.from('art').select('id');

  const searchParam = searchTerm.toLowerCase();

  if (searchParam && searchParam !== '') {
    query = query.ilike('title', `%${searchParam}%`);
  }

  const { data, error } = await query;

  if (error) throw error;

  if (!data || !data.length) return 0;

  return data.length;
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

/**
 * @description Function to fetch all the types that are used in the arts table
 * @returns All types: string[]
 */
export const fetchArtTypes = async () => {
  const { data, error } = await supabase
    .from('type')
    .select('type');

  // filter out the types so only one of each type is returned
  const uniqueTypes = data?.filter((type, index, self) => self.findIndex((t) => t.type === type.type) === index);
  
  if (error) throw error;

  return uniqueTypes?.map((type) => type.type) as string[];
};


/**
 * @description Function to fetch all the materials that are used in the arts table
 * @returns All materials: string[]
 */
export const fetchArtMaterials = async () => {
  const { data, error } = await supabase.from('material').select('materialType');

  if (error) throw error;

  return data?.map((material) => material.materialType) as string[];
};
