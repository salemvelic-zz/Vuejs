<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncremet({by: 100, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 100, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
                ...mapActions ([
                    'asyncIncremet',
                    'asyncDecrement'
                ])
        }
    }
</script>