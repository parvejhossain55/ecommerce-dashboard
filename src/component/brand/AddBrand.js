import React from "react";

function AddBrand() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <h4 className="card-header">Add New Brand</h4>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label className="form-label">
                                        Brand Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Brand Name"
                                    />
                                    {/* <div className="clearfix"></div> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Brand Description
                                </label>
                                <textarea
                                    className="form-control"
                                    placeholder="Enter Product Description"
                                ></textarea>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Submit Brand
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBrand;
