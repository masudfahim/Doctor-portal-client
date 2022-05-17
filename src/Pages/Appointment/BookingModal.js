import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formatedDate = format(date, 'pp')

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value
        console.log(_id, name, slot);

        const booking = {
            trearmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null);
            });



    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3' >
                        <input type="text" disabled name='' value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }


                        </select>
                        <input type="text" name='name' value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email} disabled class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value='Submit' class="input input-bordered w-full max-w-xs btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary " />
                    </form>


                </div>
            </div>

        </div>
    );
};

export default BookingModal;