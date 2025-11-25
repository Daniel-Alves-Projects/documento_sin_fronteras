<?php include('includes/header.php');
include('includes/config.php');?>

<div id="meuCarrossel" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
        <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="elements/banner01.png" class="d-block w-100" alt="Banner de Promoção">
        </div>

        <div class="carousel-item">
            <img src="elements/banner02.png" class="d-block w-100" alt="Novo Produto">
        </div>

        <div class="carousel-item">
            <img src="elements/banner03.png" class="d-block w-100" alt="Novidades da Loja">
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#meuCarrossel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#meuCarrossel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
    </button>
</div>



    

<?php include('include/footer.php')?>






























<?php include('include/footer.php') ?>