"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var type;
(function (type) {
    type["BUY"] = "buy";
    type["SELL"] = "sell";
})(type = exports.type || (exports.type = {}));
;
var TradeSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.Number, required: true },
    type: { type: mongoose_1.Schema.Types.String },
    user: {
        id: mongoose_1.Schema.Types.Number,
        name: mongoose_1.Schema.Types.String,
    },
    symbol: { type: mongoose_1.Schema.Types.String },
    shares: { type: mongoose_1.Schema.Types.Number },
    price: { type: mongoose_1.Schema.Types.Number },
    timestamp: { type: mongoose_1.Schema.Types.Date },
});
exports.default = mongoose_1.default.model('Trade', TradeSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuZGIubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvbW9kZWxzL3RyYWRlLmRiLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFFdEQsSUFBWSxJQUFpQztBQUE3QyxXQUFZLElBQUk7SUFBRyxtQkFBVSxDQUFBO0lBQUUscUJBQVksQ0FBQTtBQUFDLENBQUMsRUFBakMsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBQTZCO0FBQUEsQ0FBQztBQW1COUMsSUFBTSxXQUFXLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQ25DLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNqRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0lBQ25DLElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ3ZCLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNO0tBQzNCO0lBQ0YsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtJQUNyQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0lBQ3JDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7SUFDcEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtDQUN6QyxDQUFDLENBQUM7QUFFSCxrQkFBZSxrQkFBUSxDQUFDLEtBQUssQ0FBWSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMifQ==