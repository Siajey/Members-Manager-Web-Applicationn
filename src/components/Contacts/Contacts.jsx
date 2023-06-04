import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ContactContext } from '../../context/contactContext'
import Contact from './Contact'
import Spinner from '../Spinner'
import { CURRENTLINE, PINK } from '../../helpers/colors'

const Contacts = () => {
  const { filteredContacts, loading, deleteContact } =
    useContext(ContactContext)

  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link
                  to={'/contacts/add'}
                  className="btn m-3 pt-2 mb-2 text-white"
                  style={{ backgroundColor: PINK }}
                >
                  create new contact
                  <i className="fa fa-plus-circle mx-2 text-black" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <Contact
                  key={c.id}
                  deleteContact={() => deleteContact(c.id, c.fullname)}
                  contact={c}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3 text-primary">...NOT FOUND</p>
                <img
                  src={require('../../assets/Chiang_final.gif')}
                  alt="Not Found"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default Contacts
