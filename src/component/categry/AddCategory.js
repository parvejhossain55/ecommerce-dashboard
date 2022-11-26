import React from "react";

function AddCategory() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <h4 className="card-header">Add New Category</h4>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label className="form-label">
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Category Name"
                                    />
                                    {/* <div className="clearfix"></div> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Category Description
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
                            Submit Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;
