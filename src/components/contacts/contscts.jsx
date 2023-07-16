import React, {useState, useEffect} from "react";
import css from './contscts.module.css'
import { nanoid } from 'nanoid'
export function Contacts({contacts,onDelete}){
    const contactIds = contacts.map(() => nanoid());
const [filteredContacts, setFilteredContacts] = useState([]);
useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);
return(
<div className={css.contacts_box}>
    <input className={css.contacts_input} onChange={(e) => {
        if(e.target.value !== ''){
            let searchText = e.target.value.toLowerCase();
            let filteredObj = contacts.filter(obj => obj.name.toLowerCase().includes(searchText));
            setFilteredContacts(filteredObj); 
        }else {
            setFilteredContacts(contacts);
        }
        
    }} ></input>
    <ul className={css.contacts_css}>{filteredContacts.map((contact,index) => {
        return <li className={css.contact_item} id={contactIds[index]} key={contact.id}><p className={css.contact_text}>{contact.name} : {contact.number}</p><button className={css.contact_btn} onClick={() => onDelete(contact.id)}>Видалити</button></li>
    })}</ul>
</div>)
}