<template>
    <v-row justify="space-between">
        <v-col class="col-6">
            <h1 class="w-24 font-bold text-lg text-white ml-8">STAEM</h1>
        </v-col>
        <v-col class="col-6">
            <button
                class="rounded-full bg-custom-blue w-32 text-white font-medium"
                @click="getData()"
            >
                <v-icon color="#fff" left>mdi-download</v-icon> Install
            </button>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'HeaderNav',
    methods: {
        async getData() {
            const { data } = await this.$supabase.from('steam').select('*')
            console.log('yo', data)
        },
    },
}
</script>
