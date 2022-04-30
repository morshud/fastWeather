<template>
  <div class="home">
    <div class="body">
      <div class="banner">
        <div class="image-overlay">
          <img src="../assets/images/image_slider.png" />
        </div>
        <div class="content-text">
          <h1>Enjoy Freedom Land</h1>
        </div>
      </div>
      <div class="search-wrapper is-flex is-justify-content-space-around">
        <div class="card mx-5 pb-6" style="width: 75%">
          <header>
            <p class="card-header-title has-text-centered">
              Get City Weather Details
            </p>
          </header>
          <div class="card-content">
            <div class="search-form is-flex is-justify-content-space-around">
              <div>
                <input
                  v-model="cityName"
                  class="form-control"
                  @keyup="showCity"
                  placeholder="Enter city name"
                  autoComplete="on"
                />
                <button
                  @click="showWeather"
                  class="button is-primary ml-5"
                  style="border-radius: 50%"
                >
                  <span class="icon">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>

                <ul v-show="isOpen" class="autocomplete-results">
                  <li
                    v-for="(result, i) in results"
                    :key="i"
                    @click="setResult(result)"
                    class="autocomplete-result"
                  >
                    {{ result.name }}, {{ result.country }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="section-header">
          <h1 class="section-title">See latest vacation ideas</h1>
          <div class="section-title-holder my-3">
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot-bold" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
          </div>
        </div>
        <div class="section-body mx-6 my-3">
          <div class="columns is-flex is-justify-content-space-around">
            <div class="column">
              <div class="image image-wrapper">
                <img src="../assets/images/image_idea_1.png" />
                <div class="is-flex is-justify-content-space-around">
                  <div class="placeholder">
                    <div class="content">Beachfront Escapes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="image image-wrapper">
                <img src="../assets/images/image_idea_2.png" />
                <div class="is-flex is-justify-content-space-around">
                  <div class="placeholder">
                    <div class="content">Group Holidays</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="image image-wrapper">
                <img src="../assets/images/image_idea_3.png" />
                <div class="is-flex is-justify-content-space-around">
                  <div class="placeholder">
                    <div class="content">City Breaks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style="margin-top: 10%">
        <div class="section-header">
          <h1 class="section-title">Recent holiday locations</h1>
          <div class="section-title-holder mt-3">
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot-bold" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
          </div>
        </div>
        <div class="section-body mx-8 my-3">
          <div class="is-justify-content-space-around">
            <div class="columns">
              <div class="column">
                <div class="media" style="background: #fff">
                  <div class="media-left">
                    <div class="slider-image">
                      <img :src="currentImage" />
                    </div>
                    <div class="thumbnail">
                      <div
                        class="thumbnail-images"
                        v-for="(image, index) in images"
                        :key="image.id"
                      >
                        <img
                          :src="image.thumb"
                          style="cursor: pointer"
                          :class="[
                            'thumbnail-image',
                            activeImage == index ? 'active' : '',
                          ]"
                          @click="activateImage(index)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="media-content">
                    <div class="media-content-title">
                      <h1>Thalie 5</h1>
                    </div>
                    <div class="media-content-body">
                      <p>
                        Thalie5 is located on the exclusive Belle Rivier estate,
                        which is home to a several Luxury Retreats' finest villa
                        in Mauriatius.
                      </p>
                    </div>
                    <div class="media-content-icons">
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Kings Bed"
                      >
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/000000/bed.png"
                        />
                        <span class="ml-2">3</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Bathtube"
                      >
                        <img
                          src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bathtub-massage-and-spa-therapy-kosonicon-solid-kosonicon-2.png"
                        />
                        <span class="ml-2">5</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Beachfront"
                      >
                        <img
                          src="https://img.icons8.com/wired/64/000000/beach.png"
                        />
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Swimming Pool"
                      >
                        <img
                          src="https://img.icons8.com/glyph-neue/25/000000/swimming-pool.png"
                        />
                      </span>
                    </div>
                    <div class="media-content-footer">
                      <button
                        class="button is-primary is-rounded"
                        style="text-transform: uppercase; font-size: 15px"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media" style="background: #fff">
                  <div class="media-left">
                    <div class="slider-image">
                      <img :src="currentImage" />
                    </div>
                    <div class="thumbnail">
                      <div
                        class="thumbnail-images"
                        v-for="(image, index) in images"
                        :key="image.id"
                      >
                        <img
                          :src="image.thumb"
                          style="cursor: pointer"
                          :class="[
                            'thumbnail-image',
                            activeImage == index ? 'active' : '',
                          ]"
                          @click="activateImage(index)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="media-content">
                    <div class="media-content-title">
                      <h1>Montage Kapalua</h1>
                    </div>
                    <div class="media-content-body">
                      <p>
                        Located only in jaunt from Kahului airport, you'll be
                        greeted by an easy and scenic drive along the West Maui
                        Mountains and crystal.
                      </p>
                    </div>
                    <div class="media-content-icons">
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Kings Bed"
                      >
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/000000/bed.png"
                        />
                        <span class="ml-2">1</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Bathtube"
                      >
                        <img
                          src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bathtub-massage-and-spa-therapy-kosonicon-solid-kosonicon-2.png"
                        />
                        <span class="ml-2">1</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Beachfront"
                      >
                        <img
                          src="https://img.icons8.com/wired/64/000000/beach.png"
                        />
                      </span>
                    </div>
                    <div class="media-content-footer">
                      <button
                        class="button is-primary is-rounded"
                        style="text-transform: uppercase; font-size: 15px"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="media" style="background: #fff">
                  <div class="media-left">
                    <div class="slider-image">
                      <img :src="currentImage" />
                    </div>
                    <div class="thumbnail">
                      <div
                        class="thumbnail-images"
                        v-for="(image, index) in images"
                        :key="image.id"
                      >
                        <img
                          :src="image.thumb"
                          style="cursor: pointer"
                          :class="[
                            'thumbnail-image',
                            activeImage == index ? 'active' : '',
                          ]"
                          @click="activateImage(index)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="media-content">
                    <div class="media-content-title">
                      <h1>Casa Del Agua</h1>
                    </div>
                    <div class="media-content-body">
                      <p>
                        After a breakfast catered to your taste and served at
                        your leisure, relax in a hammock under the shade of palm
                        tree or let the.
                      </p>
                    </div>
                    <div class="media-content-icons">
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="King Bed"
                      >
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/000000/bed.png"
                        />
                        <span class="ml-2">4</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Bathtube"
                      >
                        <img
                          src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bathtub-massage-and-spa-therapy-kosonicon-solid-kosonicon-2.png"
                        />
                        <span class="ml-2">4</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Beachfront"
                      >
                        <img
                          src="https://img.icons8.com/wired/64/000000/beach.png"
                        />
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Swimming Pool"
                      >
                        <img
                          src="https://img.icons8.com/glyph-neue/25/000000/swimming-pool.png"
                        />
                      </span>
                    </div>
                    <div class="media-content-footer">
                      <button
                        class="button is-primary is-rounded"
                        style="text-transform: uppercase; font-size: 15px"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media" style="background: #fff">
                  <div class="media-left">
                    <div class="slider-image">
                      <img :src="currentImage" />
                    </div>
                    <div class="thumbnail">
                      <div
                        class="thumbnail-images"
                        v-for="(image, index) in images"
                        :key="image.id"
                      >
                        <img
                          :src="image.thumb"
                          style="cursor: pointer"
                          :class="[
                            'thumbnail-image',
                            activeImage == index ? 'active' : '',
                          ]"
                          @click="activateImage(index)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="media-content">
                    <div class="media-content-title">
                      <h1>Casa Jagua</h1>
                    </div>
                    <div class="media-content-body">
                      <p>
                        Sleek sophisticated like the animal for which it has
                        been named, Casa Jagua is an immaculate tropical luxury
                        villa located.
                      </p>
                    </div>
                    <div class="media-content-icons">
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Kings Bed"
                      >
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/000000/bed.png"
                        />
                        <span class="ml-2">4</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Bathtube"
                      >
                        <img
                          src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bathtub-massage-and-spa-therapy-kosonicon-solid-kosonicon-2.png"
                        />
                        <span class="ml-2">4</span>
                      </span>
                      <span
                        class="icon has-tooltip-right"
                        data-tooltip="Swimming Pool"
                      >
                        <img
                          src="https://img.icons8.com/glyph-neue/25/000000/swimming-pool.png"
                        />
                      </span>
                    </div>
                    <div class="media-content-footer">
                      <button
                        class="button is-primary is-rounded"
                        style="text-transform: uppercase; font-size: 15px"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 10%">
        <div class="section-header">
          <h1 class="section-title">Why we are different</h1>
          <div class="section-title-holder mt-3">
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot-bold" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
            <span class="section-dot" style="margin: 7px"></span>
          </div>
        </div>
        <div class="section-body mx-8 my-3">
          <div class="columns">
            <div class="column has-text-centered">
              <div class="top-icon is-flex is-justify-content-center">
                <div class="icon-wrapper">
                  <i class="mdi mdi-content-cut"></i>
                </div>
              </div>
              <div class="section-content-text">
                <h2 class="mb-4">Tailor-Made Package</h2>
                <p>
                  When it comes to delivering the best planned holiday package
                  to you, we strive to exceed your expectations. For us, it has
                  to be a spot-on. We do what we do in the ideal way possible.
                </p>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="top-icon is-flex is-justify-content-center">
                <div class="icon-wrapper">
                  <i class="mdi mdi-calendar-clock-outline"></i>
                </div>
              </div>
              <div class="section-content-text">
                <h2 class="mb-4">Best Experience</h2>
                <p>
                  At Purplerain Holiday, we choose to put forth an essence of
                  our own expertise and firsthand experience into our services
                  and method of planning.
                </p>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="top-icon is-flex is-justify-content-center">
                <div class="icon-wrapper">
                  <i class="mdi mdi-diamond-stone"></i>
                </div>
              </div>
              <div class="section-content-text">
                <h2 class="mb-4">Exquisite Service</h2>
                <p>
                  From the first moment you make the first call to en-quiry, our
                  service are geared up. From the time booking, to your stay and
                  well after the trip as well, we will guide you and be at your
                  back
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div class="footer-background">
        <img
          src="../assets/images/image_footer.png"
          style="position: absolute; top: 390%; z-index: -1"
        />
      </div>
    </footer>
    <!-- Modal Component -->
    <modal-dialog
      :showModal="showModal"
      :title="weatherResult"
      :cloud="cloud"
      :country="country"
      @close-modal="closeModal"
    >
      <div class="weather">
        <p class="current">Current Time</p>
        <div class="columns">
          <div class="column">
            <h1 class="cloud">{{ cloud }}&deg;C</h1>
            <p class="desc">{{ cloudDesc }}</p>
          </div>
          <div class="column">
            <ul class="desc-list">
              <li>
                Cloud: <span class="details-result">{{ cloudDesc }}</span>
              </li>
              <li>
                Temperature:
                <span class="details-result">{{ temperature }}&deg;c</span>
              </li>
              <li>
                Wind: <span class="details-result">{{ wind }}&deg;</span>
              </li>
              <li>
                Wind Speed:
                <span class="details-result">{{ windSpeed }} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import ModalDialog from "@/components/modal/Modal.vue";
