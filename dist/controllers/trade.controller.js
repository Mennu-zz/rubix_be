"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.TradeController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = __importDefault(require("../constants/types"));
var TradeController = /** @class */ (function () {
    function TradeController(tradeService) {
        this.tradeService = tradeService;
    }
    TradeController.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tradeService.getTrades()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TradeController.prototype.create = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = req.body;
                        return [4 /*yield*/, this.tradeService.createTrade(payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TradeController.prototype.getTradesByUserId = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        return [4 /*yield*/, this.tradeService.getTradesByUserId(userId)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TradeController.prototype, "list", null);
    __decorate([
        inversify_express_utils_1.httpPost('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TradeController.prototype, "create", null);
    __decorate([
        inversify_express_utils_1.httpGet('/users/:userId'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TradeController.prototype, "getTradesByUserId", null);
    TradeController = __decorate([
        inversify_express_utils_1.controller('/api/trades'),
        __param(0, inversify_1.inject(types_1.default.TradeService)),
        __metadata("design:paramtypes", [Object])
    ], TradeController);
    return TradeController;
}());
exports.TradeController = TradeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90cmFkZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFtQztBQUVuQyxtRUFBd0U7QUFFeEUsNkRBQXVDO0FBTXZDO0lBQ0kseUJBQWdELFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUksQ0FBQztJQUduRSw4QkFBSSxHQUFqQjs7Ozs7NEJBQ2tDLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUEzRCxNQUFNLEdBQWtCLFNBQW1DO3dCQUNqRSxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFHWSxnQ0FBTSxHQUFuQixVQUFvQixHQUFZOzs7Ozs7d0JBQ3RCLE9BQU8sR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUNQLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBaEUsTUFBTSxHQUFjLFNBQTRDO3dCQUN0RSxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFHWSwyQ0FBaUIsR0FBOUIsVUFBK0IsR0FBWTs7Ozs7O3dCQUMvQixNQUFNLEdBQUssR0FBRyxDQUFDLE1BQU0sT0FBZixDQUFnQjt3QkFDQSxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBekUsTUFBTSxHQUFrQixTQUFpRDt3QkFDL0Usc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBakJEO1FBREMsaUNBQU8sQ0FBQyxHQUFHLENBQUM7Ozs7K0NBSVo7SUFHRDtRQURDLGtDQUFRLENBQUMsR0FBRyxDQUFDOzs7O2lEQUtiO0lBR0Q7UUFEQyxpQ0FBTyxDQUFDLGdCQUFnQixDQUFDOzs7OzREQUt6QjtJQXJCUSxlQUFlO1FBRDNCLG9DQUFVLENBQUMsYUFBYSxDQUFDO1FBRVQsV0FBQSxrQkFBTSxDQUFDLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTs7T0FEOUIsZUFBZSxDQXNCM0I7SUFBRCxzQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDBDQUFlIn0=