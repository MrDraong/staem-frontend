<template>
    <div class="staemMediumBlue p-12">
        <v-row class="pb-20 w-full">
            <v-col class="text-white text-center" cols="6" sm="6" md="2">
                <v-text-field
                    label="Search"
                    height="10px"
                    color="#fff"
                    class="bg-custom-blue text-white"
                    dark
                    rounded
                ></v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="2" class="text-white">
                <v-row
                    ><p>Sorted By</p>
                    <v-select
                        class="bg-custom-blue text-white"
                        v-model="select"
                        height="10px"
                        :items="itemsFilter"
                        item-text="text"
                        item-value="value"
                        rounded
                    ></v-select
                ></v-row>
            </v-col>
        </v-row>
        <GameCard v-for="(item, index) of items" :key="index" :item="item" />

        <infinite-loading
            v-if="items.length"
            spinner="spiral"
            @infinite="infiniteScroll"
        ></infinite-loading>
    </div>
</template>

<script>
import supadb from '~/plugins/supadb'
export default {
    name: 'GameList',
    data() {
        return {
            items: [],
            page: 1,
            select: { text: 'Price', value: 'price' },
            itemsFilter: [
                { text: 'Price', value: 'price' },
                { text: 'Name', value: 'name' },
                { text: 'Platforms', value: 'platforms' },
            ],
        }
    },
    computed: {
        getPage() {
            return this.page
        },
    },
    created() {
        this.getGames()
    },

    methods: {
        async getGames() {
            const { data } = await supadb.from('steam').select('*').range(1, 10)
            this.items = data
        },
        infiniteScroll($state) {
            setTimeout(() => {
                supadb
                    .from('steam')
                    .select('*')
                    .range(this.page * 10, (this.page + 1) * 10)
                    .then((newItems) => {
                        if (newItems.data.length > 1) {
                            newItems.data.forEach((item) =>
                                this.items.push(item)
                            )
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                this.page++
            }, 500)
        },
    },
}
</script>
