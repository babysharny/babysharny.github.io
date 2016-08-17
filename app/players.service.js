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
var PlayersService = (function () {
    function PlayersService(http) {
        this.http = http;
    }
    PlayersService.prototype.startSteam = function () {
    };
    PlayersService.prototype.startGame = function (game) {
        // let host = '192.168.1.70:8080';
        var host = 'localhost:8080';
        // let url = `http://${host}/1/employees/${game.appID}?secret_admin=boilerplatesRock`;
        var url = "http://" + host + "/1/steam?cmd=\"steam://run/" + game.appID + "\"";
        // let url = `http://localhost:8080/1/employees`;
        console.info('START GAME ', game);
        console.info(url);
        this.http.get(url)
            .subscribe(function (x) {
            console.log(x);
        });
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map