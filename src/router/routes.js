const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: 'questions', component: () => import('pages/Questions.vue') },
            { path: 'diet', component: () => import('pages/Diet.vue') },
            { path: 'advancedTest', component: () => import('pages/AdvancedTest.vue') },
            { path: 'jak', component: () => import('pages/JAK.vue') },
            { path: 'dos', component: () => import('pages/Dos.vue') },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue'),
    },
];

export default routes;
