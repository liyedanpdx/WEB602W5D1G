Vue.component('card-item',{
    props:['li'],
    template:'<li class="card-item"><span>{{li.value}}</span> {{li.attribute}}</li>'
})


const app = new Vue({
    el:'#card-list',
    data:{
        lis:[
        {'value':'50GB','attribute':'Storage'},
        {'value':'50','attribute':'Emails'},
        {'value':'50','attribute':'Domains'},
        {'value':'Endless','attribute':'Support'}
        ],
        styleobj:{
            padding: '8px 16px',
            'border-bottom': '1px solid #ddd'
        }
    }
})