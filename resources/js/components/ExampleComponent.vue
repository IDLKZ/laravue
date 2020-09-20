<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <p>{{count}}</p>
                    <button @click="rise(1)">+</button>
                    <button @click="down(1)">-</button>
                    <div class="card-body">
                       {{word}}
                    </div>
                    <input v-model="word">
                    <router-link to="/about">Go to User</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                count: 0,
                word:"This is a Vue Example"
            }
        },
        methods:{
          rise:function (num){
              this.count +=num;
          },
          down:function (num){
              this.count-=num;
          }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
