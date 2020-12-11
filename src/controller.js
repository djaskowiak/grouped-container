var qlik = window.require('qlik');
import utils from './utils.js';
import popoverTemplate from './popover.ng.html';

export default ['$scope', '$element', function ($scope, $element) {
  $scope.layoutId = $scope.layout.qInfo.qId;
  var app = qlik.currApp($scope);
  let id = app.id;
  var enigma = $scope.component.model.enigmaModel;
  let pictureUrl = $scope.layout.prop.background.picture;
  if (!pictureUrl.includes(id) && !pictureUrl.includes('/content/')) {
    let split = pictureUrl.split('/');
    split[2] = id;
    split = split.join('/');
    $scope.layout.prop.background.picture = split;
  }
  /* Save already rendered items */
  $scope.rendered = [];

  /* Saved last interval rendered items */
  $scope.renderedTemp = [];

  /*scope for changes in model */
  $scope.$watchCollection("layout.alternatives", function () {
    $scope.createLayout();
  });

  /* render charts in divs function */
  $scope.createLayout = function () {
    var thisInt = setInterval(myInt, 1000);
    function myInt() {
      var amountContainer = $element.find('.grouped-container-flex-item');
      if (amountContainer.length == $scope.layout.alternatives.length) {
        for (let i = 0; i < $scope.layout.alternatives.length; i++) {
          if ($scope.layout.alternatives[i].masterItem.split('_')[0].length > 1 && !$scope.rendered.includes($scope.layout.qInfo.qId + '_' + $scope.layout.alternatives[i].masterItem.split('_')[0] + '_' + i)) {
            app.getObject($scope.layout.qInfo.qId + i, $scope.layout.alternatives[i].masterItem.split('_')[0]);

            $scope.renderedTemp.push($scope.layout.qInfo.qId + '_' + $scope.layout.alternatives[i].masterItem.split('_')[0] + '_' + i);
          } else {
            if (!$scope.layout.alternatives[i].masterItem.split('_')[0] == '') {
              $scope.renderedTemp.push($scope.layout.qInfo.qId + '_' + $scope.layout.alternatives[i].masterItem.split('_')[0] + '_' + i);
            }
          }
          clearInterval(thisInt);
        }
        /* set rendered to last interval rendered items */
        $scope.rendered = $scope.renderedTemp;
        $scope.renderedTemp = [];
        clearInterval(thisInt);
        qlik.resize();
      }
    }
  };

  //Scope CSS definition customCSS
  $scope.$watch('[layout.prop.customcss]', function () {
    try {
      if ($scope.layout.prop.customcss.switch) {
        if ($scope.layout.prop.customcss.css != '') {
          $scope.customcss = $scope.layout.prop.customcss.css.replace(/&/g, "div[tid='" + $scope.layout.qInfo.qId + "']");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, true);

  //Scope CSS definition for background
  $scope.$watch('[layout.prop.background]', function () {
    try {
      if ($scope.layout.prop.background.cssswitch) {
        if ($scope.layout.prop.background.css != '') {
          $scope.backgroundcss = JSON.parse($scope.layout.prop.background.css);
        }
        if ($scope.layout.prop.background.pictureswitch) {
          if ($scope.layout.prop.background.css == '') {
            $scope.backgroundcss = JSON.parse('{"background-image" : "url(' + $scope.layout.prop.background.picture + ')"}');
          } else {
            $scope.backgroundcss["background-image"] = 'url(' + $scope.layout.prop.background.picture + ')';
          }
        }
      } else {
        if ($scope.layout.prop.background.switchfxpick) {
          $scope.backgroundcss = { "background-color": $scope.layout.prop.background.colorfx };
        }
        if ($scope.layout.prop.background.switchfxpick == false) {
          if ($scope.layout.prop.background.color != null) {
            $scope.backgroundcss = { "background-color": $scope.layout.prop.background.color.color };
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, true);

  /* Add Master Items dialog and function */
  $scope.showAddMasterItemsDialog = async function (event) {
    var items = await utils.getMasterObjectList();
    var ObjArray = [];
    $scope.masterItemPopover = window.qvangularGlobal.getService("luiPopover").show({
      template: popoverTemplate,
      alignTo: event.target,
      closeOnEscape: true,
      closeOnOutside: true,
      input: {
        searchTxt: '',
        items: items,
        pushConfig: function () {
          try {
            if (ObjArray) {
              $scope.onMasterVizSelected(ObjArray);
            }
          }
          finally {
            $scope.masterItemPopover.close();
          }
        },
        createArray: function (value) {
          var index = ObjArray.indexOf(value);
          if (index > -1) {
            ObjArray.splice(index, 1);
          } else {
            ObjArray.push(value);
          }
        }
      }
    });
    $scope.masterItemPopover.closed.then(function () {
      $(window).off('resize.popover', $scope.onMasterItemPopoverResize);
    });
    $(window).on('resize.popover', $scope.onMasterItemPopoverResize);
  };


  /* apply selected items */
  $scope.onMasterVizSelected = function (masterViz, i) {
    var params = {
      "qPatches": [],
      "qSoftPatch": false
    };
    var objWidth;
    var objHight;

    /* default item size */
    switch (masterViz.length) {
      case 1:
      case 2:
        objWidth = '100%';
        objHight = '50%';
        break;
      case 3:
        objWidth = '33.33%';
        objHight = '100%';
        break;
      case 4:
      case 5:
      case 6:
        objWidth = '33.33%';
        objHight = '50%';
        break;
      case 7:
      case 8:
      case 9:
        objWidth = '33.33%';
        objHight = '33.33%';
        break;
      case 10:
      case 11:
      case 12:
        objWidth = '33.33%';
        objHight = '25%';
        break;
      case 13:
      case 14:
      case 15:
      case 16:
        objWidth = '25%';
        objHight = '25%';
        break;
      default:
        objWidth = '20%';
        objHight = '20%';
        break;
    }

    /* create patch for all selected items */
    enigma.app.getObject($scope.layoutId).then(function (obj) {
      for (let i = 0; i < masterViz.length; i++) {
        let value = {
          "masterItem": `${masterViz[i].value}`,
          "width": objWidth,
          "height": objHight,
          "style": "",
          "border": {
            "switch": false,
            "width": "1px",
            "color": {
              "index": -1,
              "color": "#595959"
            },
            "style": "solid",
            "radius": "0px"
          },
          "background": {
            "switch": false
          }
        };
        var temp_obj = {};
        temp_obj["qOp"] = "add";
        temp_obj["qPath"] = "/alternatives/" + i;
        temp_obj["qValue"] = JSON.stringify(value);
        params["qPatches"].push(temp_obj);
      }
      obj.applyPatches(params).then(function () {
        $scope.showMasterVizSelect = false;
      });
    });
  };
}];

