import React from "react";

export const Contact = ({ id, name, address, phone, email, updateId, nameContact }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://i.pravatar.cc/300`} className="img-fluid rounded-circle col-12" alt="..." />
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="card-body d-flex justify-content-between">
                        <div className="">
                            <h5 className="card-title">{name}</h5>
                            <div className="row">
                                <div className="col-12"> <i className="fa-solid fa-location-dot"></i> {address}</div>
                                <div className="col-12"> <i className="fa fa-phone" aria-hidden="true"></i> {phone}</div>
                                <div className="col-12"> <i className="fa fa-envelope" aria-hidden="true"></i> {email}</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <button type="button" onClick={() => { updateId(id) }} className="btn btn-secondary h-auto" data-bs-toggle="modal" data-bs-target="#editContactModal">
                                <i className="fa-solid fa-pen"></i>
                            </button>
                            <button type="button" onClick={() => { updateId(id) }} className="btn btn-danger h-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
