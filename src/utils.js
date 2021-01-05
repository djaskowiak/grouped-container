define(["qlik"], function (qlik) {
  return {

    getMasterObjectList: function () {
      var app = qlik.currApp(this);
      return new Promise(function (resolve, reject) {
        app.getList('masterobject').then(function (model) {
          app.destroySessionObject(model.layout.qInfo.qId);
          let supportedMasterItems = model.layout.qAppObjectList.qItems;
          if (!supportedMasterItems || supportedMasterItems.length === 0) {
            return resolve([{ value: '', label: 'No MasterObjects', visualization: '' }]);
          }
          supportedMasterItems.sort(function (item1, item2) {
            return item1.qMeta.title < item2.qMeta.title ? -1 : 1;
          });
          return resolve(supportedMasterItems.map(function (item) {
            return {
              value: item.qInfo.qId + '~' + item.qMeta.title,
              label: item.qMeta.title,
              visualization: item.qData.visualization
            };
          }));
        });
      });
    }
  };
});