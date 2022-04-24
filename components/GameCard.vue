<template>
    <v-card class="mb-10 noBorders noBackground">
        <v-row :align="align" no-gutters>
            <v-col class="col-5">
                <v-img
                    class="rounded-l-3xl"
                    height="230px"
                    :src="item.image"
                ></v-img>
            </v-col>
            <v-col class="col-5 bg-custom-blue-dark">
                <v-card-title class="text-white">
                    {{ item.title }}
                </v-card-title>
                <v-card-text class="text-gray-400">
                    {{ addTags(item.tags) }}
                </v-card-text>
            </v-col>
            <v-col class="col-2 bg-custom-blue-dark rounded-r-3xl">
                <v-icon class="staemLightBlue">
                    {{ getIcon(item.platforms) }}</v-icon
                >
                <p class="text-white text-2xl font-bold">${{ item.price }}</p>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addTags(tags) {
            return tags.join(', ')
        },
        getIcon(platforms) {
            if (platforms.includes('Windows')) {
                return 'mdi-microsoft-windows'
            }
            if (platforms.includes('Linux')) {
                return 'mdi-linux'
            }
            if (platforms.includes('Mac')) {
                return 'mdi-apple'
            }
            return 'mdi-alert-circle-outline'
        },
    },
}
</script>
