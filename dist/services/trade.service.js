"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeService = void 0;
var inversify_1 = require("inversify");
var trade_db_model_1 = __importDefault(require("../db/models/trade.db.model"));
var TradeList_dto_1 = require("../dtos/TradeList.dto");
var Trade_dto_1 = require("../dtos/Trade.dto");
var TradeService = /** @class */ (function () {
    function TradeService() {
    }
    TradeService.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, trade_db_model_1.default.find().exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, TradeList_dto_1.TradeListDto.toDTO(result)];
                }
            });
        });
    };
    TradeService.prototype.createTrade = function (trade) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, trade_db_model_1.default.create(trade)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Trade_dto_1.TradeDto.toDto(result)];
                }
            });
        });
    };
    TradeService.prototype.getTradesByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, trade_db_model_1.default.find({ 'user.id': userId }).exec()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, TradeList_dto_1.TradeListDto.toDTO(result)];
                }
            });
        });
    };
    TradeService = __decorate([
        inversify_1.injectable()
    ], TradeService);
    return TradeService;
}());
exports.TradeService = TradeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy90cmFkZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUV2QywrRUFBNEQ7QUFDNUQsdURBQW9FO0FBQ3BFLCtDQUF3RDtBQVF4RDtJQUFBO0lBZUEsQ0FBQztJQWRnQixnQ0FBUyxHQUF0Qjs7Ozs7NEJBQzZCLHFCQUFNLHdCQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QyxNQUFNLEdBQWEsU0FBeUI7d0JBQ2xELHNCQUFPLDRCQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDOzs7O0tBQ3JDO0lBRVksa0NBQVcsR0FBeEIsVUFBeUIsS0FBYTs7Ozs7NEJBQ1gscUJBQU0sd0JBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUExQyxNQUFNLEdBQVcsU0FBeUI7d0JBQ2hELHNCQUFPLG9CQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDOzs7O0tBQ2pDO0lBRVksd0NBQWlCLEdBQTlCLFVBQStCLE1BQWM7Ozs7OzRCQUNoQixxQkFBTSx3QkFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBakUsTUFBTSxHQUFhLFNBQThDO3dCQUN2RSxzQkFBTyw0QkFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQzs7OztLQUNyQztJQWRRLFlBQVk7UUFEeEIsc0JBQVUsRUFBRTtPQUNBLFlBQVksQ0FleEI7SUFBRCxtQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLG9DQUFZIn0=