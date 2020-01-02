//определяет индекс элемента в коллекции
function getIndex() {
    for (var i  = 0; i<list.length;i++){
        if(list[i].id===id){
            return i;
        }
    }
    return -1;

}
var messageApi =Vue.resource("/message{/id}");
Vue.component('message-form',{
    props:['messages', 'messageAttr'],
    //функция. т.к. дата из обьекта распространяется на все компоненты связанные с ней. и чтобы не было стычек
    data: function(){
        return{
            text : '',
            id: ''
        }
    },
    //watch отслеживает постоянно изменения переменной
    watch: {
        messageAttr : function(newVal, oldVal){
            this.text =newVal.text;
            this.id= newVal.id
        }
    },
    template: `
    <div>
        <input type="text" placeholder="Write something" v-model="text" @keyup.enter="save"/>
        <input type="button" value="save" @click="save"/>
    </div>
`,
    methods:{
        save: function() {
            var message = { text: this.text };

            if (this.id) {
                messageApi.update({id: this.id}, message).then(result =>
                    result.json().then(data => {
                        var index = getIndex(this.messages, data.id);
                        this.messages.splice(index, 1, data);
                        this.text = ''
                        this.id = ''
                    })
                )
            } else {
                //в метод сейв всегда запихивается айди и текст)
                messageApi.save({}, message).then(result =>
                    //в дату запихиваем месседж
                    //и после делаем нулевым в инпуте))
                    result.json().then(data => {
                        this.messages.push(data);
                        this.text = ''
                    }))
            }
        }
    }

})
Vue.component('message-row',{
    props: ['message', 'editMethod'],
    template: `
    <div>
        <i>({{message.id}}) </i>{{message.text}}
        <span>
            <input type="button" value="Edit" @click="edit"/>
        </span>
    </div>
`,
    methods: {
        edit: function () {
            this.editMethod(this.message)
        }
    }
});
//компоненты до использования
Vue.component('messages-list', {
    props: ['messages'],//указываем что получаем параметры
    data: function(){
        return{
            message:null
        }
    },
    //типа проходимся по месседжам и берем один месседж
    //mnogo divov cause v-for размножает дивы а так они в пределе одного будут оставаться
    template:
        '<div style="position: relative; width: 300px;">' +
        '<message-form :messages="messages" :messageAttr="message"/>' +
        '<message-row v-for="message in messages" :key="message.id" :message="message" ' +
        ':editMethod="editMethod" :messages="messages" />' +
        '</div>',
    created: function() {
        messageApi.get().then(result =>
        result.json().then(data =>
        data.forEach(message => this.messages.push(message)))
    )
    },
    methods:{
        editMethod:function (message) {
            this.message=message
        }
    }
});
var app = new Vue({//exemplyr our app
    el: '#app', // типа айдишник с именем эпп должен быть
    template: '<messages-list :messages="messages" />',
    data: {//обрабатывает данные внутри контейнера с айдишником апп
        messages: []
    }
});