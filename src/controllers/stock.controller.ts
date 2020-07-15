import { inject } from 'inversify';
import { controller, httpGet, queryParam, requestParam } from 'inversify-express-utils';
import TYPES from '../constants/types';
import { ITradeService, ITradeListDto, ITrade, ITradePriceDto } from '../interfaces/trade.interfaces';

@controller('/api/stocks')
export class StockController {
    constructor(@inject(TYPES.TradeService) private tradeService: ITradeService) {}

    @httpGet('/:stockId/trades')
    public async listTradesByStockId(
        @queryParam('type') type: ITrade["type"], @queryParam('start') start: Date, 
        @queryParam('end') end: Date, @requestParam('stockId') stockId: string,
        ): Promise<ITradeListDto> {
        const result = this.tradeService.getTradesByStockId({ 
            type, start, end, stockId,
        });
        return result;
    }

    @httpGet('/:stockId/price')
    public async getTradePriceByStockId(
        @requestParam('stockId') stockId: string, @queryParam('start') start: Date,
        @queryParam('end') end: Date, @queryParam('type') type: ITrade["type"]
    ): Promise<ITradePriceDto> {
        const result = this.tradeService.getTradesPriceByStockId({
            start, end, stockId, type
        });
        return result;
    }
}