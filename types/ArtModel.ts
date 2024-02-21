import { Json } from './supabase';

export interface ArtModel {
  id: number;
  title: string;
  year: number;
  status: boolean;
  dimensions: number[];
  type: string;
  sub_type: string;
  material: string;
  sub_material: string;
  images: string[];
  description?: string;
  size: string;
}
