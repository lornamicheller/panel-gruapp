<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <router-link to="/"><img src="../assets/logo.svg" width="100px" height="40px" style="padding-bottom: 10px;"></router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="">Aceptados</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Solicitantes</router-link>
                    </li>
                  <li class="nav-item">
                        <router-link class="nav-link" to="/submited">Historial de Servicios</router-link>
                    </li>
                    <li class="nav-item log-out">
                        <router-link class="nav-link disabled" to="" tabindex="-1" aria-disabled="true">Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container" style="margin-top: 50px;">
            <img src="../assets/gruero.png" class="profile-photo">
        </div>
        <div class="container" style="margin-top: 50px; margin-bottom: 50px; padding-top: 70px; padding-bottom: 70px; border-left: 1px solid grey; border-right: 1px solid grey;">
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Nombre:</p>
                </div>
                <div class="col-3 right-column">
                    <p>Little</p>
                </div>
            </div>
            <div class="row justify-content-center ">
                <div class="col-3 left-column">
                    <p>Apellido:</p>
                </div>
                <div class="col-3 right-column">
                    <p>Jane</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Dirección:</p>
                </div>
                <div class="col-3 right-column">
                    <p>Hotel Sheraton, San Juan</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Marca:</p>
                </div>
                <div class="col-3 right-column">
                    <p>Freightliner</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Modelo de Vehículo:</p>
                </div>
                <div class="col-3 right-column">
                    <p>Business Class M2 106</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Año:</p>
                </div>
                <div class="col-3 right-column">
                    <p>2020</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column">
                    <p>Tablilla</p>
                </div>
                <div class="col-3 right-column">
                    <p>IGH 234</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column" style="margin-top: 10px;">
                    <p>Licencia de Conducir</p>
                </div>
                <div class="col-3 right-column">
                    <button type="button" class="btn btn-primary profile">
                        <router-link class="profile-link" to="/profile">Descargar Imagen</router-link>
                    </button>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column" style="margin-top: 10px;">
                    <p>Licencia de Vehículo</p>
                </div>
                <div class="col-3 right-column">
                    <button type="button" class="btn btn-primary profile">
                        <router-link class="profile-link" to="/profile">Descargar Imagen</router-link>
                    </button>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3 left-column" style="margin-top: 10px;">
                    <p>Foto de perfil</p>
                </div>
                <div class="col-3 right-column">
                    <button type="button" class="btn btn-primary profile">
                        <router-link class="profile-link" to="/profile">Descargar Imagen</router-link>
                    </button>
                </div>
            </div>
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
    .profile-photo {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
    }
    
    .left-column {
        font-weight: 700;
    }
    
    .profile {
        background-color: #6561ab;
        border: 1px solid #6561ab;
    }
    
    .profile-link {
        color: white;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        padding: 15px;
    }

    .nav-link {
        color: white !important;
    }
</style>