import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contact } from "../component/contact";
import "../../styles/demo.css";
import { Modal } from "../component/modal";
import { EditContact } from "../component/editContact";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getData();
	}, []);

	const [idContact, setIdContact] = useState(undefined);
	const [nameContact, setNameContact] = useState(undefined);
	/* 	const [emailContact, setEmailContact] = useState(undefined);
		const [phoneContact, setPhoneContact] = useState(undefined);
		const [addressContact, setAddressContact] = useState(undefined); */

	// console.log('store.contacts', store.contacts)

	return (
		<div className="container d-flex flex-column mx-auto justify-content-center">
			<Link className="mx-auto" to="/new-contact">
				<button className="btn btn-success">Add a new contact</button>
			</Link>
			<ul className="list-group align-items-center">
				{
					store.contacts.length === 0 ? (
						<li className="list-group-item col-12 gap-3 mx-auto todo-item text-center">
							🤔 There are no contacts in your agenda. Please add at least one.
						</li>
					) : (
						store.contacts.map((contact, index) => {
							return (
								<li key={index} className="list-group-item d-flex justify-content-between">
									<Contact
										id={contact.id}
										name={contact.name}
										address={contact.address}
										phone={contact.phone}
										email={contact.email}
										updateId={setIdContact}
									/>
								</li>
							);
						})
					)
				}
			</ul>
			<Modal id={idContact} name={nameContact} />
			<EditContact id={idContact}/*  name={nameContact} email={emailContact}
				phone={phoneContact}
				address={addressContact} */ />
		</div>
	);
};
