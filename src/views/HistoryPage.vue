<template>
  <div class="home">
    <div class="banner">
      <div class="image-overlay">
        <img src="../assets/images/image_slider.png" />
      </div>
      <div class="content-text">
        <h1>Enjoy Freedom Land</h1>
      </div>
    </div>

    <section>
      <div class="section-header">
        <h1 class="section-title">Weather History</h1>
        <div class="section-title-holder my-3">
          <span class="section-dot" style="margin: 7px"></span>
          <span class="section-dot" style="margin: 7px"></span>
          <span class="section-dot-bold" style="margin: 7px"></span>
          <span class="section-dot" style="margin: 7px"></span>
          <span class="section-dot" style="margin: 7px"></span>
        </div>
      </div>
      <div class="weather mx-6 mt-8">
        <div class="columns">
          <div class="column">
            <div class="history" v-for="item in history" :key="item.data">
              <p class="current">Current Time</p>
              <div class="columns">
                <div class="column">
                  <h1 class="cloud">{{ item.clouds.all }}&deg;C</h1>
                  <p class="desc">{{ item.weather[0].description }}</p>
                </div>
                <div class="column">
                  <ul class="desc-list">
                    <li>
                      City:
                      <span class="details-result"
                        >{{ item.name }}, {{ item.sys.country }}</span
                      >
                    </li>
                    <li>
                      Cloud:
                      <span class="details-result">{{
                        item.weather[0].description
                      }}</span>
                    </li>
                    <li>
                      Temperature:
                      <span class="details-result"
                        >{{ item.main.temp }}&deg;c</span
                      >
                    </li>
                    <li>
                      Wind:
                      <span class="details-result"
                        >{{ item.wind.deg }}&deg;</span
                      >
                    </li>
                    <li>
                      Wind Speed:
                      <span class="details-result"
                        >{{ item.wind.speed }} km/h</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HistoryPage",
  data() {
    return {
      history: "",
    };
  },
  created() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      this.history = JSON.parse(localStorage.getItem("history"));
      console.log(this.history);
    },
  },
};
</script>
<style>
.history {
  background: #fff;
  padding: 30px;
  margin-top: 30px;
}
</style>
