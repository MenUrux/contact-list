import React, { useContext } from "react";

import "../../styles/demo.css";
import { FormNewContact } from "../component/formNewContact";

export const NewContact = () => {

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<FormNewContact />
				</div>
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
			{/* <Link to="/" className="text-link">or get back to contacts</Link> */}
		</div>
	);
};
