<template>
    <div class="overlay" v-show="show" @click="show=false">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Overlay',
    props:{
        show:Boolean
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>