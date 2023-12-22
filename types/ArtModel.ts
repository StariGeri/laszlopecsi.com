export interface ArtModel {
  id: number;
  title: { en: string; hu: string };
  year?: number;
  isAvailable: boolean;
  dimensions: { x: number; y: number };
  type: { en: string; hu: string };
  material: { en: string; hu: string };
  images: string[];
}
