"use client";

import { UpdateReservationAction } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

function UpdateReservationForm({ cabin, numGuests, observations, bookingId }) {
  const { maxCapacity, id: cabinId } = cabin;

  return (
    <form
      action={UpdateReservationAction}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={numGuests}
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={observations}
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton>Update Reservation</SubmitButton>
      </div>
      <input type="hidden" name="bookingId" value={bookingId} />
    </form>
  );
}

export default UpdateReservationForm;