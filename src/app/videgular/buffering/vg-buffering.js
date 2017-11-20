"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../core/services/vg-api");
var VgBuffering = (function () {
    function VgBuffering(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgBuffering.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgBuffering.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgBuffering.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-buffering',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
                    styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgBuffering.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgBuffering.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
    };
    return VgBuffering;
}());
exports.VgBuffering = VgBuffering;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdIO0FBQ2hILGtEQUFnRDs7SUFtSDVDLHFCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFSdEIsRUFBRTs4QkFDRCxDQUFDOzJCQUNKLENBQUM7NkJBRVMsRUFBRTsyQkFFd0IsS0FBSztRQUczRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUNsRSxDQUFDO1NBQ0w7S0FDSjtJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQ0osQ0FBQztLQUNMO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDbEM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTdJSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHdLQUlDO29CQUNYLE1BQU0sRUFBRSxDQUFFLHl4RUF1RlQsQ0FBRTtpQkFDTjs7OztnQkF0R21CLGlCQUFVO2dCQUNyQixjQUFLOzs7MEJBdUdULFlBQUs7Z0NBVUwsa0JBQVcsU0FBQyxvQkFBb0I7O3NCQWxIckM7O0FBdUdhLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBJUGxheWFibGUgfSBmcm9tICcuLi9jb3JlL3ZnLW1lZGlhL2ktcGxheWFibGUnO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLWJ1ZmZlcmluZycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2Zy1idWZmZXJpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJpbmdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1NwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgei1pbmRleDogMjAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctYnVmZmVyaW5nLmlzLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnZnLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZnLWJ1ZmZlcmluZyAuYnVmZmVyaW5nQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcblxuICAgICAgICAgICAgem9vbTogMTtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBMb2FkaW5nIFNwaW5uZXJcbiAgICAgICAgKiBodHRwOi8vd3d3LmFsZXNzaW9hdHplbmkuY29tL2Jsb2cvY3NzMy1sb2FkaW5nLWFuaW1hdGlvbi1sb29wL1xuICAgICAgICAqL1xuICAgICAgICAudmctYnVmZmVyaW5nIC5sb2FkaW5nU3Bpbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC45O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDM1cHggI0ZGRkZGRjtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogc3BpbiAuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52Zy1idWZmZXJpbmcgLmxvYWRpbmdTcGlubmVyIC5zdG9wIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQC1tb3ota2V5ZnJhbWVzIHNwaW5vZmYge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm9mZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdCdWZmZXJpbmcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogSVBsYXlhYmxlO1xuICAgIGNoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDUwO1xuICAgIGN1cnJlbnRQbGF5UG9zOiBudW1iZXIgPSAwO1xuICAgIGxhc3RQbGF5UG9zOiBudW1iZXIgPSAwO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaXMtYnVmZmVyaW5nJykgaXNCdWZmZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5idWZmZXJEZXRlY3RlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgaXNCdWZmZXJpbmcgPT4gdGhpcy5vblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZylcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZykge1xuICAgICAgICB0aGlzLmlzQnVmZmVyaW5nID0gaXNCdWZmZXJpbmc7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=