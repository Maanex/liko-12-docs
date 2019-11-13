

let app;
app = new Vue({
    el: '#app',
    data: {
        docs: {
            categories: [
                {
                    id: 'home',
                    name: 'Home',
                    bgcolor: '#42A5F5',
                },
                {},
                {
                    id: 'lua',
                    name: 'Lua',
                    bgcolor: '#1976D2',
                },
                {},
                {
                    id: 'cpu',
                    name: 'CPU',
                    bgcolor: '#4DB6AC',
                },
                {
                    id: 'gpu',
                    name: 'GPU',
                    bgcolor: '#FF8A65',
                },
                {
                    id: 'hdd',
                    name: 'HDD',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'fdd',
                    name: 'FDD',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'keyboard',
                    name: 'Keyboard',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'gamepad',
                    name: 'Gamepad',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'ram',
                    name: 'Ram',
                    bgcolor: '#1976D2',
                },
                {
                    id: 'web',
                    name: 'Web',
                    bgcolor: '#1976D2',
                }
            ]
        },
        activeCategory: 'home',
    },
    methods: {
        category: function(id) {
            this.activeCategory = id;
        }
    }
});