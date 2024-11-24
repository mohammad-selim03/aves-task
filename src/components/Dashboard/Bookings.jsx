import React from "react";
import furnitureImg from "../../assets/furnitures.jpg";

// BookingCard Component to Render Each Booking Item
const BookingCard = ({ imgSrc, address, dateRange, duration, amount }) => {
  return (
    <div className="flex items-center justify-between gap-5 dark:text-white">
      <img
        src={imgSrc}
        alt="Booking"
        className="w-10 h-10 rounded-full object-cover"
      />
      <p>{address}</p>
      <p>{dateRange}</p>
      <p>{duration}</p>
      <p>${amount}</p>
    </div>
  );
};

// Bookings Component
const Bookings = () => {
  const bookingData = [
    {
      imgSrc: furnitureImg,
      address: "196 Kansas Ave...",
      dateRange: "24.08-1.09",
      duration: "7 Days",
      amount: "2178.78",
    },
    {
      imgSrc: furnitureImg,
      address: "196 Kansas Ave...",
      dateRange: "24.08-1.09",
      duration: "7 Days",
      amount: "2178.78",
    },
    {
      imgSrc: furnitureImg,
      address: "196 Kansas Ave...",
      dateRange: "24.08-1.09",
      duration: "7 Days",
      amount: "2178.78",
    },
  ];

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">
        New Bookings{" "}
        <span className="bg-green-600 px-2 text-white rounded-full">
          {bookingData.length}
        </span>
      </h3>
      <div className="border-2 border-gray-300 px-5 py-3 rounded-xl mt-3 text-gray-900 overflow-y-auto max-h-96 w-full">
        <div className="flex flex-col gap-4">
          {bookingData.map((booking, index) => (
            <BookingCard
              key={index}
              imgSrc={booking.imgSrc}
              address={booking.address}
              dateRange={booking.dateRange}
              duration={booking.duration}
              amount={booking.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
