"use strict";

System.register([], function (_export, _context) {
  var template;
  return {
    setters: [],
    execute: function () {
      template = "\n<link rel=\"stylesheet\" href=\"/public/plugins/mtanda-heatmap-epoch-panel/bower_components/epoch/dist/css/epoch.min.css\">\n<link rel=\"stylesheet\" href=\"/public/plugins/mtanda-heatmap-epoch-panel/epoch_override.css\">\n<div class=\"graph-wrapper\" ng-class=\"{'graph-legend-rightside': ctrl.panel.legend.rightSide}\">\n  <div class=\"graph-canvas-wrapper\">\n\n    <div ng-if=\"datapointsWarning\" class=\"datapoints-warning\">\n      <span class=\"small\" ng-show=\"!datapointsCount\">\n        No datapoints <tip>No datapoints returned from metric query</tip>\n      </span>\n      <span class=\"small\" ng-show=\"datapointsOutside\">\n        Datapoints outside time range\n        <tip>Can be caused by timezone mismatch between browser and graphite server</tip>\n      </span>\n    </div>\n\n    <div grafana-heatmap-epoch class=\"epoch-theme-dark epoch category20 heatmap-epoch-colors\" style=\"z-index: 0;\" ng-dblclick=\"ctrl.zoomOut()\">\n    </div>\n\n  </div>\n\n  <div class=\"graph-legend-wrapper\" graph-legend></div>\n  </div>\n\n<div class=\"clearfix\"></div>\n";

      _export("default", template);
    }
  };
});
//# sourceMappingURL=template.js.map
