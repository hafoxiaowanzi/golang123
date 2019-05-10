import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _135ba048 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _826e85c4 = () => import('..\\pages\\vote\\index.vue' /* webpackChunkName: "pages\\vote\\index" */).then(m => m.default || m)
const _389008a2 = () => import('..\\pages\\links.vue' /* webpackChunkName: "pages\\links" */).then(m => m.default || m)
const _6c3e1f32 = () => import('..\\pages\\timeline\\index.vue' /* webpackChunkName: "pages\\timeline\\index" */).then(m => m.default || m)
const _0fbf1592 = () => import('..\\pages\\signup.vue' /* webpackChunkName: "pages\\signup" */).then(m => m.default || m)
const _3f3f2fbf = () => import('..\\pages\\book\\index.vue' /* webpackChunkName: "pages\\book\\index" */).then(m => m.default || m)
const _d75c72c8 = () => import('..\\pages\\rank\\index.vue' /* webpackChunkName: "pages\\rank\\index" */).then(m => m.default || m)
const _44bdf89d = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages\\admin\\index" */).then(m => m.default || m)
const _09ae81c8 = () => import('..\\pages\\signin.vue' /* webpackChunkName: "pages\\signin" */).then(m => m.default || m)
const _18b874fa = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages\\about" */).then(m => m.default || m)
const _5f49da42 = () => import('..\\pages\\book\\create.vue' /* webpackChunkName: "pages\\book\\create" */).then(m => m.default || m)
const _bd453c2c = () => import('..\\pages\\verify\\mail.vue' /* webpackChunkName: "pages\\verify\\mail" */).then(m => m.default || m)
const _934a03e2 = () => import('..\\pages\\user\\edit.vue' /* webpackChunkName: "pages\\user\\edit" */).then(m => m.default || m)
const _12f340be = () => import('..\\pages\\topic\\create.vue' /* webpackChunkName: "pages\\topic\\create" */).then(m => m.default || m)
const _346ec7b9 = () => import('..\\pages\\admin\\pushLink.vue' /* webpackChunkName: "pages\\admin\\pushLink" */).then(m => m.default || m)
const _2ac0152a = () => import('..\\pages\\ac\\pwdModify.vue' /* webpackChunkName: "pages\\ac\\pwdModify" */).then(m => m.default || m)
const _5483122e = () => import('..\\pages\\ac\\pwdReset.vue' /* webpackChunkName: "pages\\ac\\pwdReset" */).then(m => m.default || m)
const _42033160 = () => import('..\\pages\\vote\\create.vue' /* webpackChunkName: "pages\\vote\\create" */).then(m => m.default || m)
const _6370c3f4 = () => import('..\\pages\\admin\\settings\\baiduad.vue' /* webpackChunkName: "pages\\admin\\settings\\baiduad" */).then(m => m.default || m)
const _1709a946 = () => import('..\\pages\\admin\\reply\\yesterday.vue' /* webpackChunkName: "pages\\admin\\reply\\yesterday" */).then(m => m.default || m)
const _79ee0108 = () => import('..\\pages\\admin\\category\\topic.vue' /* webpackChunkName: "pages\\admin\\category\\topic" */).then(m => m.default || m)
const _e0ed2774 = () => import('..\\pages\\admin\\crawl\\zhihu.vue' /* webpackChunkName: "pages\\admin\\crawl\\zhihu" */).then(m => m.default || m)
const _79351de3 = () => import('..\\pages\\admin\\crawl\\custom.vue' /* webpackChunkName: "pages\\admin\\crawl\\custom" */).then(m => m.default || m)
const _3effdb12 = () => import('..\\pages\\admin\\crawl\\jianshu.vue' /* webpackChunkName: "pages\\admin\\crawl\\jianshu" */).then(m => m.default || m)
const _77dffe78 = () => import('..\\pages\\admin\\topic\\yesterday.vue' /* webpackChunkName: "pages\\admin\\topic\\yesterday" */).then(m => m.default || m)
const _83192924 = () => import('..\\pages\\admin\\user\\list.vue' /* webpackChunkName: "pages\\admin\\user\\list" */).then(m => m.default || m)
const _7c098a13 = () => import('..\\pages\\admin\\reply\\list.vue' /* webpackChunkName: "pages\\admin\\reply\\list" */).then(m => m.default || m)
const _595eeae2 = () => import('..\\pages\\admin\\user\\yesterday.vue' /* webpackChunkName: "pages\\admin\\user\\yesterday" */).then(m => m.default || m)
const _2909adbe = () => import('..\\pages\\admin\\user\\today.vue' /* webpackChunkName: "pages\\admin\\user\\today" */).then(m => m.default || m)
const _095a672c = () => import('..\\pages\\admin\\category\\book.vue' /* webpackChunkName: "pages\\admin\\category\\book" */).then(m => m.default || m)
const _1fadf218 = () => import('..\\pages\\admin\\topic\\list.vue' /* webpackChunkName: "pages\\admin\\topic\\list" */).then(m => m.default || m)
const _e6107d22 = () => import('..\\pages\\admin\\settings\\site.vue' /* webpackChunkName: "pages\\admin\\settings\\site" */).then(m => m.default || m)
const _f7499216 = () => import('..\\pages\\admin\\crawl\\huxiu.vue' /* webpackChunkName: "pages\\admin\\crawl\\huxiu" */).then(m => m.default || m)
const _3eae41c8 = () => import('..\\pages\\admin\\reply\\today.vue' /* webpackChunkName: "pages\\admin\\reply\\today" */).then(m => m.default || m)
const _4da2692b = () => import('..\\pages\\admin\\crawl\\account.vue' /* webpackChunkName: "pages\\admin\\crawl\\account" */).then(m => m.default || m)
const _9cdd1092 = () => import('..\\pages\\admin\\topic\\today.vue' /* webpackChunkName: "pages\\admin\\topic\\today" */).then(m => m.default || m)
const _744e95fa = () => import('..\\pages\\book\\edit\\chapter\\_id.vue' /* webpackChunkName: "pages\\book\\edit\\chapter\\_id" */).then(m => m.default || m)
const _536a99bc = () => import('..\\pages\\vote\\edit\\_id.vue' /* webpackChunkName: "pages\\vote\\edit\\_id" */).then(m => m.default || m)
const _0f965846 = () => import('..\\pages\\book\\edit\\_id.vue' /* webpackChunkName: "pages\\book\\edit\\_id" */).then(m => m.default || m)
const _88298156 = () => import('..\\pages\\user\\collect\\_id.vue' /* webpackChunkName: "pages\\user\\collect\\_id" */).then(m => m.default || m)
const _7de3904a = () => import('..\\pages\\topic\\edit\\_id.vue' /* webpackChunkName: "pages\\topic\\edit\\_id" */).then(m => m.default || m)
const _30bfd065 = () => import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages\\topic\\_id" */).then(m => m.default || m)
const _000415e7 = () => import('..\\pages\\book\\_id.vue' /* webpackChunkName: "pages\\book\\_id" */).then(m => m.default || m)
const _a0d17976 = () => import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages\\user\\_id" */).then(m => m.default || m)
const _4d6a6cc6 = () => import('..\\pages\\user\\_id\\index.vue' /* webpackChunkName: "pages\\user\\_id\\index" */).then(m => m.default || m)
const _009da6ef = () => import('..\\pages\\user\\_id\\vote.vue' /* webpackChunkName: "pages\\user\\_id\\vote" */).then(m => m.default || m)
const _4a5b1124 = () => import('..\\pages\\user\\_id\\book.vue' /* webpackChunkName: "pages\\user\\_id\\book" */).then(m => m.default || m)
const _0f161535 = () => import('..\\pages\\user\\_id\\collect.vue' /* webpackChunkName: "pages\\user\\_id\\collect" */).then(m => m.default || m)
const _20da3096 = () => import('..\\pages\\user\\_id\\reply.vue' /* webpackChunkName: "pages\\user\\_id\\reply" */).then(m => m.default || m)
const _5e0121f4 = () => import('..\\pages\\vote\\_id.vue' /* webpackChunkName: "pages\\vote\\_id" */).then(m => m.default || m)
const _3f09668a = () => import('..\\pages\\active\\_id\\_key.vue' /* webpackChunkName: "pages\\active\\_id\\_key" */).then(m => m.default || m)
const _58209cee = () => import('..\\pages\\ac\\_id\\_key.vue' /* webpackChunkName: "pages\\ac\\_id\\_key" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _135ba048,
			name: "index"
		},
		{
			path: "/vote",
			component: _826e85c4,
			name: "vote"
		},
		{
			path: "/links",
			component: _389008a2,
			name: "links"
		},
		{
			path: "/timeline",
			component: _6c3e1f32,
			name: "timeline"
		},
		{
			path: "/signup",
			component: _0fbf1592,
			name: "signup"
		},
		{
			path: "/book",
			component: _3f3f2fbf,
			name: "book"
		},
		{
			path: "/rank",
			component: _d75c72c8,
			name: "rank"
		},
		{
			path: "/admin",
			component: _44bdf89d,
			name: "admin"
		},
		{
			path: "/signin",
			component: _09ae81c8,
			name: "signin"
		},
		{
			path: "/about",
			component: _18b874fa,
			name: "about"
		},
		{
			path: "/book/create",
			component: _5f49da42,
			name: "book-create"
		},
		{
			path: "/verify/mail",
			component: _bd453c2c,
			name: "verify-mail"
		},
		{
			path: "/user/edit",
			component: _934a03e2,
			name: "user-edit"
		},
		{
			path: "/topic/create",
			component: _12f340be,
			name: "topic-create"
		},
		{
			path: "/admin/pushLink",
			component: _346ec7b9,
			name: "admin-pushLink"
		},
		{
			path: "/ac/pwdModify",
			component: _2ac0152a,
			name: "ac-pwdModify"
		},
		{
			path: "/ac/pwdReset",
			component: _5483122e,
			name: "ac-pwdReset"
		},
		{
			path: "/vote/create",
			component: _42033160,
			name: "vote-create"
		},
		{
			path: "/admin/settings/baiduad",
			component: _6370c3f4,
			name: "admin-settings-baiduad"
		},
		{
			path: "/admin/reply/yesterday",
			component: _1709a946,
			name: "admin-reply-yesterday"
		},
		{
			path: "/admin/category/topic",
			component: _79ee0108,
			name: "admin-category-topic"
		},
		{
			path: "/admin/crawl/zhihu",
			component: _e0ed2774,
			name: "admin-crawl-zhihu"
		},
		{
			path: "/admin/crawl/custom",
			component: _79351de3,
			name: "admin-crawl-custom"
		},
		{
			path: "/admin/crawl/jianshu",
			component: _3effdb12,
			name: "admin-crawl-jianshu"
		},
		{
			path: "/admin/topic/yesterday",
			component: _77dffe78,
			name: "admin-topic-yesterday"
		},
		{
			path: "/admin/user/list",
			component: _83192924,
			name: "admin-user-list"
		},
		{
			path: "/admin/reply/list",
			component: _7c098a13,
			name: "admin-reply-list"
		},
		{
			path: "/admin/user/yesterday",
			component: _595eeae2,
			name: "admin-user-yesterday"
		},
		{
			path: "/admin/user/today",
			component: _2909adbe,
			name: "admin-user-today"
		},
		{
			path: "/admin/category/book",
			component: _095a672c,
			name: "admin-category-book"
		},
		{
			path: "/admin/topic/list",
			component: _1fadf218,
			name: "admin-topic-list"
		},
		{
			path: "/admin/settings/site",
			component: _e6107d22,
			name: "admin-settings-site"
		},
		{
			path: "/admin/crawl/huxiu",
			component: _f7499216,
			name: "admin-crawl-huxiu"
		},
		{
			path: "/admin/reply/today",
			component: _3eae41c8,
			name: "admin-reply-today"
		},
		{
			path: "/admin/crawl/account",
			component: _4da2692b,
			name: "admin-crawl-account"
		},
		{
			path: "/admin/topic/today",
			component: _9cdd1092,
			name: "admin-topic-today"
		},
		{
			path: "/book/edit/chapter/:id?",
			component: _744e95fa,
			name: "book-edit-chapter-id"
		},
		{
			path: "/vote/edit/:id?",
			component: _536a99bc,
			name: "vote-edit-id"
		},
		{
			path: "/book/edit/:id?",
			component: _0f965846,
			name: "book-edit-id"
		},
		{
			path: "/user/collect/:id?",
			component: _88298156,
			name: "user-collect-id"
		},
		{
			path: "/topic/edit/:id?",
			component: _7de3904a,
			name: "topic-edit-id"
		},
		{
			path: "/topic/:id?",
			component: _30bfd065,
			name: "topic-id"
		},
		{
			path: "/book/:id",
			component: _000415e7,
			name: "book-id"
		},
		{
			path: "/user/:id?",
			component: _a0d17976,
			children: [
				{
					path: "",
					component: _4d6a6cc6,
					name: "user-id"
				},
				{
					path: "vote",
					component: _009da6ef,
					name: "user-id-vote"
				},
				{
					path: "book",
					component: _4a5b1124,
					name: "user-id-book"
				},
				{
					path: "collect",
					component: _0f161535,
					name: "user-id-collect"
				},
				{
					path: "reply",
					component: _20da3096,
					name: "user-id-reply"
				}
			]
		},
		{
			path: "/vote/:id",
			component: _5e0121f4,
			name: "vote-id"
		},
		{
			path: "/active/:id?/:key?",
			component: _3f09668a,
			name: "active-id-key"
		},
		{
			path: "/ac/:id?/:key?",
			component: _58209cee,
			name: "ac-id-key"
		}
    ],
    fallback: false
  })
}
