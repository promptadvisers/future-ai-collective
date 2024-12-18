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
      applications: {
        Row: {
          ai_implementation_status: Database["public"]["Enums"]["ai_status"]
          company_name: string
          company_size: Database["public"]["Enums"]["company_size"]
          created_at: string
          email: string
          full_name: string
          id: string
          industry: Database["public"]["Enums"]["industry_type"]
          industry_other: string | null
          job_role: Database["public"]["Enums"]["job_role"]
          job_role_other: string | null
          linkedin_url: string
          motivation: string
          willing_to_share: boolean
        }
        Insert: {
          ai_implementation_status: Database["public"]["Enums"]["ai_status"]
          company_name: string
          company_size: Database["public"]["Enums"]["company_size"]
          created_at?: string
          email: string
          full_name: string
          id?: string
          industry: Database["public"]["Enums"]["industry_type"]
          industry_other?: string | null
          job_role: Database["public"]["Enums"]["job_role"]
          job_role_other?: string | null
          linkedin_url: string
          motivation: string
          willing_to_share: boolean
        }
        Update: {
          ai_implementation_status?: Database["public"]["Enums"]["ai_status"]
          company_name?: string
          company_size?: Database["public"]["Enums"]["company_size"]
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          industry?: Database["public"]["Enums"]["industry_type"]
          industry_other?: string | null
          job_role?: Database["public"]["Enums"]["job_role"]
          job_role_other?: string | null
          linkedin_url?: string
          motivation?: string
          willing_to_share?: boolean
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
      ai_status:
        | "Yes"
        | "No, but we plan to within the next 12 months"
        | "No, but interested in getting started"
      company_size:
        | "1-10 employees"
        | "11-50 employees"
        | "51-200 employees"
        | "201-500 employees"
        | "501+ employees"
      industry_type:
        | "Technology"
        | "Healthcare"
        | "Finance/Banking"
        | "E-commerce/Retail"
        | "Manufacturing"
        | "Professional Services"
        | "Other"
      job_role:
        | "CEO/Founder/Owner"
        | "C-Level Executive"
        | "VP/Director-Level"
        | "Senior Manager"
        | "Other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
