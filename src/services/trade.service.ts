import { injectable } from 'inversify';
import { Error } from 'mongoose';
import Trade from '../db/models/trade.db.model';
import { ITrade, ITradeService, ITradeDto, ITradeListDto, ITradeStockQueryInput, ITradePriceDto } from '../interfaces/trade.interfaces';
import { TradeListDto } from '../dtos/tradeList.dto';
import { TradeDto } from '../dtos/trade.dto';
import { TradePriceDto } from '../dtos/tradePrice.dto';
import Catch from '../decorators/errorHandler.decorator';

@injectable()
export class TradeService implements ITradeService{
    
    @Catch()
    public async getTrades(): Promise<ITradeListDto> {
        const result: ITrade[] = await Trade.find().exec();
        return TradeListDto.toDTO(result);
    }

    @Catch()
    public async createTrade(trade: ITrade): Promise<ITradeDto> {
        const result: ITrade = await Trade.create(trade);
        return TradeDto.toDto(result);
    }

    @Catch()
    public async getTradesByUserId(userId: string): Promise<ITradeListDto> {
        const result: ITrade[] = await Trade.find({ 'user.id': userId }).exec();
        return TradeListDto.toDTO(result);
    }

    @Catch()
    public async remove(): Promise<void> {
        await Trade.remove({});
    }

    @Catch()
    public async getTradesByStockId(query: ITradeStockQueryInput): Promise<ITradeListDto> {
        const result: ITrade[] = await Trade.find({
            type: query.type,
            timestamp: {
                $gte: query.start,
                $lte: query.end,
            },
            symbol: query.stockId,
        }).exec();
        return TradeListDto.toDTO(result);
    }

    @Catch()
    public async getTradesPriceByStockId(query: ITradeStockQueryInput): Promise<ITradePriceDto> {
        const result: ITrade[] = await Trade.find({
            timestamp: {
                $gte: query.start,
                $lte: query.end,
            },
            symbol: query.stockId
        }).exec();
        return TradePriceDto.toDto(result, query.stockId);
    }
}