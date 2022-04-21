import { createClient } from '@supabase/supabase-js'
// import config from '~/nuxt.config'

const supabase = createClient(
    'https://gqkuommdmfzmwkzdewma.supabase.co',
    process.env.ANON_KEY /* config.privateRuntimeConfig.supaToken */,
    {
        headers: {
            Authorization:
                process.env
                    .AUTHORIZATION_KEY /* config.privateRuntimeConfig.supaAuthorization */,
        },
    }
)

export default (context, inject) => {
    inject('supabase', supabase)
}
