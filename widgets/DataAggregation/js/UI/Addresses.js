// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/Addresses.html":'\x3cdiv class\x3d"pad-left-5 no-select"\x3e\r\n  \x3ctable class\x3d"page-table" cellpading\x3d"0" \x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"panel-title-td"\x3e\r\n          \x3cdiv class\x3d"panel-title-text"\x3e${nls.mapping.locationMapping}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border-bold task-instruction-row" data-dojo-attach-point\x3d"mainInstructionRow"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"panel-title-hint-td"\x3e\r\n          \x3cdiv class\x3d"instruction"\x3e${nls.address.addressPageHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"task-row task-instruction-row" data-dojo-attach-point\x3d"singleAddressRow"\x3e\r\n        \x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"singleFieldHintTd"\x3e\r\n          \x3c!--table for single field--\x3e\r\n          \x3ctable class\x3d"page-table" cellpading\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr class\x3d"task-row task-instruction-row" data-dojo-attach-event\x3d"onClick:_rdoSingleAddressClick" data-dojo-attach-point\x3d"singleRadioRow"\x3e\r\n                \x3ctd colspan\x3d"2" class\x3d"pad-left-10 field-control-td"\x3e\r\n                  \x3cinput name\x3d"addr" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                         class\x3d"jimu-radio-btn"\r\n                         id\x3d"rdo-single"\r\n                         type\x3d"radio"\r\n                         data-dojo-attach-point\x3d"rdoSingleAddress"\r\n                         title\x3d"${nls.address.singleField}" /\x3e\r\n                  \x3clabel class\x3d"main-text" for\x3d"rdo-single"\x3e${nls.address.singleField}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr class\x3d"bottom-border-bold sub-task-hint panel-title-hint" data-dojo-attach-point\x3d"singleSubTaskHintTr"\x3e\r\n                \x3ctd colspan\x3d"2" class\x3d"pad-left-20 panel-title-hint-td float-left" data-dojo-attach-point\x3d"singleSubTaskHintTd"\x3e\r\n                  \x3cspan class\x3d"instruction"\x3e${nls.address.singleFieldHint}\x3c/span\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr class\x3d"bottom-border"\x3e\r\n                \x3ctd data-dojo-attach-point\x3d"singleFieldTableRow"\x3e\r\n                  \x3ctable class\x3d"page-table" cellpading\x3d"0"\x3e\r\n                    \x3ccolgroup\x3e\r\n                      \x3ccol width\x3d"40%" /\x3e\r\n                      \x3ccol width\x3d"60%" /\x3e\r\n                    \x3c/colgroup\x3e\r\n                    \x3ctbody data-dojo-attach-point\x3d"singleFieldTable"\x3e\r\n                    \x3c/tbody\x3e\r\n                  \x3c/table\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"multiAddressRow"\x3e\r\n        \x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"multiFieldHintTd"\x3e\r\n          \x3c!--table for multi field--\x3e\r\n          \x3ctable class\x3d"page-table" cellpading\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr class\x3d"task-row task-instruction-row" data-dojo-attach-event\x3d"onClick:_rdoMultiAddressClick" data-dojo-attach-point\x3d"multiRadioRow"\x3e\r\n                \x3ctd colspan\x3d"2" class\x3d"pad-left-10 field-control-td"\x3e\r\n                  \x3cinput name\x3d"addr" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                         class\x3d"jimu-radio-btn"\r\n                         id\x3d"rdo-multi"\r\n                         type\x3d"radio"\r\n                         data-dojo-attach-point\x3d"rdoMultiAddress"\r\n                         title\x3d"${nls.address.multiField}" /\x3e\r\n                  \x3clabel class\x3d"main-text" for\x3d"rdo-multi"\x3e${nls.address.multiField}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr class\x3d"bottom-border sub-task-hint panel-title-hint"\x3e\r\n                \x3ctd colspan\x3d"2" class\x3d"pad-left-20 panel-title-hint-td float-left" data-dojo-attach-point\x3d"multiSubTaskHintTd"\x3e\r\n                  \x3cspan class\x3d"instruction"\x3e${nls.address.multiFieldHint}\x3c/span\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd data-dojo-attach-point\x3d"multiFieldTableRow"\x3e\r\n                  \x3ctable class\x3d"page-table" cellpading\x3d"0"\x3e\r\n                    \x3ccolgroup\x3e\r\n                      \x3ccol width\x3d"40%" /\x3e\r\n                      \x3ccol width\x3d"60%" /\x3e\r\n                    \x3c/colgroup\x3e\r\n                    \x3ctbody data-dojo-attach-point\x3d"multiFieldTable"\x3e\x3c/tbody\x3e\r\n                  \x3c/table\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/Deferred dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./templates/Addresses.html dijit/form/Select dijit/form/RadioButton".split(" "),function(q,e,g,m,d,k,n,r,t,u,v,w,x){return q([r,t,u,v],{baseClass:"cf-addresses",declaredClass:"CriticalFacilities.Addresses",templateString:w,_started:null,label:"Addresses",parent:null,nls:null,map:null,appConfig:null,
config:null,singleFields:[],multiFields:[],fields:[],useSingle:!0,useMulti:!1,theme:"",styleColor:"",singleEnabled:!1,multiEnabled:!1,constructor:function(a){e.mixin(this,a)},postCreate:function(){this.inherited(arguments);this._initControls()},startup:function(){this._started=!0;this._updateAltIndexes()},onShown:function(){this.pageContainer.nextDisabled=!1},validate:function(a,b){var c=new k;"next-view"===a?c.resolve(this._nextView(b)):"back-view"===a?c.resolve(this._backView(b)):this._homeView(b).then(function(a){c.resolve(a)});
return c},_updateAltIndexes:function(){this.pageContainer&&!this._startPageView&&(this._startPageView=this.pageContainer.getViewByTitle("StartPage"),this._locationTypeView=this.pageContainer.getViewByTitle("LocationType"),this._startPageView&&this._locationTypeView?(this.altNextIndex=this._startPageView.index,this.altBackIndex=this._locationTypeView.index):this._startPageView&&(this.altBackIndex=this.altNextIndex=this._startPageView.index))},_nextView:function(a){if(a.currentView.label===this.label){a=
this._getResults();var b=!1;g.forEach(a.fields,function(a){"undefined"!==typeof a.value&&null!==a.value&&""!==a.value&&(b=!0)});this.parent._locationMappingComplete=b;this.emit("location-mapping-update",b)}return!0},_backView:function(a){a.currentView.label===this.label&&(this.parent._locationMappingComplete=!1,this.emit("location-mapping-update",!1));return!0},_homeView:function(a){var b=new k;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(a){b.resolve(a)});return b},
_rdoSingleAddressClick:function(){this.rdoSingleAddress.set("checked",!0)},_rdoSingleAddressChanged:function(a){this.useSingle=a;this._toggleVisibility(this.singleFieldTable,a)},_rdoMultiAddressClick:function(){this.rdoMultiAddress.set("checked",!0)},_rdoMultiAddressChanged:function(a){this.useMulti=a;this._toggleVisibility(this.multiFieldTable,a)},_toggleVisibility:function(a,b){var c=b?"display-table-row-group":"display-none";d.contains(a,c)||d.add(a,c);b=b?"display-none":"display-table-row-group";
d.contains(a,b)&&d.remove(a,b)},_initControls:function(){this.own(n(this.rdoSingleAddress,"change",e.hitch(this,this._rdoSingleAddressChanged)));this.own(n(this.rdoMultiAddress,"change",e.hitch(this,this._rdoMultiAddressChanged)));var a=this.singleEnabled,b=this.multiEnabled;a&&b?(this.rdoSingleAddress.set("checked",this.useSingle),this._toggleVisibility(this.singleFieldTable,this.useSingle),this.rdoMultiAddress.set("checked",this.useMulti),this._toggleVisibility(this.multiFieldTable,this.useMulti),
this._setFields(this.singleFields,this.fields,this.singleFieldTable),this._setFields(this.multiFields,this.fields,this.multiFieldTable),d.contains(this.singleSubTaskHintTr,"bottom-border-bold")&&d.remove(this.singleSubTaskHintTr,"bottom-border-bold"),d.add(this.singleSubTaskHintTr,"bottom-border")):a?(this.useSingle=!0,this.useMulti=!1,this._setFields(this.singleFields,this.fields,this.singleFieldTable),this._initTableDisplay([this.multiAddressRow,this.mainInstructionRow,this.singleRadioRow],[this.singleFieldHintTd,
this.singleFieldTableRow],[],[this.singleSubTaskHintTd])):b&&(this.useMulti=!0,this.useSingle=!1,this._setFields(this.multiFields,this.fields,this.multiFieldTable),this._initTableDisplay([this.singleAddressRow,this.mainInstructionRow,this.multiRadioRow],[this.multiFieldHintTd,this.multiFieldTableRow],[],[this.multiSubTaskHintTd]))},_initTableDisplay:function(a,b,c,h){g.forEach(a,e.hitch(this,function(a){this._toggleVisibility(a,!1)}));g.forEach(b,e.hitch(this,function(a){d.add(a,"no-padding")}));
g.forEach(c,e.hitch(this,function(a){d.add(a,"pad-bottom-10")}));g.forEach(h,function(a){d.contains(a,"pad-left-20")&&d.remove(a,"pad-left-20");d.add(a,"pad-left-5")})},_setFields:function(a,b,c){var h=0;g.forEach(a,e.hitch(this,function(l){var f=m.create("tr",{},c);f.keyField=l.value;f.label=l.label;var e=m.create("td",{className:"field-control-td pad-left-15"},f);m.create("div",{className:"main-text float-left min-width-80",innerHTML:l.label},e);var e=m.create("td",{className:"field-control-td"},
f),p=new x({name:"field"+h,fieldName:l.label,className:"field-control"}),k=[{label:this.nls.warningsAndErrors.noValue,value:this.nls.warningsAndErrors.noValue}],n=this._getDefaultFieldName(b,l);g.forEach(b,function(a){k.push({label:a.label,value:a.value,selected:a.value===n})});p.addOption(k);p.placeAt(e);p.startup();f.fieldControl=p;h+=1;1<a.length&&d.add(f,"bottom-border")}))},_getDefaultFieldName:function(a,b){b=b.isRecognizedValues;for(var c=0;c<b.length;c++)for(var h=b[c],d=0;d<a.length;d++){var f=
a[d];if(f.value.toString().toUpperCase()===h.toString().toUpperCase())return f.value}},setStyleColor:function(a){this.styleColor=a},updateImageNodes:function(){},_getResults:function(){var a=[],b={},d=this.nls.warningsAndErrors.noValue;g.forEach((this.useSingle?this.singleFieldTable:this.multiFieldTable).rows,function(c){var e=c.fieldControl.get("value"),f=c.label;c=c.keyField;e!==d?(a.push({keyField:c,value:e,label:f}),b[c]=e):(a.push({keyField:c,value:void 0,label:f}),b[c]=void 0)});return{type:this.useSingle?
"single":"multi",fields:a,mappedArrayFields:b}}})});