import { createClient } from '@supabase/supabase-js'

export default createClient(
    'https://gqkuommdmfzmwkzdewma.supabase.co',
    process.env.SUPA_KEY,
    {
        headers: {
            Authorization: process.env.SUPA_AUTHORIZATION,
        },
    }
)
