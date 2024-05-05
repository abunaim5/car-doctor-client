import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user} = useContext(AuthContext);
    // console.log(user)

    const handelBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            customerName: name,
            date,
            email,
            phone,
            service: title,
            service_id: _id,
            price,
            img
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Service added successfully')
            }
        })
        console.log(booking);
    }

    return (
        <div>
            <h1 className="text-3xl text-center">{title}</h1>
            <form onSubmit={handelBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" placeholder="Your Name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="Your Number" name='phone' defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <input type="text" defaultValue={'$'+price} name='price' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    {/* <button className="btn btn-primary">Login</button> */}
                    <input type="submit" className="btn btn-primary" value='Order Confirm' />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;