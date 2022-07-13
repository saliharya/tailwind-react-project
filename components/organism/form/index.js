import { useState } from 'react'

export default function Form() {

    const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

  return (
    <>
    <section className="pb-32">
        <div className="container">
            <div className="w-full px-4">
            </div>
            <form onSubmit={(e) => onSubmitForm(e)}>
                <div className="w-full lg:w-2/3 lg:mx-auto">
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                        <input type="text" onChange={handleChange} value={inputs.name} id="name" name="name"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary"/>
                    </div>
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="Email" className="text-base text-primary font-bold">Email</label>
                        <input type="email" onChange={handleChange} value={inputs.email} id="email" name="email"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary"/>
                    </div>
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                        <textarea type="text" onChange={handleChange} value={inputs.message} id="message" name="message"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary h-32"></textarea>
                    </div>
                    <div className="w-full">
                        <button type="submit" value="submit"
                            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">SEND
                            {form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div>Sent successfully</div>
				)}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
