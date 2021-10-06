import React, { Component } from 'react'

import { NetlifyForm, Honeypot } from 'react-netlify-forms'

export default function ContactForm() {
    return (
        <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
            {({ handleChange, success, error }) => (
                <div className="container d-flex justify-content-center">
                    <div className="border shadow col-12 col-md-8 p-4">
                        <Honeypot />
                        {success && <p>Bedankt voor je bericht, ik reageer zo spoedig mogelijk.</p>}
                        {error && (
                            <p className="col-12 col-md-6 my-3  mx-1 px-4">Excuus, er gaat iets mis. Probeer het later nog eens.</p>
                        )}
                        <div className="row d-flex">
                            <div className="col-12 col-md-6 my-3 px-5" >
                                <label htmlFor='name'>Naam:</label>
                            </div>
                            <div className="col-12 col-md-5 my-3">
                                <input className="w-100" type='text' name='name' id='name' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-12 col-md-6 my-3 px-5" >
                                <label htmlFor='email'>Emailadres:</label>
                            </div>
                            <div className="col-12 col-md-5 my-3">
                                <input className="w-100" type='email' name='email' id='email' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-12 col-md-6 my-3 px-5" >
                                <label htmlFor='company'>Bedrijfsnaam:</label>
                            </div>
                            <div className="col-12 col-md-5 my-3">
                                <input className="w-100" type='text' name='company' id='company' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-12 col-md-5 my-3 px-5">
                                <label htmlFor='message'>Message:</label>
                            </div>
                            <div className="col-12 col-md-6 my-3">
                                <textarea className="w-100" type='text' name='message' id='message' rows='4' onChange={handleChange}/>
                            </div>  
                        </div>
                        <div className="border text-right my-3 mx-5">
                            <button type='submit' className="btn btn-primary w-100">Verzenden</button>
                        </div>
                    </div>
                </div>
            )}
        </NetlifyForm>
    )
}