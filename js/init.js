<!--    Our services-->
$.ajax({
    url: "json/services.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        $('#services_container').append(`<div class="row" id="services_row"></div>`);
        data.services.forEach((i) => {
            $('#services_row').append(`<div class="col-lg-6 col-md-6 services_item">
                                            <div class="d-flex">
                                                <div class="hexagon_services">
                                                    <i class="${i.icon}"></i>
                                                </div>
                                                <span>${i.title}</span>
                                            </div>
                                            <div class="services_info">
                                                <p>${i.info}</p>
                                            </div>
                                        </div>`)
        })
    }
});


<!--    Plans Bestseller-->
$.ajax({
    url: "json/bestseller.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        $('#bestseller_container').append(`<div class="row" id="bestseller_row"></div>`);
        data.bestseller.forEach((i) => {
            $('#bestseller_row').append(`<div class="col-lg-3 col-md-6 col-sm-6 text-center d-flex justify-content-center">
                                            <div class="bestseller_item">
                                                <div class="bestseller_reseller"><h6>${i.title}</h6></div>
                                                <div class="bestseller_value"><span>${i.value}<sub> ${i.data}</sub></span></div>
                                                <div class="bestseller_info">
                                                    <p>${i.info1}</p>
                                                    <p>${i.info2}</p>
                                                    <p>${i.info3}</p>
                                                    <p>${i.info4}</p>
                                                    <p>${i.info5}</p>
                                                    <p>${i.info6}</p>
                                                </div>
                                                <div class="btn1">
                                                    <button type="button">${i.btn}</button>
                                                </div>
                                            </div>
                                        </div>`)
        })
    }
});



<!--Header-->
$.ajax({
    url: "json/header.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        data.header.forEach((i) => {
            $('#nav-menu-container').append(`<a class="navbar-brand" href="#">
                                                <div class='octagonWrap'>
                                                    <div class='octagon'>
                                                        <img src="${i.img}" alt="creativia">
                                                    </div>
                                                </div>
                                             </a>
                                             <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                             </button>
                                             <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav ml-auto text-center">
                                                    <li class="nav-item p-2 active"><a class="nav-link" href="#intro">${i.home}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#about_creativia">${i.about}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#portfolio">${i.portfolio}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#clients">${i.clients}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#team">${i.team}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#services">${i.services}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#blog">${i.blog}</a></li>
                                                    <li class="nav-item p-2"><a class="nav-link" href="#contact">${i.contact}</a></li>
                                                </ul>
                                              </div>`);
        })
    }
});