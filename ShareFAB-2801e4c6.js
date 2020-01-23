import { a as __extends, s as __awaiter, b as __decorate, C as Component, t as VIcon, u as VBtn, v as VFabTransition, w as VSnackbar, V as Vue, x as __generator, h as __vue_normalize__ } from './normalize-component-17454685.js';

// Material Design Icons v4.8.95
var mdiShareVariant = "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";

var ShareFAB = /** @class */ (function (_super) {
    __extends(ShareFAB, _super);
    function ShareFAB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ShareFAB";
        _this.icon = mdiShareVariant;
        _this.copied = false;
        return _this;
    }
    ShareFAB.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shareData, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareData = this.$store.getters.shareData;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.share(shareData)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, navigator.clipboard.writeText(shareData.url)];
                    case 5:
                        _a.sent();
                        this.copied = true;
                        return [2 /*return*/];
                    case 6:
                        e_2 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        window.open(shareData.url, "_blank");
                        return [2 /*return*/];
                }
            });
        });
    };
    ShareFAB = __decorate([
        Component({ components: { VIcon: VIcon, VBtn: VBtn, VFabTransition: VFabTransition, VSnackbar: VSnackbar } })
    ], ShareFAB);
    return ShareFAB;
}(Vue));

/* script */
const __vue_script__ = ShareFAB;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "v-fab-transition",
    [
      _c(
        "v-btn",
        {
          attrs: {
            color: "accent",
            fab: "",
            "x-large": "",
            bottom: "",
            right: "",
            fixed: ""
          },
          on: { click: _vm.share }
        },
        [
          _c("v-icon", [_vm._v(_vm._s(_vm.icon))]),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { dark: "" },
              model: {
                value: _vm.copied,
                callback: function($$v) {
                  _vm.copied = $$v;
                },
                expression: "copied"
              }
            },
            [
              _vm._v("\n      In Zwischenablage kopiert\n      "),
              _c(
                "v-btn",
                {
                  attrs: { color: "secondary", text: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation();
                      _vm.copied = false;
                    }
                  }
                },
                [_vm._v("\n        OK\n      ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

export default __vue_component__;
//# sourceMappingURL=ShareFAB-2801e4c6.js.map