import axios from "axios";

export default {
  name: "HomeView",
  // Component Registration
  components: {
    ModalDialog,
  },
  data() {
    return {
      images: [
        {
          id: "1",
          big: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-natasha-bardaran-3-1607305889.jpg",
          thumb:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-natasha-bardaran-3-1607305889.jpg",
        },
        {
          id: "2",
          big: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*",
          thumb:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*",
        },
        {
          id: "3",
          big: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
          thumb:
            "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        },
      ],
      activeImage: 0,
      showModal: false,
      weatherResult: "",
      cloud: "",
      temperature: "",
      wind: "",
      windSpeed: "",
      cloudDesc: "",
      country: "",
      results: [],
      history: [],
      isOpen: false,
      cityName: "",
      showCities: "",
    };
  },
  computed: {
    // Current Active Image
    currentImage() {
      return this.images[this.activeImage].big;
    },
  },
  methods: {
    // Active Image
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    showCity() {
      // Getting City List
      axios
        .get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&limit=5&appid=ae03cfda7dc6e3020c4d7289989e3844`
        )
        .then((res) => {
          {
            // Display city List
            this.isOpen = true;
            this.results = res.data;
          }
        });
    },
    // Send City Result to CityName Model
    setResult(result) {
      this.cityName = `${result.name}, ${result.country}`;
      this.isOpen = false;
    },
    // Show Weather Result
    showWeather() {
      // convert cityname and country code to array with string method split
      let arr = this.cityName.split(",");
      // Getting city longitude and Latitude Result with city name and country code
      axios
        .get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]}&limit=5&appid=ae03cfda7dc6e3020c4d7289989e3844`
        )
        .then((res) => {
          {
            let result = res.data[0];
            let longitude = result.lon;
            let latitude = result.lat;
            // Getting Weather Result with city Longitude and Latitude
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ae03cfda7dc6e3020c4d7289989e3844`
              )
              .then((res) => {
                this.showModal = true;
                this.weatherResult = res.data;
                this.cloud = res.data.clouds.all;
                this.cloudDesc = res.data.weather[0].description;
                this.country = res.data.sys.country;
                this.temperature = res.data.main.temp;
                this.wind = res.data.wind.deg;
                this.windSpeed = res.data.wind.speed;
                // creating new array es6
                this.history = [...this.history, res.data];
                // Sending array to local Storage
                localStorage.setItem("history", JSON.stringify(this.history));
              });
          }
        });
    },
    // closing modal
    closeModal() {
      // Setting show modal to false
      this.showModal = false;
    },
  },
};
</script>
<style>
.cloud {
  font-size: 5em;
  color: #000;
}
p.current {
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  margin-top: -16px;
}
p.desc {
  color: #000;
  text-transform: capitalize;
  font-size: 20px;
}
ul.desc-list li {
  padding: 10px 5px;
  border-top: 1px solid #000;
  color: #000;
}
span.details-result {
  font-weight: 600;
}

.swiper {
  width: 22.35%;
  margin-left: 0px;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 30%;
  width: 20%;
}

.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}

.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}

.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
</style>
