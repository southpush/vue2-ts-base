<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        {{ count }}
        <v-btn @click="countAdd">test</v-btn>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref } from "@vue/composition-api";

export default defineComponent({
    components: {
        
    },
    setup: () => {

        const count: Ref<number> = ref(0);

        const countAdd = () => {
            count.value ++
        }

        return {
            count,
            countAdd
        }
    },
});
</script>
