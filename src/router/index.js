import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Camila Guerra | Portfolio',
      metaTags: [
        {
          name: 'description',
          content: "The home page of Camila Guerra's portfolio."
        },
        {
          property: 'og:description',
          content: "The home page of Camila Guerra's portfolio."
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Camila Guerra | About',
      metaTags: [
        {
          name: 'description',
          content: "About page of Camila Guerra's portfolio."
        },
        {
          property: 'og:description',
          content: "About page of Camila Guerra's portfolio."
        }
      ]
    }
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: {
      title: 'Camila Guerra | Work',
      metaTags: [
        {
          name: 'description',
          content: "My work page of Camila Guerra's portfolio."
        },
        {
          property: 'og:description',
          content: "My work page of Camila Guerra's portfolio."
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Camila Guerra | Contact',
      metaTags: [
        {
          name: 'description',
          content: "Contact page of Camila Guerra's portfolio."
        },
        {
          property: 'og:description',
          content: "Contact page of Camila Guerra's portfolio."
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if(!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  .forEach(tag => document.head.appendChild(tag))

  next()
})