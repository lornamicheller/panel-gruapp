<template>
    <div>
        <div class="container" style="margin-top: 50px;">
            <img src="../assets/gruera.jpg" class="profile-photo">
        </div>
        <div class="container" style="margin-top: 50px;">
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
</style>