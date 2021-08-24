import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_CONTACTS } from "../constant/type";


export const addContact = (contact) => ({

    type: CREATE_CONTACT,
    payload: contact,

})

export const getConatct = (id) => ({
    type: GET_CONTACT,
    payload: id,
})

export const updtaeContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})

export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
});

export const clearContacts = () => ({
    type: CLEAR_CONTACT,
})

export const deleteAllContacts = () => ({
    type: DELETE_SELECTED_CONTACTS,
})