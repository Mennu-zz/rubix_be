import mongoose, { Document, Schema } from 'mongoose';
import { ITrade } from '../../interfaces/trade.interfaces';

type ITradeDoc = ITrade & Document;

const TradeSchema: Schema = new Schema({
    id: { type: Schema.Types.Number, required: true },
    type: { type: Schema.Types.String },
    user: { 
        id: Schema.Types.Number,
        name: Schema.Types.String,
     },
    symbol: { type: Schema.Types.String },
    shares: { type: Schema.Types.Number },
    price: { type: Schema.Types.Number },
    timestamp: { type: Schema.Types.Date },
});

export default mongoose.model<ITradeDoc>('Trade', TradeSchema);