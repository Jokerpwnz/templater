<template>
  <div class="grid grid-rows-2 grid-cols-6 gap-4 mt-8 ml-10">

    <div>
      <div>
        <button
            class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 border rounded"
        >Случайны юзер</button>
      </div>
      <div>
        Имя
        <input type="text" v-model="name" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md disabled" disabled>
      </div>
      <div>
        Почта
        <input type="text" v-model="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md disabled" disabled>
      </div>
      <div>
        Телефон
        <input type="text" v-model="phone" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md disabled" disabled>
     </div>
      <div>
        Сайт
        <input type="text" v-model="website" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md disabled" disabled>
      </div>
    </div>
    <div class="grid grid-rows-1">
      <div>
        <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            @click="addTemplate(name,'NAME')"
        >Имя
        </button>
        <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded ml-3"
            @click="addTemplate(email,'EMAIL')"
        >email
        </button>
        <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded ml-3"
            @click="addTemplate(phone,'PHONE')"
        >номер телефона
        </button>
        <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded ml-3"
            @click="addTemplate(website,'WEBSITE')"
        >вебсайт
        </button>
        <textarea v-model="template" cols="40" rows="10" class="form-textarea mt-1 block w-full" ref="repl"></textarea>
      </div>
      <div class="mt-5">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >Загрузить
        </button>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3"
        >Сохранить шаблон
        </button>

        <textarea v-model="tempalateAll" cols="40" rows="10" class="form-textarea mt-1 block w-full"
                  disabled></textarea>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {
  //  HelloWorld
  },
  data(){
    return {
      users: [{name:'Lucas',email:'gespwnz@gmail.com',phone:'+1452342424',website:'google.com'}],
      name: '',
      email: '',
      phone: '',
      website: '',
      template: '',
      tempalateAll: '',
      tpl: '',
    }
  },
  created() {
    let {name,email,phone,website} = this.users[0];

    this.name = name;
    this.email = email
    this.phone = phone
    this.website = website
  },
  methods: {
    loadUsers(){

    },
    saveLocal() {
    },
    loadLocal() {

    },
    addTemplate(text,attr) {
   // p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-8 border-indigo-600
      // border-dashed h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center
      // border-3 border-dashed border-green-400
      this.template  = this.template +  `<span class="border-dashed flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">[[[${attr}]]]<span>`;
      // switch (attr){
      //   case 'NAME':
      //     console.log(this.$refs.repl.value.replaceAll(`[[[${attr}]]]`, this.name));
      //     break;
      //   case 'EMAIL':
      //     console.log(this.$refs.repl.value.replaceAll(`[[[${attr}]]]`, this.email));
      //     break;
      //   case 'PHONE':
      //     console.log(this.$refs.repl.value.replaceAll(`[[[${attr}]]]`, this.phone));
      //     break;
      //   case 'WEBSITE':
      //     console.log(this.$refs.repl.value.replaceAll(`[[[${attr}]]]`, this.website));
      //     break;
      // }

      // console.log(this.$refs.repl.value.replaceAll(`[[[NAME]]]`, this.name));
      // console.log(this.$refs.repl.value.replaceAll(`[[[EMAIL]]]`, this.email));
      // console.log(this.$refs.repl.value.replaceAll(`[[[PHONE]]]`, this.phone));
      // console.log(this.$refs.repl.value.replaceAll(`[[[WEBSITE]]]`, this.website));

      // var str = this.$refs.repl.value;
      // var mapObj = {
      //   name:this.name,
      //   email:this.email,
      //   phone:this.phone,
      //   website:this.website,
      // };
      // str = str.replace(/[[[NAME]]]|[[[EMAIL]]]|[[[PHONE]]]|[[[WEBSITE]]]/gi, function(matched){
      //   return mapObj[matched];
      // });
      //
      // console.log(str);

   //   console.log(this.$refs.repl.value.replaceAll(`[[[${attr}]]]`, this.name))

    //  this.template = this.$refs.repl.value.replaceAll("[[NAME]]", this.name)
     // this.tempalateAll += `[[[${attr}]]]`
    },
    replaceTemplate() {

    }
  },
  watch:{
    template(){

      this.tempalateAll = this.template

      // this.tempalateAll = this.template
      // this.template = this.tempalateAll.replace("[[NAME]]", this.name);
       // this.tempalateAll = this.template.
    },
    tempalateAll(){

    }

  }
}
</script>
