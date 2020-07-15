import { inject } from 'inversify';
import { controller, httpGet, httpPost, httpDelete, queryParam, requestBody } from 'inversify-express-utils';
import TYPES from '../constants/types';
import { ITradeService, ITrade, ITradeListDto, ITradeDto } from '../interfaces/trade.interfaces';

@controller('/api/trades')
export class TradeController {
    constructor(@inject(TYPES.TradeService) private tradeService: ITradeService) { }

    @httpGet('/')
    public async list(): Promise<ITradeListDto> {
        const result: ITradeListDto = await this.tradeService.getTrades();
        return result;
    }

    @httpPost('/')
    public async create(@requestBody() payload: ITrade): Promise<ITradeDto> {
        const result: ITradeDto = await this.tradeService.createTrade(payload);
        return result;
    }

    @httpGet('/users/:userId')
    public async getTradesByUserId(@queryParam('userId') userId: string) : Promise<ITradeListDto> {
        const result: ITradeListDto = await this.tradeService.getTradesByUserId(userId);
        return result;
    }

    @httpDelete('/')
    public async remove(): Promise<void> {
        await this.tradeService.remove();
    }
}