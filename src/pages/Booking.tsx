import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface TimeSlot {
  time: string;
  available: boolean;
}

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'date' | 'time' | 'details'>('date');

  // Mock time slots - in a real app, these would come from your backend
  const timeSlots: TimeSlot[] = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
  ];

  const handleDateSelect = (
    value: Date | null | [Date | null, Date | null],
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setStep('time');
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('details');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking details:', {
      date: selectedDate,
      time: selectedTime,
      // Add other form data here
    });
  };

  return (
    <div className="page-container animate-fade-in">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
        <p className="text-xl text-gray-600">
          Schedule your physical therapy session at your convenience
        </p>
      </div>

      {/* Booking Steps */}
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
          <div className={`step ${step === 'date' ? 'active' : ''}`}>
            <div className="step-circle">1</div>
            <div className="step-text">Select Date</div>
          </div>
          <div className={`step ${step === 'time' ? 'active' : ''}`}>
            <div className="step-circle">2</div>
            <div className="step-text">Choose Time</div>
          </div>
          <div className={`step ${step === 'details' ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <div className="step-text">Your Details</div>
          </div>
        </div>

        {/* Booking Content */}
        <div className="card">
          {step === 'date' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">Select a Date</h2>
              <Calendar
                onChange={handleDateSelect}
                value={selectedDate}
                minDate={new Date()}
                className="w-full"
              />
            </div>
          )}

          {step === 'time' && selectedDate && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">Select a Time</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(slot.time)}
                    className={`${
                      slot.available
                        ? 'btn-secondary'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    } p-4 rounded-lg text-center transition-all duration-200`}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'details' && selectedDate && selectedTime && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="input"
                  ></textarea>
                </div>

                <div className="card bg-gray-50 border-gray-200">
                  <h3 className="font-semibold mb-4 text-gray-900">Appointment Summary</h3>
                  <p className="text-gray-700">Date: {selectedDate.toLocaleDateString()}</p>
                  <p className="text-gray-700">Time: {selectedTime}</p>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking; 