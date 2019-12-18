//все с чем связано вью ну тоесть внутри тега, редактировать в вью,а не добавлять туда js элементы т.к. ворк не будет
//можно вызвать kek.message чтобы присвоить значение. т.к. дата это свойство
// var kek = new V{
//     data{ message: }
// }

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        id:223
    }
})

var app = new Vue({
    el: '#app-2',
    data: {
        message: 'My page in vk: ' + new Date().toLocaleString()
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Общительный' },
            { text: 'Программист' },
            { text: 'Очень много шучу' }
        ]
    }
})
var app6 = new Vue({
    el: '#app-5',
    data: {
        message: 'Написать быстрое сообщение '
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 5
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // определяйте методы в объекте `methods`
    methods: {
        greet: function (event) {
            // `this` внутри методов указывает на экземпляр Vue
            alert('Привет, ' + this.name + '!')

            // `event` — нативное событие DOM
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

var addNewElement = new Vue({
    el: "#shoppingList",
    data:{
        state: 'default',//состояние
        header:'shopping list app',
        newItem: '',
        items: [
                // ' 😀 😇 😈 😎 😐 😛 😯 😴 😶 😁 😂 😟 😦 😧 😬 😮',

            {
                label: '10 party hats',
                purchased: false,
                highPriority: false,
            },
            {
                label: '2 board games',
                purchased: true,
                highPriority: false,
            },
            {
                label: '20 cups',
                purchased: false,
                highPriority: true,
            },
        ]
    },
        //можно создавать новые методы для красивого кода
        methods: {
            saveItem: function () {
                this.items.push({
                    label: this.newItem,
                    purchased: false,
                });
                this.newItem='';
            },
            stateEdit:function (newState) {
                this.state =newState;
                this.newItem=''
            },
            togglePurchased:function (item) {
                item.purchased = !item.purchased;
            }
        }
})
