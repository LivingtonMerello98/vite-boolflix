<script>
//esportarzione componente
export default {
    name: 'AppFooter'
}

</script>

<template>
    <footer class="bg-black">
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <ul class="list-unstyled text-secondary">
                        <li class="d-flex py-2 justify-content-start">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="mx-2 fs-4" />
                            <font-awesome-icon :icon="['fab', 'square-facebook']" class="mx-2 fs-4" />
                            <font-awesome-icon :icon="['fab', 'twitter']" class="mx-2 fs-4" />
                            <font-awesome-icon :icon="['fab', 'youtube']" class="mx-2 fs-4" />
                        </li>
                    </ul>
                </div>
                <div class="col-3 text-white py-2">
                    <div class="content mb-3 d-flex">
                        <ul class="list-unstyled text-secondary">
                            <li class="fs-6 py-1">Autodescrizioni</li>
                            <li class="fs-6 py-1">Rapporti con gli investitori</li>
                            <li class="fs-6 py-1">Note legali</li>
                            <li class="fs-6 py-1">Preferenze per la pubblicità</li>
                            <li class="py-4">
                                <button class="btn border border-secondary rounded-1 text-secondary"> codice di
                                    servizio</button>
                            </li>
                            <li>
                                <span class="fs-small">
                                    <p>1997-2024 Netflix, Inc.</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="content mb-3 d-flex">
                        <ul class="list-unstyled text-secondary">
                            <li class="fs-6 py-1">Centro assistenza</li>
                            <li class="fs-6 py-1">Opportunità di lavoro</li>
                            <li class="fs-6 py-1">Preferenze per i cookie</li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="content mb-3 d-flex">
                        <ul class="list-unstyled text-secondary">
                            <li class="fs-6 py-1">Carte regalo</li>
                            <li class="fs-6 py-1"> Condizioni di utilizzo </li>
                            <li class="fs-6 py-1">Informazioni sull'azienda</li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="content mb-3 d-flex">
                        <ul class="list-unstyled text-secondary">
                            <li class="fs-6 py-1">Media center</li>
                            <li class="fs-6 py-1">Privacy</li>
                            <li class="fs-6 py-1">Contattaci</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.fs-small {

    font-size: 13px;
}
</style>