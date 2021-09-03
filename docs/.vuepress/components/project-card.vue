<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-row class="project-card">
          <el-col style :span="18">
            <div style="padding: 14px">
              <el-row>
                <span>{{ title }}</span>
              </el-row>
              <br />
              <el-row>
                <span>{{ description }}</span>
              </el-row>
              <br />
              <el-row>
                <el-col :span="6">
                  <el-button type="primary" size="mini">Let's Go!</el-button>
                </el-col>
                <el-col :span="18">
                  <el-rate
                    v-model="rate"
                    :texts="texts"
                    show-text
                    disabled
                  ></el-rate>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 100%; height: 100%"
              :src="imgurl"
              fit="cover"
            ></el-image>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    rate: Number,
    img: String,
    title: String,
    description: String,
  },
  data() {
    return {
      texts: [
        "SUPER EASY",
        "RELATIVELY EASY",
        "EASY",
        "INTERMEDIATE",
        "ADVANCED(ish)",
      ],
    };
  },
  computed: {
    imgurl() {
      if (this.img) {
        return this.img;
      } else {
        return "/images/zimaboard/g4.jpeg";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  height: 8rem;
}
.el-row {
  margin-bottom: auto;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>