import { Container } from 'inversify';
import TYPES from './constants/types';
import { TradeController } from './controllers/trade.controller';
import { TradeService } from './services/trade.service';
import { StockController } from './controllers/stock.controller';
export class ContainerLoader {
    public static load(): Container {
        const container = new Container();
        container.bind<TradeController>(TYPES.TradeController).to(TradeController);
        container.bind<TradeService>(TYPES.TradeService).to(TradeService);
        container.bind<StockController>(TYPES.StockController).to(StockController);
        return container;
    }
}