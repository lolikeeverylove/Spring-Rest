Vue.component('click-counter'),{
    template: '<button @click="count++"{{count}}</button',
    data(){
        return {
            count: 0
        }
    }
})





var open = new Vue({
    el: '#open',
    data: {
        status: 'nothing',
        items: [{
            id: 1,
            label: 'Веселая',
            lolich: false
        },{
            id:2,
            label: 'Умная',
            lolich: true
        },{
            id:3,
            label: 'Целеустремленная',
            lolich: false
        }
        ],
        newItem:'',
        nextToId:4
    },
    methods: {
        changeStatus: function (what) {
            this.status = what;
        },
        addEl: function () {
            this.items.push({id : this.nextToId++, lolich: false, label: this.newItem});
            this.newItem =''
        },
        changeCut: function (item) {
            item.lolich = !item.lolich
        }
        
    }
})

