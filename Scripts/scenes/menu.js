var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        //PUBLIC METHODS++++++++++++++++
        //Start Method
        Menu.prototype.start = function () {
            console.log("Game Started...");
            this._helloLabel = new createjs.Text("Gurpreet Benipal", "50px Consolas", "#C0F050");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._helloLabel);
            stage.addChild(this);
        };
        //MENU scene updates here
        Menu.prototype.update = function () {
            this._helloLabel.rotation += 6;
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map