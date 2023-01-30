var qlik = window.require('qlik');
var $ = window.require('jquery');
import initialProperties from './initial-properties.js';
import template from './template.html';
import definition from './definition.js';
import controller from './controller.js';
import localCSS from './style.css'; // eslint-disable-line no-unused-vars

export default {
  initialProperties: initialProperties,
  template: template,
  definition: definition,
  controller: controller,
  support: {
    snapshot: true,
    export: true,
    exportData: true
  },
  paint: function ($element, layout) {
    const $scope = this.$scope;
    this.$scope.isInEdit = this.options.interactionState == 2;
    $scope.mobileMode = this.options.layoutMode == 7;
    //Display welcome message
    $scope.init = false;

    if (layout.mobile.switch && $scope.mobileMode) {
      $(`div[tid= "${layout.qInfo.qId}"]`).hide();
    } else {
      $(`div[tid= "${layout.qInfo.qId}"]`).show();
    }

    if (layout.alternatives.length == 0) {
      $scope.init = true;
    }

    //setup scope.table
    if (!this.$scope.alternatives) {
      this.$scope.alternatives = layout.alternatives;
    }
    this.$scope.qId = layout.qInfo.qId;
    return qlik.Promise.resolve();
  }
};