Vue.component('message-row',{
    props: ['message'], 
    template: '<div><i>{{message.id}}</i>{{message.text}}</div>'
})
//компоненты до использования
Vue.component('messages-list', {
    props: ['messages'],//указываем что получаем параметры
    //типа проходимся по месседжам и берем один месседж
    //mnogo divov cause v-for размножает дивы а так они в пределе одного будут оставаться
    template: '<div' +
        '<message-row v-for="message in messages" :key="message.id" :message="message" />'
});
// var app = new Vue({//exemplyr our app
//     el: '#app', // типа айдишник с именем эпп должен быть
//     data: {//обрабатывает данные внутри контейнера с айдишником апп
//         message: 'Привет, Vue!'
//     }
// });
var app = new Vue({//exemplyr our app
    el: '#app', // типа айдишник с именем эпп должен быть
    template: '<messages-list :messages="messages" />',
    data: {//обрабатывает данные внутри контейнера с айдишником апп
        messages: [
            {id: '1', text: 'wow'},
            {id: '2', text: 'dsds'},
            {id: '3', text: 'ewewew'}]
    }
});