"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeListDto = void 0;
var TradeListDto = /** @class */ (function () {
    function TradeListDto() {
    }
    TradeListDto.toDTO = function (trades) {
        return {
            data: trades.map(function (_a) {
                var id = _a.id, type = _a.type, user = _a.user, symbol = _a.symbol, shares = _a.shares, price = _a.price, timestamp = _a.timestamp;
                return ({
                    id: id, type: type, user: user, symbol: symbol, shares: shares, price: price, timestamp: timestamp,
                });
            })
        };
    };
    return TradeListDto;
}());
exports.TradeListDto = TradeListDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhZGVMaXN0LmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kdG9zL1RyYWRlTGlzdC5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUE7SUFBQTtJQVFBLENBQUM7SUFQaUIsa0JBQUssR0FBbkIsVUFBb0IsTUFBZ0I7UUFDaEMsT0FBTztZQUNILElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBcUQ7b0JBQW5ELEVBQUUsUUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFNBQVMsZUFBQTtnQkFBUSxPQUFBLENBQUM7b0JBQ3pFLEVBQUUsSUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsV0FBQTtpQkFDbkQsQ0FBQztZQUYwRSxDQUUxRSxDQUFDO1NBQ04sQ0FBQztJQUNOLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksb0NBQVkifQ==