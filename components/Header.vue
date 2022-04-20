<template>
    <v-row no-gutters>
        <v-col md="6">
            <h1 class="w-24 font-bold text-lg">STAEM</h1>
        </v-col>
        <v-col md="6" align="end">
            <button
                class="rounded-full bg-custom-blue w-32 text-white font-medium"
            >
                <v-icon color="#fff" left>mdi-download</v-icon> Install
            </button>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'HeaderNav',
}
</script>
