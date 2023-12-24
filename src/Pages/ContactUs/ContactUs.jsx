import Swal from "sweetalert2";

const ContactUs = () => {

    const handleMessahe = (event) => {
        event.preventDefault()
        Swal.fire({
            title: "Message Sent",
            text: "Your Message Successfully Sent",
            icon: "success"
        });
    }

    return (
        <div className="w-11/12 md:w-3/4 mx-auto md:mt-12 mt-6">
            <div className="bg-base-200 shadow-lg md:w-8/12 mx-auto p-4 rounded-lg">
                <form onSubmit={handleMessahe}>
                    <h4 className="text-center text-2xl font-semibold">Get In Touch</h4>
                    <div className="flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="full name" name="fullName" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Massage</span>
                        </div>
                        <textarea className="w-full border-2 border-gray-300 oultine-gray-300 p-2" placeholder="Send message" name="" id="" cols="25" rows="5" required></textarea>
                    </label>
                    <label className="form-control w-full mt-6 pb-6">
                        <input type="submit" value='Send Message' className="input input-bordered w-full bg-gradient-to-r from-[#344e7d] via-[#53718b] to-[#41649f] text-white" />
                    </label>
                </form>
            </div>
        </div>
    )
}


export default ContactUs