export enum type { BUY= 'buy', SELL= 'sell', };

export interface IUser {
    id: number,
    name: string,
}

export interface ITrade {
    id: number,
    type: type,
    user: IUser,
    symbol: string,
    shares: number,
    price: number,
    timestamp: Date,
}

export interface ITradeDto {
    data: ITrade,
}

export interface ITradeListDto {
    data: ITrade[],
}

export interface ITradeStockQueryInput {
    type: type,
    start: Date,
    end: Date,
    stockId: ITrade["symbol"],
}

export interface ITradePrice {
    symbol: string,
    min: number,
    max: number,
}

export interface ITradePriceDto {
    data: ITradePrice
}

export interface ITradeService {
    getTrades(): Promise<ITradeListDto>,
    createTrade(trade: ITrade): Promise<ITradeDto>,
    getTradesByUserId(userId: string): Promise<ITradeListDto>,
    remove(): Promise<void>,
    getTradesByStockId(query: ITradeStockQueryInput): Promise<ITradeListDto>,
    getTradesPriceByStockId(query: ITradeStockQueryInput): Promise<ITradePriceDto>,
}