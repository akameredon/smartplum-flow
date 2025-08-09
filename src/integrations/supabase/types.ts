export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      entries: {
        Row: {
          created_at: string
          id: string
          num_plays: number
          raffle_id: string
          total_amount: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          num_plays: number
          raffle_id: string
          total_amount: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          num_plays?: number
          raffle_id?: string
          total_amount?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entries_raffle_id_fkey"
            columns: ["raffle_id"]
            isOneToOne: false
            referencedRelation: "raffles"
            referencedColumns: ["id"]
          },
        ]
      }
      model_pricing: {
        Row: {
          created_at: string
          id: string
          input_price_per_million: number
          model_name: string
          output_price_per_million: number
        }
        Insert: {
          created_at?: string
          id?: string
          input_price_per_million: number
          model_name: string
          output_price_per_million: number
        }
        Update: {
          created_at?: string
          id?: string
          input_price_per_million?: number
          model_name?: string
          output_price_per_million?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          wallet_balance: number
        }
        Insert: {
          id: string
          updated_at?: string | null
          wallet_balance?: number
        }
        Update: {
          id?: string
          updated_at?: string | null
          wallet_balance?: number
        }
        Relationships: []
      }
      prompts: {
        Row: {
          created_at: string
          id: string
          model_name: string
          optimized_cost: number | null
          optimized_prompt: string | null
          optimized_tokens: number | null
          original_cost: number | null
          original_prompt: string
          original_tokens: number | null
          savings_amount: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          model_name: string
          optimized_cost?: number | null
          optimized_prompt?: string | null
          optimized_tokens?: number | null
          original_cost?: number | null
          original_prompt: string
          original_tokens?: number | null
          savings_amount?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          model_name?: string
          optimized_cost?: number | null
          optimized_prompt?: string | null
          optimized_tokens?: number | null
          original_cost?: number | null
          original_prompt?: string
          original_tokens?: number | null
          savings_amount?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      raffles: {
        Row: {
          created_at: string
          end_time: string
          id: string
          prize_amount: number | null
          start_time: string
          status: Database["public"]["Enums"]["raffle_status"]
          total_pot: number
          winner_email: string | null
          winner_id: string | null
        }
        Insert: {
          created_at?: string
          end_time: string
          id?: string
          prize_amount?: number | null
          start_time?: string
          status?: Database["public"]["Enums"]["raffle_status"]
          total_pot?: number
          winner_email?: string | null
          winner_id?: string | null
        }
        Update: {
          created_at?: string
          end_time?: string
          id?: string
          prize_amount?: number | null
          start_time?: string
          status?: Database["public"]["Enums"]["raffle_status"]
          total_pot?: number
          winner_email?: string | null
          winner_id?: string | null
        }
        Relationships: []
      }
      service_requests: {
        Row: {
          address: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          preferred_date: string | null
          preferred_time: string | null
          service_type: string
          status: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          preferred_date?: string | null
          preferred_time?: string | null
          service_type: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          preferred_date?: string | null
          preferred_time?: string | null
          service_type?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string
          description: string
          duration: string | null
          features: string[] | null
          id: string
          image_url: string | null
          is_emergency: boolean | null
          name: string
          price_range: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          duration?: string | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          is_emergency?: boolean | null
          name: string
          price_range?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          duration?: string | null
          features?: string[] | null
          id?: string
          image_url?: string | null
          is_emergency?: boolean | null
          name?: string
          price_range?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          customer_name: string
          id: string
          is_featured: boolean | null
          location: string | null
          rating: number | null
          review_text: string
          service_type: string
        }
        Insert: {
          created_at?: string
          customer_name: string
          id?: string
          is_featured?: boolean | null
          location?: string | null
          rating?: number | null
          review_text: string
          service_type: string
        }
        Update: {
          created_at?: string
          customer_name?: string
          id?: string
          is_featured?: boolean | null
          location?: string | null
          rating?: number | null
          review_text?: string
          service_type?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          brand_voice: string | null
          company_name: string | null
          created_at: string | null
          id: string
          name: string | null
          target_audience: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          brand_voice?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          name?: string | null
          target_audience?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          brand_voice?: string | null
          company_name?: string | null
          created_at?: string | null
          id?: string
          name?: string | null
          target_audience?: string | null
          updated_at?: string | null
          user_id?: string
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
      raffle_status: "active" | "drawing" | "completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      raffle_status: ["active", "drawing", "completed"],
    },
  },
} as const
