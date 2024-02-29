import { createClient } from '@supabase/supabase-js';

import { ArtModel } from '@/types/ArtModel';
import { Database } from '@/types/supabase';
import { FilterType } from '@/providers/FilterProvider';

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
export const fetchArts = async (searchTerm = '', filters: FilterType, offset = 0, limit = 10) => {
  let query = supabase.from('art').select('id,title,status,dimensions,year,images').order('title', { ascending: true });

  const searchParam = searchTerm.toLowerCase();

  if (searchParam && searchParam !== '') {
    query = query.ilike('title', `%${searchParam}%`);
  }

  // Filter the arts based on their status
  if (filters.status !== undefined) {
    query = query.eq('status', filters.status);
  }

  // Filter the arts based on their type
  if (filters.type.length > 0) {
    query = query.in('type', filters.type);
  }

  // Filter the arts based on their material
  if (filters.material.length > 0) {
    query = query.in('material', filters.material);
  }

  // Filter the arts based on their sizes
  if (filters.size.length > 0) {
    query = query.in('size', filters.size);
  }

  // Filter the arts based on their year of creation
  if (filters.yearRange[0] !== 0 || filters.yearRange[1] !== 0) {
    query = query.gte('year', filters.yearRange[0]).lte('year', filters.yearRange[1]);
  }

  query = query.range(offset, offset + limit - 1);

  const { data, error } = await query;

  if (error) throw error;

  return data as ArtModel[];
};

/**
 * @description Function to fetch the count of arts based on the search term and filters
 * @returns Number of arts: number
 */
export const fetchArtCount = async (searchTerm = '', filters: FilterType) => {
  let query = supabase.from('art').select('id');

  const searchParam = searchTerm.toLowerCase();

  if (searchParam && searchParam !== '') {
    query = query.ilike('title', `%${searchParam}%`);
  }

  // Filter the arts based on their status
  if (filters.status !== undefined) {
    query = query.eq('status', filters.status);
  }

  // filter the arts based on their type
  if (filters.type.length > 0) {
    query = query.in('type', filters.type);
  }

  // Filter the arts based on their material
  if (filters.material.length > 0) {
    query = query.in('material', filters.material);
  }

  // Filter the arts based on their sizes
  if (filters.size.length > 0) {
    query = query.in('size', filters.size);
  }

  // Filter the arts based on their year of creation
  if (filters.yearRange[0] !== 0 && filters.yearRange[1] !== 0) {
    query = query.gte('year', filters.yearRange[0]).lte('year', filters.yearRange[1]);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data?.length as number;
};

/**
 * @description Function to fetching single art by id
 * @param id number
 * @returns Single art: ArtModel
 */
export const fetchArtById = async (id: number) => {
  const { data, error } = (await supabase.from('art').select('*').eq('id', id).single()) as { data: ArtModel; error: any };

  if (error) throw error;
  return data as ArtModel;
};

/**
 * @description Function to fetch the arts for the carousel
 * @returns Carousel items
 */

export const fetchCarouselItems = async (ids: number[]) => {
  const { data, error } = await supabase.from('art').select('*').in('id', ids);

  if (error) throw error;

  return data as ArtModel[];
};

/**
 * @description Function to fetch all the types for filtering
 * @returns All types
 */
export const fetchArtTypes = async () => {
  const { data, error } = await supabase.from('art').select('type');

  if (error) throw error;

  const uniqueTypes = Array.from(new Set(data.map((art: { type: string }) => art.type)));

  return uniqueTypes;
};

/**
 * @description Function to fetch all the materials that are used in the arts table
 * @returns All materials
 */
export const fetchArtMaterials = async () => {
  const { data, error } = await supabase.from('art').select('material');

  if (error) throw error;

  // make a set of unique materials, and return it as an array
  // the material field is a string, so we can directly add it to the set

  const uniqueMaterials = Array.from(new Set(data.map((art: { material: string }) => art.material)));

  return uniqueMaterials;
};
