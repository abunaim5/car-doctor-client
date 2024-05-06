import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure();

    const url = `/bookings?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url, axiosSecure])

    const handleDelete = id => {
        const proceed = confirm('Are You Sure?');
        if(proceed){
            fetch(`https://car-doctor-server-one-delta.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Successfully Deleted');
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining);
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-one-delta.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
            console.log(data);
        })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>IMAGE</th>
                        <th>SERVICE</th>
                        <th>EMAIL</th>
                        <th>DATE</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;