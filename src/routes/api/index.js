import express from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import productRouter from './productRoutes';
import locationRouter from './locationRoutes';
import marketRouter from './marketRoutes';
import orderRouter from './orders';
import paymentRouter from './payment';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/location',locationRouter);
apiRouter.use('/market',marketRouter);
apiRouter.use('/order',orderRouter);
apiRouter.use('/payment',paymentRouter);

export default apiRouter;
