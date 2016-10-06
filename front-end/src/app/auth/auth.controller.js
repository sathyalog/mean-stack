export class AuthController{

    constructor($auth){
        'ngInject';

        this.$auth = $auth;

    }
    register(){
        console.log("test");
        this.$auth.signup({email:'test@test.com'});
    }
}
