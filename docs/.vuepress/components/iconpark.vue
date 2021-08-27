<template>
<icon-park :type="type" :size="size" :theme="theme"/>
</template>
<script>
import {IconPark} from '@icon-park/vue-next/es/all';

export default {
    components: {
        IconPark
    },
    
    props:{
        type: String,
        size: Number,
        theme:{
            type: String,
            default: "filled",
        }
    }
}
</script>