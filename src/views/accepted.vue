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
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Perfíl</th>
                        <th scope="col">Desactivar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Little</td>
                        <td>Jane</td>
                        <td>Hotel Sheraton, San Juan</td>
                        <td>
                            <button type="button" class="btn btn-primary profile">
                                <router-link class="profile-link" to="/profile">Perfíl</router-link>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary profile">
                                <router-link class="profile-link" to="">Desactivar Empleado</router-link>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Little</td>
                        <td>Jane</td>
                        <td>Hotel Sheraton, San Juan</td>
                        <td>
                            <button type="button" class="btn btn-primary profile">
                                <router-link class="profile-link" to="/profile">Perfíl</router-link>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary profile">
                                <router-link class="profile-link" to="">Desactivar Empleado</router-link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .profile {
        background-color: #6561ab !important;
        border: 1px solid #6561ab !important;
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
        font-weight: 700;
        font-size: 12px;
    }
</style>