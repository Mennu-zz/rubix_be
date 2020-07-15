"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerLoader = void 0;
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("./constants/types"));
var trade_controller_1 = require("./controllers/trade.controller");
var trade_service_1 = require("./services/trade.service");
var ContainerLoader = /** @class */ (function () {
    function ContainerLoader() {
    }
    ContainerLoader.load = function () {
        var container = new inversify_1.Container();
        container.bind(types_1.default.TradeController).to(trade_controller_1.TradeController);
        container.bind(types_1.default.TradeService).to(trade_service_1.TradeService);
        return container;
    };
    return ContainerLoader;
}());
exports.ContainerLoader = ContainerLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsNERBQXNDO0FBQ3RDLG1FQUFpRTtBQUNqRSwwREFBd0Q7QUFFeEQ7SUFBQTtJQU9BLENBQUM7SUFOaUIsb0JBQUksR0FBbEI7UUFDSSxJQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFrQixlQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLGtDQUFlLENBQUMsQ0FBQztRQUMzRSxTQUFTLENBQUMsSUFBSSxDQUFlLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsNEJBQVksQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksMENBQWUifQ==