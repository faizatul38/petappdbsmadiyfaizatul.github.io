// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SymbolChooserPopup.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTSymbolChooserContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"symbolData" title\x3d"${symbolChooserTitle}" class\x3d"common-input esriCTSymbolData"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.common.ok}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojo/text!./SymbolChooserPopup.html jimu/dijit/SymbolChooser jimu/dijit/Popup dijit/focus dojo/domReady!".split(" "),function(c,d,e,f,g,h,k,l,m,n,b){return c([d,e],{templateString:l,baseClass:"jimu-widget-nearme-setting",postCreate:function(){this.own(k(this.okButton,"click",f.hitch(this,this._onOKButtonClicked)));this._initSymbolChooser();this._createSymbolChooserPopup()},
_initSymbolChooser:function(){this.symbolChooser=new m(this.symbolParams,h.create("div",{},this.symbolData));this.symbolChooser.startup()},_createSymbolChooserPopup:function(){this.popup=new n({titleLabel:this.symbolChooserTitle,width:420,height:400,content:this.domNode})},_onOKButtonClicked:function(){if(!g.contains(this.okButton,"jimu-state-disabled"))if(this._validatePointSymbolSize())if(this._validatePointOutlineWidth())if(this._validateLineWidth())if(this._validatePolygonOutlineWidth())this.onOkClick();
else b.focus(this.symbolChooser.fillOutlineWidth.focusNode);else b.focus(this.symbolChooser.lineWidth.focusNode);else b.focus(this.symbolChooser.pointOutlineWidth.focusNode);else b.focus(this.symbolChooser.pointSize.focusNode)},onOkClick:function(a){return a},_validatePointSymbolSize:function(){return this.symbolChooser&&this.symbolChooser.hasOwnProperty("pointSize")?this.symbolChooser.pointSize.isValid():!0},_validatePolygonOutlineWidth:function(){return this.symbolChooser&&this.symbolChooser.hasOwnProperty("fillOutlineWidth")?
this.symbolChooser.fillOutlineWidth.isValid():!0},_validatePointOutlineWidth:function(){return this.symbolChooser&&this.symbolChooser.hasOwnProperty("pointOutlineWidth")?this.symbolChooser.pointOutlineWidth.isValid():!0},_validateLineWidth:function(){if(this.symbolChooser&&this.symbolChooser.hasOwnProperty("lineWidth"))if(this.symbolChooser.lineWidth.isValid()){var a=this.symbolChooser.lineWidth.getValue();if(""===a||null===a||void 0===a||isNaN(a))return this.symbolChooser.lineWidth.setValue("0"),
!1}else return!1;return!0}})});