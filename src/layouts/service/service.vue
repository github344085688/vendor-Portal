<template>
    <div class=" my-5">
        <div class="row">
            <div class="col-3  xs:col-12 md:col-6 lg:col-6  ">
                <div class="an-panel-main-info-single color-cyan with-shadow wow fadeIn" data-wow-delay=".1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
                    <h2>94.9% <span class="info-identifier">Server up time</span></h2>
                    <i class="icon-chart"></i>
                </div>
            </div>
            <div class="col-3 xs:col-12 md:col-6 lg:col-6 ">
                <div class="an-panel-main-info-single lime-green with-shadow wow fadeIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">
                    <h2>1,543 <span class="info-identifier">Total users</span></h2>
                    <i class="icon-user"></i>
                </div>
            </div>
            <div class=" col-3 xs:col-12 md:col-6 lg:col-6 ">
                <div class="an-panel-main-info-single pale-yellow with-shadow wow fadeIn" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">
                    <h2>$2,000 <span class="info-identifier">Revenue</span></h2>
                    <i class="icon-cart"></i>
                </div>
            </div>
            <div class="col-3 xs:col-12 md:col-6 lg:col-6 ">
                <div class="an-panel-main-info-single soft-pink with-shadow wow fadeIn" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeIn;">
                    <h2>+45% <span class="info-identifier">Bookings</span></h2>
                    <i class="icon-book-o"></i>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-6">
                <div class="card shadow-1">
                    <div class="card-header px-4">
                        <div>DOWNLOADS</div>
                    </div>

                    <div class="card-body px-0">
                        <mixed-chart :datasets="cartData"/>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <!--                    <a href="#" class="card-link">Card link</a>-->
                        <!--                    <a href="#" class="card-link">Another link</a>-->
                    </div>
                </div>


            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-header px-4">
                        <div >STATISTICS</div>
                    </div>

                    <div class="card-body px-0">
                        <chart-line height="250" width="100%"/>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <!--                    <a href="#" class="card-link">Card link</a>-->
                        <!--                    <a href="#" class="card-link">Another link</a>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 row">
            <button class="unis-btn  unis-btn-primary " @click="setData">Primary</button>

        </div>
        <div class="card">
            <div class="card-header px-4">
                <div class="card-title">Card title</div>
            </div>

            <div class="card-body">
                <chart-bar height="250" width="100%"/>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>


    </div>

</template>
