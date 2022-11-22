/* eslint-disable max-len */
define(['./utils'], function (utils) {
  var config = {
    type: "items",
    label: "Configuration",
    component: "items",
    items: {
      objects: {
        ref: "objectlist",
        label: "Objects",
        type: "items",
        items: {
          objects: {
            type: 'array',
            ref: 'alternatives',
            label: 'Objects',
            itemTitleRef: function (masterItem) {
              return masterItem.masterItem.split('~')[1];
            },
            allowAdd: true,
            allowRemove: true,
            addTranslation: 'Add Objects',
            items: {
              obj: {
                label: 'Master Item',
                component: 'dropdown',
                type: 'array',
                ref: 'masterItem',
                defaultValue: '',
                options: function () {
                  return utils.getMasterObjectList();
                }
              },
              width: {
                type: 'string',
                ref: 'width',
                label: 'Width',
                defaultValue: '50%',
                expression: 'optional'
              },
              height: {
                type: 'string',
                ref: 'height',
                label: 'Height',
                defaultValue: '50%',
                expression: 'optional'
              },
              paragraph1: {
                label: `In total, 100% height and 100% width can be divided between the objects.`,
                component: 'text'
              },
              paragraph2: {
                label: `If an object is 100% in width, the following objects are displayed in the next row.`,
                component: 'text'
              },
              paragraph3: {
                label: `If borders are used, these must be must be calculated out. e.g. "calc (100% - 10px)"`,
                component: 'text'
              },
              advancedConfig: {
                component: "expandable-items",
                grouped: true,
                items: {
                  config: {
                    type: "items",
                    label: "Advanced Configuration",
                    items: {
                      cssStyle: {
                        type: 'string',
                        ref: 'style',
                        label: 'CSS style',
                        expression: 'optional'
                      },
                      paragraph1: {
                        label: `This definition will affect just the container that contains the chart. e.g. "opacity: 0.5"`,
                        component: 'text'
                      },
                      objectBorderSwitch: {
                        type: 'boolean',
                        ref: 'border.switch',
                        label: 'Object Border',
                        component: 'switch',
                        options: [{
                          value: false,
                          label: 'disabled'
                        }, {
                          value: true,
                          label: 'enabled'
                        }],
                        defaultValue: false
                      },
                      objectBorderWidth: {
                        type: 'string',
                        ref: 'border.width',
                        label: 'Border Width',
                        expression: 'optional',
                        defaultValue: '1px',
                        show: function (data) {
                          if (data.border.switch) { return true; }
                        }
                      },
                      objectBorderColor: {
                        type: 'object',
                        ref: 'border.color',
                        label: 'Border Color',
                        component: "color-picker",
                        defaultValue: {
                          index: -1,
                          color: "#595959"
                        },
                        show: function (data) {
                          if (data.border.switch) { return true; }
                        }
                      },
                      objectBorderStyle: {
                        ref: "border.style",
                        label: "Border Type",
                        type: "string",
                        component: "dropdown",
                        options: [{
                          value: "solid",
                          label: "solid"
                        }, {
                          value: "dotted",
                          label: "dotted"
                        }, {
                          value: "dashed",
                          label: "dashed"
                        }, {
                          value: "double",
                          label: "double"
                        }, {
                          value: "groove",
                          label: "groove"
                        }, {
                          value: "ridge",
                          label: "ridge"
                        }, {
                          value: "inset",
                          label: "inset"
                        }, {
                          value: "outset",
                          label: "outset"
                        }],
                        defaultValue: "solid",
                        show: function (data) {
                          if (data.border.switch) { return true; }
                        }
                      },
                      objectBorderRadius: {
                        type: 'string',
                        ref: 'border.radius',
                        label: 'Border Radius',
                        expression: 'optional',
                        defaultValue: '0px',
                        show: function (data) {
                          if (data.border.switch) { return true; }
                        }
                      },
                      objectBackgroundSwitch: {
                        type: 'boolean',
                        ref: 'background.switch',
                        label: 'Disable default Object-Background',
                        component: 'switch',
                        options: [{
                          value: false,
                          label: 'disabled'
                        }, {
                          value: true,
                          label: 'enabled'
                        }],
                        defaultValue: false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  var dimensions = {
    uses: "dimensions",
    min: 0,
    max: 20,
    show: false
  };

  var measures = {
    uses: "measures",
    min: 0,
    max: 20,
    show: false
  };

  var objectMobileSwitch = {
    type: 'boolean',
    ref: 'mobile.switch',
    label: 'Hide on mobile device',
    component: 'switch',
    options: [{
      value: false,
      label: 'disabled'
    }, {
      value: true,
      label: 'enabled'
    }],
    defaultValue: false
  };

  var backgroundswitch = {
    label: "Switch Background",
    component: "switch",
    ref: "prop.background.switch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };

  var backgroundswitchfxpick = {
    label: "Mode",
    component: "switch",
    ref: "prop.background.switchfxpick",
    type: "boolean",
    options: [{
      value: true,
      label: "Formula"
    }, {
      value: false,
      label: "Color Picker"
    }],
    defaultValue: false,
    show: function (data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true) { return true; }
    }
  };

  var backgroundcolor = {
    ref: "prop.background.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: {
      index: -1,
      color: "#fff"
    },
    show: function (data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true && data.prop.background.switchfxpick != true) { return true; }
    }
  };

  var backgroundcolorfx = {
    ref: "prop.background.colorfx",
    label: "Color",
    type: "string",
    expression: "optional",
    default: "#ffffff",
    show: function (data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true && data.prop.background.switchfxpick != false) { return true; }
    }
  };

  var backgroundcssswitch = {
    label: "Switch to CSS",
    component: "switch",
    ref: "prop.background.cssswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function (data) {
      if (data.prop.background.switch) { return true; }
    }
  };

  var backgroundpictureswitch = {
    label: "Switch to picture",
    component: "switch",
    ref: "prop.background.pictureswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function (data) {
      if (data.prop.background.cssswitch) { return true; }
    }
  };

  var backgroundpicture = {
    label: "Picture",
    component: "media",
    ref: "prop.background.picture",
    type: "string",
    layoutRef: "prop.background.picture",
    show: function (data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) { return true; }
    }
  };

  var paragraphbackground = {
    label: `You can use a picture and the CSS definition to configure the style of the picture. (e.g. "background-repeat" : "round")`,
    component: 'text',
    show: function (data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) { return true; }
    }
  };

  var backgroundcss = {
    label: "CSS Definition",
    ref: "prop.background.css",
    type: "string",
    expression: "optional",
    defaultValue: "",
    show: function (data) {
      if (data.prop.background.cssswitch) { return true; }
    }
  };

  var customcssswitch = {
    label: "Enable custom CSS",
    component: "switch",
    ref: "prop.customcss.switch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };

  var customcsscss = {
    label: "Custom CSS definition",
    component: "textarea",
    ref: "prop.customcss.css",
    type: "string",
    expression: "optional",
    defaultValue: "",
    show: function (data) {
      if (data.prop.customcss.switch) { return true; }
    }
  };

  var aboutDefinition = {
    component: 'items',
    label: 'About',
    items: {
      header: {
        label: 'Grouped Container',
        style: 'header',
        component: 'text'
      },
      paragraph1: {
        label: `This extension will help you to group Qlik objects within a visual container.`,
        component: 'text'
      },
      paragraph2: {
        label: 'This extension was created by Dennis Jaskowiak.',
        component: 'text',
      },
      paragraph3: {
        label: 'Version: 1.0.1',
        component: 'text'
      }
    }
  };

  var appearance = {
    uses: "settings",
    items: {
      general: {
        items: {
          showTitles: {
            defaultValue: false
          },
          details: {
            show: true
          },
        }
      },
      background: {
        type: "items",
        label: "Background",
        items: {
          backgroundswitch: backgroundswitch,
          backgroundswitchfxpick: backgroundswitchfxpick,
          backgroundcolor: backgroundcolor,
          backgroundcolorfx: backgroundcolorfx,
          backgroundcssswitch: backgroundcssswitch,
          backgroundcss: backgroundcss,
          paragraph1: {
            label: `You can add CSS definitions for the background formated as JSON. e.g. `,
            component: 'text',
            show: function (data) {
              if (data.prop.background.cssswitch) { return true; }
            }
          },
          paragraph2: {
            label: `='{"background-size" : "cover", "background-position" : "center"}'`,
            component: 'text',
            show: function (data) {
              if (data.prop.background.cssswitch) { return true; }
            }
          },
          backgroundpictureswitch: backgroundpictureswitch,
          backgroundpicture: backgroundpicture,
          paragraphbackground: paragraphbackground
        }
      },
      customCSS: {
        type: "items",
        label: "Custom object CSS",
        items: {
          customcssswitch: customcssswitch,
          customcsscss: customcsscss,
          paragraph: {
            label: 'You can write pure CSS code. Use "&" as selector to point to this particular object (div[tid="ID"]).',
            component: 'text'
          },
          paragraph1: {
            label: 'Example: & .qv-inner-object {border: 2px solid green; border-radius: 20px;} ',
            component: 'text'
          }
        }
      },
      Mobile: {
        type: "items",
        label: "Mobile options",
        items: {
          objectMobileSwitch: objectMobileSwitch,
          paragraph1: {
            label: `This option will hide the object on mobile devices (e.g. smartphones).`,
            component: 'text'
          }
        }
      }
    }
  };

  var addons = {
    uses: "addons",
    items: {
      dataHandling: {
        uses: "dataHandling"
      }
    }
  };

  return {
    type: "items",
    component: "accordion",
    items: {
      dimensions: dimensions,
      measures: measures,
      config: config,
      appearance: appearance,
      addons: addons,
      about: aboutDefinition,
    }
  };
});