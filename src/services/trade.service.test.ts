import 'reflect-metadata';
import { TradeService } from './trade.service';
import { type } from '../interfaces/trade.interfaces';
import Trade from '../db/models/trade.db.model';
import 'jest';

describe('Trade Service', () => {
    it('Should create a trade and return it', async () => {
        const tradeService = new TradeService();
        const payload = {
            id: 1,
            type: type.SELL,
            user: {
                id: 1,
                name: 'test'
            },
            symbol: 'zql',
            shares: 12,
            price: 120,
            timestamp: new Date()
        }
        const mockSpy = jest.spyOn(Trade, "create");
        mockSpy.mockImplementation((): Promise<any> => {
            return Promise.resolve(payload);
        });
        const result = await tradeService.createTrade(payload);
        expect(result.data).toMatchObject(payload);
    })
})
