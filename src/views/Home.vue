<template>
    <div>
        <div class="container-fluid bg-login">
            <div class="container" style="padding-top: 200px;">
                <div class="row justify-content-center">
                    <div class="card col-lg-6 col-md-10 col-sm-6 col-xs-6">
                        <form>
                            <div class="form-group row">
                                <i class="fas fa-envelope col-1" style="margin-top: 60px; margin-left: 10px;"></i>
                                <input type="email" class="form-control col-10" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group row">
                                <i class="fas fa-lock col-1" style="margin-top: 60px; margin-left: 10px;"></i>
                                <input type="password" class="form-control col-10" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <router-link to="/applicant"><button type="submit" class="btn btn-primary submit-btn">Submit</button></router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>
    .bg-login {
        background-image: url('../assets/truck.jpg');
        height: 100vh;
        background-size: cover;
    }
    
    .card {
        border-radius: 25px;
        -webkit-box-shadow: 0 8px 6px -6px black;
	    -moz-box-shadow: 0 8px 6px -6px black;
        box-shadow: 0 8px 6px -6px black;
    }
    
    #exampleInputEmail1 {
        margin-top: 50px;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid rgb(184, 184, 184);
    }
    
    #exampleInputPassword1 {
        margin-top: 50px;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid rgb(184, 184, 184);
    }
    
    .submit-btn {
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #6561ab;
        border: none;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>