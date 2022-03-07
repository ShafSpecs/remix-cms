
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_ANON_KEY
const supabaseKey = process.env.SUPABASE_SECRET_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseKey)