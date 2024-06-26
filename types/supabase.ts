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
          dimensions: number[]
          id: number
          images: string[]
          material: Database["public"]["Enums"]["materials"]
          size: Database["public"]["Enums"]["size"]
          status: boolean
          sub_material: Database["public"]["Enums"]["sub_materials"]
          sub_type: Database["public"]["Enums"]["sub_types"]
          title: string
          type: Database["public"]["Enums"]["types"]
          year: number
        }
        Insert: {
          description?: string | null
          dimensions: number[]
          id?: number
          images: string[]
          material: Database["public"]["Enums"]["materials"]
          size: Database["public"]["Enums"]["size"]
          status: boolean
          sub_material: Database["public"]["Enums"]["sub_materials"]
          sub_type: Database["public"]["Enums"]["sub_types"]
          title: string
          type: Database["public"]["Enums"]["types"]
          year: number
        }
        Update: {
          description?: string | null
          dimensions?: number[]
          id?: number
          images?: string[]
          material?: Database["public"]["Enums"]["materials"]
          size?: Database["public"]["Enums"]["size"]
          status?: boolean
          sub_material?: Database["public"]["Enums"]["sub_materials"]
          sub_type?: Database["public"]["Enums"]["sub_types"]
          title?: string
          type?: Database["public"]["Enums"]["types"]
          year?: number
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
      size: "small" | "medium" | "large" | "extra large"
      sub_materials: "combed wool" | "plain wool" | "thread" | "mixed"
      sub_types:
        | "wall textile"
        | "machine textile"
        | "minitextile"
        | "wall gobelin"
        | "3D"
        | "knotted 3D picture"
        | "framed picture"
        | "experimental"
        | "3D minitextile"
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
