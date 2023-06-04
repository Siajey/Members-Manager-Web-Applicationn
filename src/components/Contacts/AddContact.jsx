import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { contactSchema } from '../../validations/contactValidation'
import { ContactContext } from '../../context/contactContext'
import { Spinner } from '../'
import { COMMENT, GREEN, PURPLE } from '../../helpers/colors'


const AddContact = () => {
  const { loading, groups, createContact } = useContext(ContactContext)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-5">
            <img
              alt="whatever"
              src={require('../../assets/shutterstock_636688606.jpg')}
              height="400px"
              style={{
                zIndex: '-1',
                top: '200px',
                left: '360px',
                position:'absolute',  
                opacity: '50%',
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    create new contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <Formik
                    initialValues={{
                      fullname: '',
                      photo: '',
                      mobile: '',
                      email: '',
                      job: '',
                      group: '',
                    }}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                      createContact(values)
                    }}
                  >
                    <Form>
                      <div className="mb-3">
                        <Field
                          name="fullname"
                          type="text"
                          className="form-control"
                          placeholder="firstname & lastname"
                        />
                        <ErrorMessage
                          name="fullname"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          name="photo"
                          type="text"
                          className="form-control"
                          placeholder="image-address"
                        />
                        <ErrorMessage
                          name="photo"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          name="mobile"
                          type="number"
                          className="form-control"
                          placeholder="phone-number"
                        />
                        <ErrorMessage
                          name="mobile"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="email-address"
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="text"
                          name="job"
                          className="form-control"
                          placeholder="job"
                        />
                        <ErrorMessage
                          name="job"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          name="group"
                          className="form-control"
                          as="select"
                        >
                          <option value="">select group</option>
                          {groups.length > 0 &&
                            groups.map((group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="group"
                          render={(msg) => (
                            <div className="text-danger fw-bold fs-5">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                      <div className="mx-2">
                        <input
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: PURPLE }}
                          value="create new contact"
                        />
                        <Link
                          to={'/contacts'}
                          className="btn mx-2"
                          style={{ backgroundColor: COMMENT }}
                        >
                          cancel
                        </Link>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default AddContact


