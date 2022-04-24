<template>
    <div class="staemMediumBlue p-12">
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
