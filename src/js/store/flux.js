const url = 'https://playground.4geeks.com/contact/agendas/jorge-pino';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			getData: () => {
				fetch(`${url}/contacts`)
					.then((response) => {
						if (response.status === 404) {
							console.error('Endpoint not found');
							return false;
						}
						return response.json();
					})
					.then(data => {
						if (data) {
							// console.log(data.agendas);
							setStore({ contacts: data.contacts });
						}
					})
					.catch(error => {
						console.error('Error fetching contacts:', error);
					});
			},
			addContact: (contact) => {
				fetch(`${url}/contacts`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (!response.ok) {
							// Si viene ok sigue, si no, tira exception
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(data => {
						const store = getStore();
						setStore({ contacts: [...store.contacts, data] });
					})
					.catch(error => {
						console.error('Error adding contact:', error);
					});
			},
			deleteContact: (id) => {
				fetch(`${url}/contacts/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => {
						// console.log(response)
						//Verificar que no venga vacio
						return response.text().then(text => text ? JSON.parse(text) : {});
					})
					.then(data => {
						const store = getStore();
						const updatedContacts = store.contacts.filter(contact => contact.id !== id);
						setStore({ contacts: updatedContacts });
					})
					.catch(error => {
						console.error('Error deleting contact:', error);
					});
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			updateContact: (contact) => {
				fetch(`${url}/contacts/${contact.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(data => {
						const store = getStore();
						const updatedContacts = store.contacts.map(c => c.id === contact.id ? data : c);
						setStore({ contacts: updatedContacts });
					})
					.catch(error => {
						console.error('Error updating contact:', error);
					});
			},
		}
	};
};

export default getState;
