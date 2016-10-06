export class MainController {
  constructor ($http,$timeout) {
    'ngInject';
      this.$http = $http;
      this.$timeout = $timeout;
      this.getMessages(); // on page load see all messages in console


  }

    postMessage(){
        var vm = this;
        this.$http.post('http://localhost:5000/api/message', {msg:this.message})

        this.message = '';
         this.$timeout(function() {
          vm.getMessages();
        }, 1000);
    }

    getMessages(){
        var vm = this;
        this.$http.get('http://localhost:5000/api/message').then(function(result){
         console.log(result);
            vm.messages = result.data;
        });
    }




}
