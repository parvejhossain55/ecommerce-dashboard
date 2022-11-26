import React from "react";

function AddProduct() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <h4 className="card-header">Add New Product</h4>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label className="form-label">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Name"
                                    />
                                    {/* <div className="clearfix"></div> */}
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label">Color</label>
                                    <select className="form-control">
                                        <option>Select Color</option>
                                        <option value={"red"}>Red</option>
                                        <option value={"green"}>Green</option>
                                        <option value={"blue"}>Blue</option>
                                        <option value={"purple"}>Purple</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Price"
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Product Quantity"
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label">
                                        Product Status
                                    </label>
                                    <select className="form-control">
                                        <option>Select Product Status</option>
                                        <option value={"inStock"}>
                                            In Stock
                                        </option>
                                        <option value={"outStock"}>
                                            Out of Stock
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="form-label">
                                        Product Unit
                                    </label>
                                    <select className="form-control">
                                        <option>Select Product Unit</option>
                                        <option value={"gm"}>Gm</option>
                                        <option value={"kg"}>Kg</option>
                                        <option value={"litre"}>Litre</option>
                                        <option value={"pcs"}>Pcs</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label">Weight</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Product Weight"
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label">
                                        Product Types
                                    </label>
                                    <select className="form-control">
                                        <option>Select Product Types</option>
                                        <option value={"feature"}>
                                            Feature
                                        </option>
                                        <option value={"onsale"}>Onsale</option>
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Product Description
                                </label>
                                <textarea
                                    className="form-control"
                                    placeholder="Enter Product Description"
                                ></textarea>
                                <div className="clearfix"></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="form-label">
                                        Product Category
                                    </label>
                                    <select className="form-control">
                                        <option>Select Product Category</option>
                                        <option value={"inStock"}>
                                            In Stock
                                        </option>
                                        <option value={"outStock"}>
                                            Out of Stock
                                        </option>
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label">
                                        Product Brand
                                    </label>
                                    <select className="form-control">
                                        <option>Select Product Brand</option>
                                        <option value={"inStock"}>
                                            In Stock
                                        </option>
                                        <option value={"outStock"}>
                                            Out of Stock
                                        </option>
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            {/* <button type="submit" className="btn btn-primary">
                                                        Sign in
                                                    </button> */}
                        </form>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Submit Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
