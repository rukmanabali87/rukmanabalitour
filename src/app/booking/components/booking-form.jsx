'use client'
import { useState } from "react";

export default function BookingForm({ bookingData }) {
    const [form, setForm] = useState({
        name: "",
        whatsapp: "",
        email: "",
        date: bookingData.date || "",
        pax: bookingData.pax || 1,
        hotel: "",
        notes: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("FORM DATA:", form);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow">

            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="WhatsApp" name="whatsapp" value={form.whatsapp} onChange={handleChange} />
            <Input label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
            <Input label="Tour Date" name="date" value={form.date} onChange={handleChange} type="date" />
            <Input label="Number of Participants" name="pax" value={form.pax} onChange={handleChange} type="number" />
            <Input label="Hotel Pickup" name="hotel" value={form.hotel} onChange={handleChange} />

            <div>
                <label className="block font-medium mb-2">Notes (Optional)</label>
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 dark:bg-slate-800"
                    rows={4}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#397A3D] hover:bg-emerald-800 text-white py-3 rounded-lg transition"
            >
                Continue to Payment
            </button>
        </form>
    );
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="block font-medium mb-2">{label}</label>
            <input
                {...props}
                className="w-full border rounded-lg p-3 dark:bg-slate-800"
                required
            />
        </div>
    );
}