import express from 'express';
import authentication from '../../middlewares/authMiddlewares';
import Payment from '../../controllers/paymentController';

const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  // paymentVerification,
  verification,
  getVerifiedTransactions,
  getPayment,
} = Payment;

const paymentRouter = express.Router();

paymentRouter.post('/verify/transaction', verification);
// paymentRouter.patch('/verify/:transaction_id', isUserLoggedIn, paymentVerification);
// paymentRouter.patch('/verify/transaction', isUserLoggedIn, paymentVerification);
paymentRouter.get('/transactions', isUserLoggedIn, isUserAdmin, getVerifiedTransactions);
paymentRouter.get('/payment', getPayment);

export default paymentRouter;
