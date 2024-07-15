import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const EditContact = ({ id }) => {
    const { store, actions } = useContext(Context);

    // para que no aparezca lo siguiente:
    // A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. 
    const [contact, setContact] = useState({
        id: "",
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    //De esta forma puedo llenar los elementos dentro del modal, vienen del store
    useEffect(() => {
        const selectedContact = store.contacts.find(contact => contact.id === id);

        if (selectedContact) {
            setContact(selectedContact);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = () => {
        actions.updateContact(contact);
    };

    return (
        <div className="modal fade" id="editContactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editContactModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editContactModalLabel">Editar contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                {/* No puedo obtenerlos si hago store.contacts[id].name */}
                                <input type="text" className="form-control" required id="name" name="name" value={contact.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" required id="address" name="address" value={contact.address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Telephone</label>
                                <input type="text" className="form-control" required id="phone" name="phone" value={contact.phone} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" required id="email" name="email" value={contact.email} onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
