import { a as __extends, b as __decorate, C as Component, r as VTextField, V as Vue, h as __vue_normalize__ } from './normalize-component-17454685.js';

var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Settings";
        return _this;
    }
    Object.defineProperty(Settings.prototype, "projectName", {
        get: function () {
            return this.$store.state.session.name;
        },
        set: function (name) {
            this.$store.commit("session", { name: name });
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Component({ components: { VTextField: VTextField } })
    ], Settings);
    return Settings;
}(Vue));

/* script */
const __vue_script__ = Settings;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("v-text-field", {
        attrs: { label: "Projektname" },
        model: {
          value: _vm.projectName,
          callback: function($$v) {
            _vm.projectName = $$v;
          },
          expression: "projectName"
        }
      })
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
//# sourceMappingURL=Settings-c90537f2.js.map
