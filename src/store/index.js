import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
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
    }
})
