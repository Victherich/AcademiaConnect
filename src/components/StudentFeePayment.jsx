import React, { useState } from 'react';
import '../CSS/StudentFeePayment.css';
import Swal from 'sweetalert2'

const students = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    contact: '1234567890',
    class: '4th Grade',
    feesPaid: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    contact: '0987654321',
    class: '5th Grade',
    feesPaid: true,
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    contact: '1122334455',
    class: '6th Grade',
    feesPaid: false,
  }
];

const feeStructure = {
  '4th Grade': 100000,
  '5th Grade': 120000,
  '6th Grade': 150000,
};

const StudentFeePayment = () => {
  const [student, setStudent] = useState(students[2]);

  const handlePayment = () => {
    const amountValue = feeStructure[student.class]; // Convert to smallest currency unit
    const key = `key${Math.random()}`;

    try {
      window.Korapay.initialize({
        key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
        reference: key,
        amount: amountValue,
        currency: "NGN",
        customer: {
          name: student.name,
          email: student.email,
        },
        onClose: function () {
          console.log('Payment modal closed');
        },
        onSuccess: function (data) {
          console.log('Payment successful:', data);
          // Update the student's payment status
          setStudent(prevStudent => ({ ...prevStudent, feesPaid: true }));
          // Typically, you would also update the backend here
        //   alert('Payment successful!');
        Swal.fire({icon:"success",title:"We have sent a confirmation to your email",})
        },
        onFailed: function (data) {
          console.error('Payment failed:', data);
          alert('Payment failed, please try again.');
        },
      });
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="student-fee-payment-container">
      <h2 className="student-fee-payment-title">Hi, {student.name}</h2>
      <p className="student-fee-payment-info">Class: {student.class}</p>
      <p className="student-fee-payment-info">Email: {student.email}</p>
      <p className="student-fee-payment-info">Contact: {student.contact}</p>
      <p className={student.feesPaid ? "student-fee-payment-info2" : "student-fee-payment-info"}>
        Fees Status: {student.feesPaid ? "Paid" : "Unpaid"}
      </p>
      <p className="student-fee-payment-info">Amount to be paid: ₦{feeStructure[student.class]}</p>
      {!student.feesPaid && (
        <button className="student-fee-payment-button" onClick={handlePayment}>Pay Fees</button>
      )}
      {student.feesPaid && <p className="student-fee-payment-info">Thank you for your payment!</p>}
    </div>
  );
};

export default StudentFeePayment;