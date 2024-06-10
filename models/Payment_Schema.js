
// يحتوي على حقول مثل معرف المستخدم، ومعرف الحجز، ومبلغ الدفع، وطريقة الدفع (إلكتروني أو نقدي).

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  numberOfSeats: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reservationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['electronic', 'cash'],
    required: true,
  },
});

const PaymentModel = mongoose.model('Payment', paymentSchema);

const numberOfSeats = 5; // عدد الكراسي المحجوزة
const salaPrice = 10; // تعيين سعر القاعة بالطريقة المناسبة

const totalAmount = salaPrice * numberOfSeats;

const payment = new PaymentModel({
  numberOfSeats: numberOfSeats,
  userId: userId, // تعيين معرف المستخدم
  reservationId: reservationId, // تعيين معرف الحجز
  amount: totalAmount, // تعيين مبلغ الدفع
  paymentMethod: paymentMethod, // تعيين طريقة الدفع
});