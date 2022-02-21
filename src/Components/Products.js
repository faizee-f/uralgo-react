import React from 'react';

function Products() {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Our Products</h3>
            <hr />
            <div className="row pt-5 justify-content-around">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div class="card p-4 text-center mb-5 shadow rounded">
                        <div class="card-body">
                            <h5 class="card-title">Learn Flow of code</h5> <hr />
                            <p class="card-text">Learn how algorithm works with the help of our online debugger.</p>
                            <a href="#" class="btn btn-primary rounded-pill py-2">Let's Go<i class="px-2 fas fa-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div class="card p-4 text-center mb-5 shadow rounded">
                        <div class="card-body">
                            <h5 class="card-title">Coding Challenge</h5> <hr />
                            <p class="card-text">Try the coding challenges from various programmers, Add your own challenges too</p>
                            <a href="#" class="btn btn-primary rounded-pill py-2">Let's Go<i class="px-2 fas fa-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div class="card p-4 text-center mb-5 shadow rounded">
                        <div class="card-body">
                            <h5 class="card-title">Online Compiler</h5> <hr />
                            <p class="card-text">Try our online compiler for testing your codes, with various language support</p>
                            <a href="#" class="btn btn-primary rounded-pill py-2">Let's Go<i class="px-2 fas fa-chevron-right"></i> </a>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Products;
