"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var inversify_express_utils_1 = require("inversify-express-utils");
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var container_1 = require("./container");
var connection_db_1 = require("./db/utils/connection.db");
var app = express_1.default();
var container = container_1.ContainerLoader.load();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(helmet_1.default());
app.get("/api/health", function (req, res) {
    res.sendStatus(200);
});
connection_db_1.DbConnection.initConnection().then(function () {
    var server = new inversify_express_utils_1.InversifyExpressServer(container, null, null, app);
    var serverInstance = server.build();
    serverInstance.listen(process.env.PORT);
    console.log("Server started on port " + process.env.PORT);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQixrREFBNEI7QUFDNUIsbUVBQWlFO0FBRWpFLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUU1Qix5Q0FBOEM7QUFDOUMsMERBQXVEO0FBQ3ZELElBQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7QUFFM0MsSUFBTSxTQUFTLEdBQUcsMkJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsNEJBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBTSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUMifQ==