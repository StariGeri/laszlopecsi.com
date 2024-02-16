export interface ArtModel {
  id: number;
  title: { en: string; hu: string };
  year?: number;
  isAvailable: boolean;
  dimensions: { x: number; y: number; z?: number };
  type: { en: string; hu: string };
  material_1?: number | null;
  material_2?: number | null;
  images: string[];
}
