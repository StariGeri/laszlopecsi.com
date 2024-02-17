export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      art: {
        Row: {
          description: string | null
          dimensions: Json
          id: number
          images: string[]
          isAvailable: boolean
          material_1: number | null
          material_2: number | null
          title: string
          type_1: number | null
          type_2: number | null
          year: number | null
        }
        Insert: {
          description?: string | null
          dimensions: Json
          id?: number
          images: string[]
          isAvailable: boolean
          material_1?: number | null
          material_2?: number | null
          title: string
          type_1?: number | null
          type_2?: number | null
          year?: number | null
        }
        Update: {
          description?: string | null
          dimensions?: Json
          id?: number
          images?: string[]
          isAvailable?: boolean
          material_1?: number | null
          material_2?: number | null
          title?: string
          type_1?: number | null
          type_2?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_art_type_2_fkey"
            columns: ["type_2"]
            isOneToOne: false
            referencedRelation: "type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_art_type_fkey"
            columns: ["type_1"]
            isOneToOne: false
            referencedRelation: "type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_arts_material_1_fkey"
            columns: ["material_1"]
            isOneToOne: false
            referencedRelation: "material"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_arts_material_2_fkey"
            columns: ["material_2"]
            isOneToOne: false
            referencedRelation: "material"
            referencedColumns: ["id"]
          }
        ]
      }
      material: {
        Row: {
          id: number
          materialName: string | null
          materialType: Database["public"]["Enums"]["materials"] | null
        }
        Insert: {
          id?: number
          materialName?: string | null
          materialType?: Database["public"]["Enums"]["materials"] | null
        }
        Update: {
          id?: number
          materialName?: string | null
          materialType?: Database["public"]["Enums"]["materials"] | null
        }
        Relationships: []
      }
      type: {
        Row: {
          id: number
          type: Database["public"]["Enums"]["types"]
          typeName: string
        }
        Insert: {
          id?: number
          type: Database["public"]["Enums"]["types"]
          typeName?: string
        }
        Update: {
          id?: number
          type?: Database["public"]["Enums"]["types"]
          typeName?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      materials: "wool" | "thread" | "mixed"
      types: "gobelin" | "textile" | "mixed" | "experimental" | "3d" | "picture"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
