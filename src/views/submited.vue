<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <router-link to="/applicant"><img src="../assets/logo.svg" width="100px" height="40px" style="padding-bottom: 10px;"></router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-2" to="/accepted">Aceptados</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/applicant">Solicitantes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/submited">Historial de Servicios</router-link>
                    </li>
                    <li class="nav-item log-out">
                        <router-link class="nav-link" to="/" tabindex="-1" aria-disabled="true">Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container navigation-tab">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link class="nav-link2" to="/submited">SUBMITED</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link2" to="/accepted-service">ACCEPTED</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link2" to="/declined">DECLINED</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link2" to="/finished">FINISHED</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: value
            }
        },
    }
</script>

<style scoped>
    .navigation-tab {
        margin-top: 100px;
        padding-bottom: 20px;
        border-bottom: 1px solid grey;
    }
    
    .nav-link2 {
        color: rgb(117, 117, 117);
        font-weight: 700;
        font-size: 12px;
        margin: 30px;
        text-decoration: none;
    }
    
    .nav-link {
        color: white !important;
        font-weight: 700;
        font-size: 12px;
    }
</style>