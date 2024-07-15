import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = ({ id, name }) => {
    const { store, actions } = useContext(Context);
    /*    console.log(store) */

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {/* <div className="modal-body">
                        Estás por eliminar el siguiente usuario:
                        <p>{store.contacts[id].name}</p>
                    </div> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button onClick={() => actions.deleteContact(id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Entendido</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
