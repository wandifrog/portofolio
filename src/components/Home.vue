<template>
    <div>
        <div class="header">
            <div class="header__title">wandifrog@gmail.com</div>
            <div class="header__subtitle">Telephone: 08161325941 (Wandi)</div>
        </div>
        <div class="main">
            <div class="card" v-for="(project, index) in projects" :key="project.title">
                <router-link :to="project.read">
                    <div class="card__bg" :style="project.image">
                        <div class="title">{{project.title}}</div>
                    </div>
                </router-link>
                <div class="card__button">
                    <router-link :to="project.read"
                     class="button">read</router-link>
                    <a target="_blank" rel="noopener" :href="project.link"
                      class="button">explore</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style scoped>
.header {
  margin: 40px auto;
  width: 100%;
  text-align: center;
}

.header__title {
  font-size: 30px;
  font-weight: 300;
  opacity: 0.87;
}

.header__subtitle {
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500;
  color: #03a9f4;
}

.main {
  max-width: 1060px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  position: relative;
  width: 440px;
  margin: 0 20px 40px;
  border-bottom-left-radius: 15px;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.card__bg {
  position: relative;
  background-color: #f5f5f5;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 220px;
  cursor: pointer;
  transition: 300ms ease;
}
@media screen and (min-width: 1024px) {
  .card__bg:hover {
    background-size: 110%;
    opacity: 0.8;
  }
}

.card__bg .title {
  position: absolute;
  display: inline-block;
  margin: 0 11px;
  bottom: 7px;
  color: white;
  font-weight: 500;
  font-size: 25px;
}

.card__button {
  display: flex;
  position: relative;
  height: 50px;
  justify-content: flex-end;
  margin-right: 10px;
}

.card__button .button {
  cursor: pointer;
  padding: 0 12px;
  margin-left: 4px;
  margin-top: 10px;
  line-height: 30px;
  height: 30px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #03a9f4;
  user-select: none;
}
@media screen and (min-width: 1024px) {
  .card__button .button:hover {
    background-color: #e1f5fe;
  }
  .card__button .button:active {
    transform: translateY(1px);
  }
}

/* ipad air */
@media screen and (max-width: 1024px) {
  .header {
    margin: 30px auto;
  }
  .main {
    max-width: 960px;
    margin: 0 auto;
  }
  .card__button .button {
    background-color: #e1f5fe;
    margin-left: 10px;
    border-radius: 0;
  }
}
/* mobile device */
@media screen and (max-width: 450px) {
  .header__title {
    font-size: 8vw;
  }
  .header__subtitle {
    font-size: 4.53334vw;
    color: #212121;
  }
  .card {
    width: 90%;
    margin: 0 20px 28px;
  }
  .card__bg {
    height: 47vw;
  }
  .card__bg .title {
    position: relative;
    font-size: 20px;
    background-color: #fafafa;
    color: #212121;
    padding: 1px;
    top: 7px;
  }
  .card__button .button {
    color: #fafafa;
    background-color: #212121;
  }
}
</style>
