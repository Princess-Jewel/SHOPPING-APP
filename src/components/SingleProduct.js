import React, {Component} from 'react';


class  SingleProduct extends Component{
    render(){
        return(
 
            
<body class="signup">
    <div class="single">
        <h3 style={{ TextAlign: "center"}}>iPhone SE 2</h3>
        <hr/>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-3">
                        <img src="" alt=""/>
                    </div>
                    <div class="col-9 p-3">
                        <div class="row p-3">
                            <div class="col-12">
                                <p> Released in April, 2020. This is a must have for every tech savvy personnel. It is affordable and has long battery life. 
                                                        Dont miss out on this beauty.</p>
                            </div>
                            <div class="col-12 p-3">
                    { /*  eslint-disable-next-line */}
                                <a class="btn btn-success link-buttons" onclick="added()"><i class="fa fa-cart-plus" aria-hidden="true" ></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    
    <script>
        function added(){
            alert("This product has been added to your cart. Thank you for shopping with us.")
        }
    </script>
</body>
        )
    }
}
export default SingleProduct;