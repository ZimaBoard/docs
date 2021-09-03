<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-row>
          <el-col style :span="18">
            <div style="padding: 14px">
              <el-row>
                <span>{{ title }}</span>
              </el-row>
              <el-row>
                <span>{{ description }}</span>
              </el-row>
              <el-row>
                <el-button type="primary" size="mini">Let's Go!</el-button>
                Diffcuty: <el-rate v-model="rate" disabled></el-rate>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6" style="height: 8rem">
            <img :src="img" />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
    props:{
        rate: Number,
        img: String,
        title: String,
        description: String,
    },
    computed:{
        imglink(){
            if(this.img){
                return this.img
            }else{
                return "/images/zimaboard/g4.jpeg"
            }
        }
    }
};
</script>

<style>
</style>