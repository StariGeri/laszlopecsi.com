export interface ArtModel {
  id: number;
  title: { en: string; hu: string };
  year?: number;
  isAvailable: boolean;
  dimensions: { x: number; y: number; z?: number };
  type_1: number | null
  type_2: number | null
  material_1?: number | null;
  material_2?: number | null;
  images: string[];
  description?: string;
}
