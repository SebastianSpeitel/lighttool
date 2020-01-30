import{_ as e,a as n,C as t,c as i,w as r,b as a,d as u,e as d}from"./main-d584057d.js";var l={"Funktionale Anforderungen":{F1:{name:"Sehen und Identifizieren von Details",default:2},F2:{name:"Sehen und Identifizieren von Formen",default:2},F3:{name:"Sehen und Identifizieren von Farben",default:2},F4:{name:"Schnelligkeit von Sehen und Identifizieren",default:2},F5:{name:"Sehen und Identifizieren über die Zeit / Visuelle Leistungsfähigkeit",default:3},F6:{name:"Aufmerksamkeitsführung",default:2},F7:{name:"Ordnung / Unterscheidbarkeit",default:2},F8:{name:"Physische Sicherheit",default:2},F9:{name:"Objektschutz",default:0}},"Biologische Anforderungen":{B1:{name:"Aktivierung",default:3},B2:{name:"Erholung",default:3},B3:{name:"Circadiane Rhythmik",default:4},B4:{name:"Strahlungsschutz",default:1},B5:{name:"Strahlungsphysiologische Wirkung",default:1}},"Psychologische Anforderungen":{P1:{name:"Räumliche Orientierung",default:2},P2:{name:"Zeitliche Orientierung",default:3},P3:{name:"Orientierung über das Geschehen",default:2},P4:{name:"Privatheit",default:1},P5:{name:"Persönliches Territorium",default:1},P6:{name:"Selbstdarstellung / Repräsentation",default:1},P7:{name:"Sicherheitsgefühl",default:2},P8:{name:"Eigene Kontrolle",default:2},P9:{name:"Mentale Aktivierung",default:3},P10:{name:"Mentale Erholung",default:3},P11:{name:"Vertrautheit",default:2}},"Architektonische Anforderungen":{A1:{name:"Gliederung des Raumes nach Form",default:1},A2:{name:"Gliederung des Raumes nach Rhythmik",default:1},A3:{name:"Gliederung des Raumes nach Zonen",default:2},A4:{name:"Charakter der Architektur unterstützen",default:1},A5:{name:"Architektonische (gestalterische) Besonderheiten betonen",default:1}}};const s=d({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("h2",[e._v("Skalierung der Anforderung")]),e._v(" "),t("p",[e._v("\n    Für jede Anwendung gibt es typische Anforderungen. Die Bewertung erfolgt\n    anhand der Wichtigkeit bzw. Relevanz zur Erfüllung der typischen\n    Anforderung. Sie ist dreistufig aufgebaut und in der mittleren Spalte der\n    Tabelle angegeben:\n  ")]),e._v(" "),t("ol",{staticStyle:{"list-style":"none"}},[t("li",[e._v("0: nicht relevant")]),e._v(" "),t("li",[e._v("1: weniger relevant")]),e._v(" "),t("li",[e._v("2: relevant")]),e._v(" "),t("li",[e._v("3: sehr relevant")])]),e._v(" "),t("p",[e._v("\n    Spezifische Anwendungen können mit Aspekten verbunden sein, die zu einer\n    Verstärkung oder Abschwächung dieser typischen Anforderungen führen. In\n    diesen Fällen wird die Bewertung entweder um +1 erhöht oder um -1\n    verringert.\n  ")]),e._v(" "),e._l(e.demands,(function(n,i){return[t("div",{key:i},[t("h3",[e._v(e._s(i))]),e._v(" "),e._l(n,(function(n,i){return[t("label",{key:"l"+i,attrs:{for:i}},[e._v(e._s(n.name))]),e._v(" "),t("v-slider",{key:i,staticClass:"mb-5",attrs:{id:i,"tick-labels":Array.from({length:4}).fill("").map((function(e,t){return t===n.default?"Empfehlung":""+t})),value:e.getDemand(i)||n.default,min:"0",max:"3",step:"1",ticks:"always","tick-size":"2"},on:{change:function(n){return e.setDemand(i,n)}}})]}))],2)]})),e._v(" "),t("v-btn",{staticClass:"float-right",attrs:{color:"primary",dark:""},on:{click:e.finish}},[e._v("Zur Auswertung")])],2)},staticRenderFns:[]},void 0,function(u){function d(){var e=null!==u&&u.apply(this,arguments)||this;return e.name="Demands",e.demands=l,e}return e(d,u),d.prototype.finish=function(){this.$store.commit("continue")},d.prototype.getDemand=function(e){var n,t,i;return null===(i=null===(t=null===(n=this.$store.state)||void 0===n?void 0:n.session)||void 0===t?void 0:t.demands)||void 0===i?void 0:i[e]},d.prototype.setDemand=function(e,n){var t;this.$store.commit("demands",((t={})[e]=n,t))},d=n([t({components:{VContainer:i,VSlider:r,VBtn:a}})],d)}(u),void 0,!1,void 0,!1,void 0,void 0,void 0);export default s;