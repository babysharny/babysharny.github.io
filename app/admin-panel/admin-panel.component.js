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
var games_service_1 = require("../games.service");
var players_service_1 = require("../players.service");
var AdminPanelComponent = (function () {
    function AdminPanelComponent(games, remote) {
        this.games = games;
        this.remote = remote;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.games.updateForId('steamId');
    };
    AdminPanelComponent.prototype.selectGame = function (game) {
        this.games.rightGrid.forEach(function (line) {
            line.forEach(function (g) {
                g.selected = false;
            });
        });
        game.selected = true;
    };
    AdminPanelComponent.prototype.getSelectedGame = function () {
        var res;
        this.games.rightGrid.forEach(function (line) {
            line.forEach(function (g) {
                if (g.selected === true) {
                    res = g;
                }
            });
        });
        return res;
    };
    AdminPanelComponent.prototype.gg = function () {
        var g = this.getSelectedGame();
        console.info(g);
        this.remote.startGame(g);
    };
    AdminPanelComponent.prototype.startSteam = function () {
        this.remote.startSteam();
    };
    AdminPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-admin-panel',
            templateUrl: 'admin-panel.component.html',
            styleUrls: ['admin-panel.component.css']
        }), 
        __metadata('design:paramtypes', [games_service_1.GamesService, players_service_1.PlayersService])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=admin-panel.component.js.map