"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeDto = void 0;
var TradeDto = /** @class */ (function () {
    function TradeDto() {
    }
    TradeDto.toDto = function (_a) {
        var id = _a.id, type = _a.type, user = _a.user, symbol = _a.symbol, shares = _a.shares, price = _a.price, timestamp = _a.timestamp;
        return {
            data: {
                id: id, type: type, user: user, symbol: symbol, shares: shares, price: price, timestamp: timestamp
            }
        };
    };
    return TradeDto;
}());
exports.TradeDto = TradeDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhZGUuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2R0b3MvVHJhZGUuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BO0lBQUE7SUFRQSxDQUFDO0lBUGlCLGNBQUssR0FBbkIsVUFBb0IsRUFBNkQ7WUFBM0QsRUFBRSxRQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsU0FBUyxlQUFBO1FBQ2xFLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxJQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBO2FBQ25EO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw0QkFBUSJ9