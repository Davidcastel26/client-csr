import { FormInput, SubmitBtn } from "../components"
import { Form, Link } from "react-router-dom"

export const Register = () => {



  return (<section className="h-screen grid place-items-center">
    <Form 
      method="POST"
      className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
    >
      <h4 className="text-center text-3xl font-bold">
        Resiter
      </h4>
      <FormInput
        type='text'
        label='username'
        name='username'
      />
      <FormInput
        type='email'
        label='email'
        name='email'
      />
      <FormInput
        type='password'
        label='password'
        name='password'
      />
      <div className="mt-4">
        <SubmitBtn text='register' />
      </div>
      <button type="button" className="btn btn-secondary btn-block">
        gest user
      </button>
      <p className="text-center">
        Already a guest yet? <Link to="/login" className="ml-2 link link-hover link-primary capitalize" > login </Link>
      </p>
    </Form>
  </section>)
}
