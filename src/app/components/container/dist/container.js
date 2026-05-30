"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatorComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var card_1 = require("@angular/material/card");
var divider_1 = require("@angular/material/divider");
var grid_list_1 = require("@angular/material/grid-list");
var result_1 = require("../result/result");
var button_1 = require("../button/button");
var calculate_1 = require("../../services/calculate");
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.expr = '';
        this.calculateService = core_1.inject(calculate_1.Calculate);
        this.display = core_1.signal('0');
        this.buttons = [
            'C', 'DEL', '/', '*',
            '7', '8', '9', '-',
            '4', '5', '6', '+',
            '1', '2', '3', '=',
            '0', '.', '', ''
        ];
    }
    CalculatorComponent.prototype.onButton = function (label) {
        if (!label)
            return;
        if (label === 'C') {
            this.expr = '';
            this.display.set('0');
            return;
        }
        if (label === 'DEL') {
            this.expr = this.expr.slice(0, -1);
            this.display.set(this.expr || '0');
            return;
        }
        if (label === '=') {
            try {
                var result = this.calculateService.evaluate(this.expr);
                this.expr = result;
                this.display.set(result);
            }
            catch (_a) {
                this.expr = '';
                this.display.set('Error');
            }
            return;
        }
        this.expr += label;
        this.display.set(this.expr);
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'app-container',
            standalone: true,
            imports: [
                common_1.CommonModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                divider_1.MatDividerModule,
                result_1.ResultComponent,
                button_1.ButtonComponent
            ],
            templateUrl: './container.html',
            styleUrl: './container.scss'
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
