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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require("rxjs/Rx");
var GamesService = (function () {
    function GamesService(http) {
        this.http = http;
        this.left = [];
        this.right = [];
        this.rightGrid = [];
    }
    GamesService.prototype.updateLeft = function () {
    };
    GamesService.prototype.updateRight = function () {
    };
    GamesService.prototype.updateForId = function (steamId) {
        var _this = this;
        steamId = '76561198321699378';
        // let url = `http://steamcommunity.com/profiles/${steamId}/games/?tab=all&xml=1`;
        // let url = `./api/games.xml`;
        var url = "./api/games.json";
        // let url = `./api/games_all.json`;
        this.http.get(url)
            .subscribe(function (res) {
            var obj = JSON.parse(res._body);
            console.log(res);
            console.log(obj);
            _this.right = obj.games
                .map(function (x) {
                x.selected = false;
                return x;
            });
            var grid = [];
            var line = [];
            _this.right.forEach(function (g, index, arr) {
                line.push(g);
                if ((index + 1) % 4 == 0 || arr.length - 1 == index) {
                    grid.push(line);
                    line = [];
                }
            });
            console.log(grid);
            _this.rightGrid = grid;
        });
    };
    GamesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GamesService);
    return GamesService;
}());
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map