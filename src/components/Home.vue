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
                    <router-link :to="project.read">
                        <div class="button">read</div>
                    </router-link>
                    <a target="_blank" :href="project.link">
                        <div class="button">explore</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

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
.card__bg:hover {
  background-size: 110%;
  opacity: 0.8;
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
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #03a9f4;
  user-select: none;
}
.card__button .button:hover {
  background-color: #e1f5fe;
}
.card__button .button:active {
  transform: translateY(1px);
}

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
  }
}
@media screen and (max-width: 700px) {
  .header__title {
    font-size: 8vw;
  }
  .header__subtitle {
    font-size: 4.53334vw;
  }
  .card {
    width: 90%;
    margin: 0 20px 28px;
  }
  .card__bg {
    height: 150px;
  }
  .card__bg .title {
    position: relative;
    font-size: 20px;
    background-color: #fafafa;
    color: #212121;
    padding: 1px;
    top: 7px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Enterkomputer",
          read: "/enterkomputer",
          link: "https://enter-komputer.firebaseapp.com/",
          image: "background-image: url(src/assets/bg09.jpg)"
        },
        {
          title: "Chat App",
          read: "/chatapp",
          link: "https://chat-62fb2.firebaseapp.com/",
          image: "backgroundImage: url(src/assets/bg11.jpg)"
        },
        {
          title: "SMS Gateway",
          read: "/smsgateway",
          link: "https://wandi-frog.firebaseapp.com/smsgateway/",
          image: "backgroundImage: url(src/assets/bg10.jpg)"
        },
        {
          title: "T9 Keyboard (Vue)",
          read: "/t9vue",
          link: "https://wandi-frog.firebaseapp.com/t9vue/",
          image: "backgroundImage: url(src/assets/bg06.jpg)"
        },
        {
          title: "Pegipegi (Mobile)",
          read: "/pegipegi",
          link: "https://wandi-frog.firebaseapp.com/pegipegi",
          image: "backgroundImage: url(src/assets/bg05.jpg)"
        },
        {
          title: "Firebase Database (CRUD)",
          read: "/crud",
          link: "https://crud-52b88.firebaseapp.com/input",
          image: "backgroundImage: url(src/assets/bg04.jpg)"
        },
        {
          title: "PSU Calculator (Mobile)",
          read: "/psucalc",
          link: "#",
          image: "backgroundImage: url(src/assets/bg07.jpg)"
        },
        {
          title: "Pantau Tiket",
          read: "/pantautiket",
          link: "#",
          image: "backgroundImage: url(src/assets/bg08.jpg)"
        }
      ]
    };
  }
};
</script>
