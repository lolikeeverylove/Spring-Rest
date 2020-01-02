//компоненты нужны чтобы не дублировать код
//нельзя большие буквы в пропс
//почему то перед передачей ссылки надо всегда : ставить
Vue.component('carusel-img',{
    template: `
        <div class="carousel-item" data-interval="10000">
            <img v-bind:src="imgsrc" class="d-block w-100" v-bind:height="height">
        </div>
    `,
    props: ['imgsrc', 'height']
})

Vue.component('vkinst',{
    template: `
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" :href="eref">
            <img v-bind:src="imgsrc" width="30" height="30" class="d-inline-block align-top" alt="">
            {{vkinst}}
        </a>
    </nav>
    `,
    props:['eref','vkinst','imgsrc']
})


Vue.component('refsoc',{
    template: `
                <div class="card-footer">
                    <vkinst :eref = "refvk"  vkinst="Vkontakte" imgsrc ="https://smajlik.ru/wp-content/uploads/2017/12/2.png"></vkinst>
                    <vkinst :eref = "refinst" vkinst="Instagram" imgsrc = "https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png" ></vkinst>
                    <small class="text-muted">Last updated {{ countmin }} mins ago</small>
                </div> 
`,
    props: ['refvk', 'refinst', 'countmin']
})

Vue.component('imagecarusel', {
    template: `
        <div class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner" >
                <div class="carousel-item active" data-interval="10000">
                    <img :src="imgsrc" class="d-block w-100" :height="vysota">
                </div>
<!--                надо как то фором пройтись и надо как то научиться в свойстве токо часть изменять-->
                <carusel-img :imgsrc="imgsrc1" height="400px"></carusel-img>
                <carusel-img :imgsrc="imgsrc2" height="400px"></carusel-img>
                <carusel-img :imgsrc="imgsrc3" :height="vysota4"></carusel-img>
            </div>
<!--            <a class="carousel-control-prev" href="#carouselExampleInterval1" role="button" data-slide="prev">-->
<!--                <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                <span class="sr-only">Previous</span>-->
<!--            </a>-->
<!--            <a class="carousel-control-next" href="#carouselExampleInterval1" role="button" data-slide="next">-->
<!--                <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                <span class="sr-only">Next</span>-->
<!--            </a>-->
            
            <a class="carousel-control-prev" :href="refonid" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="refonid" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
<!--            <nextprev class="carousel-control-prev" :ref ="refonid" spanclass="carousel-control-prev-icon" data-slide="prev" text="Previous"></nextprev>-->
<!--            <nextprev class="carousel-control-next" :ref ="refonid" spanclass="carousel-control-next-icon" data-slide="next" text="Next"></nextprev>-->
        </div>    
    `,
    //С СЫЛКАМИ КАКАЯ ТО ХУЕТА!!!
    props: ['imgsrc','imgsrc1','imgsrc2','imgsrc3', 'refonid', 'vysota','vysota4']
})
// Vue.component('nextprev',{
//     template: `
//     <a :href="ref" role="button" >
//         <span v-bind:class="spanclass" aria-hidden="true"></span>
//         <span class="sr-only">{{ text }}</span>
//     </a>
//     `,
//     props:['ref', 'spanclass', 'text', 'aclass']
// })
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

