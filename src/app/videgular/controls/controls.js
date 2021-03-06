"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vg_controls_1 = require("./vg-controls");
var vg_fullscreen_1 = require("./vg-fullscreen/vg-fullscreen");
var vg_mute_1 = require("./vg-mute/vg-mute");
var vg_volume_1 = require("./vg-volume/vg-volume");
var vg_play_pause_1 = require("./vg-play-pause/vg-play-pause");
var vg_playback_button_1 = require("./vg-playback-button/vg-playback-button");
var vg_scrub_bar_1 = require("./vg-scrub-bar/vg-scrub-bar");
var vg_scrub_bar_buffering_time_1 = require("./vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time");
var vg_scrub_bar_cue_points_1 = require("./vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points");
var vg_scrub_bar_current_time_1 = require("./vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time");
var vg_time_display_1 = require("./vg-time-display/vg-time-display");
var vg_track_selector_1 = require("./vg-track-selector/vg-track-selector");
var vg_controls_hidden_1 = require("./../core/services/vg-controls-hidden");
var VgControlsModule = (function () {
    function VgControlsModule() {
    }
    VgControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    exports: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    providers: [vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgControlsModule.ctorParameters = function () { return []; };
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQTJDO0FBQzNDLCtEQUE2RDtBQUM3RCw2Q0FBMkM7QUFDM0MsbURBQWlEO0FBQ2pELCtEQUE0RDtBQUM1RCw4RUFBMkU7QUFDM0UsNERBQXlEO0FBQ3pELHNIQUFpSDtBQUNqSCwwR0FBcUc7QUFDckcsZ0hBQTJHO0FBQzNHLHFFQUE2RTtBQUM3RSwyRUFBd0U7QUFDeEUsNEVBQXlFOzs7OztnQkFFeEUsZUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRTt3QkFDVix3QkFBVTt3QkFDViw0QkFBWTt3QkFDWixnQkFBTTt3QkFDTixvQkFBUTt3QkFDUiwyQkFBVzt3QkFDWCxxQ0FBZ0I7d0JBQ2hCLHlCQUFVO3dCQUNWLHFEQUF1Qjt3QkFDdkIsNkNBQW1CO3dCQUNuQixpREFBcUI7d0JBQ3JCLCtCQUFhO3dCQUNiLDJCQUFTO3dCQUNULG1DQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsd0JBQVU7d0JBQ1YsNEJBQVk7d0JBQ1osZ0JBQU07d0JBQ04sb0JBQVE7d0JBQ1IsMkJBQVc7d0JBQ1gscUNBQWdCO3dCQUNoQix5QkFBVTt3QkFDVixxREFBdUI7d0JBQ3ZCLDZDQUFtQjt3QkFDbkIsaURBQXFCO3dCQUNyQiwrQkFBYTt3QkFDYiwyQkFBUzt3QkFDVCxtQ0FBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLENBQUUscUNBQWdCLENBQUU7aUJBQ2xDOzs7OzJCQWpERDs7QUFrRGEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzIH0gZnJvbSAnLi92Zy1jb250cm9scyc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW4gfSBmcm9tICcuL3ZnLWZ1bGxzY3JlZW4vdmctZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBWZ011dGUgfSBmcm9tICcuL3ZnLW11dGUvdmctbXV0ZSc7XG5pbXBvcnQgeyBWZ1ZvbHVtZSB9IGZyb20gJy4vdmctdm9sdW1lL3ZnLXZvbHVtZSc7XG5pbXBvcnQgeyBWZ1BsYXlQYXVzZSB9IGZyb20gJy4vdmctcGxheS1wYXVzZS92Zy1wbGF5LXBhdXNlJztcbmltcG9ydCB7IFZnUGxheWJhY2tCdXR0b24gfSBmcm9tICcuL3ZnLXBsYXliYWNrLWJ1dHRvbi92Zy1wbGF5YmFjay1idXR0b24nO1xuaW1wb3J0IHsgVmdTY3J1YkJhciB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhcic7XG5pbXBvcnQgeyBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZS92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUnO1xuaW1wb3J0IHsgVmdTY3J1YkJhckN1ZVBvaW50cyB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzJztcbmltcG9ydCB7IFZnU2NydWJCYXJDdXJyZW50VGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSc7XG5pbXBvcnQgeyBWZ1RpbWVEaXNwbGF5LCBWZ1V0Y1BpcGUgfSBmcm9tICcuL3ZnLXRpbWUtZGlzcGxheS92Zy10aW1lLWRpc3BsYXknO1xuaW1wb3J0IHsgVmdUcmFja1NlbGVjdG9yIH0gZnJvbSAnLi92Zy10cmFjay1zZWxlY3Rvci92Zy10cmFjay1zZWxlY3Rvcic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdVdGNQaXBlLFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3JcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdVdGNQaXBlLFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3JcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdDb250cm9sc01vZHVsZSB7XG59XG4iXX0=