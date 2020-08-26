<template>
    <div id='Index'>
        <v-btn color='red darken-4' @click="goToLogin">去登录</v-btn>
        <div class="test"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import store from '../store/index'
import { dark } from '../plugins/vuetify/vuetify'

export default defineComponent({
    setup: () => {
        // 跳转到登录页
        const goToLogin = () => {
            console.log(dark)
        }


        return {
            goToLogin
        }
    }
})
</script>


<style lang='stylus' scoped>
.test
    width: 100px;
    height: 200px;
    border: solid 1px red;
    background: var(--v-primary-base);
</style>