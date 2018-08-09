Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var PHONE_8_MASK='9999-9999';
var PHONE_9_MASK='99999-9999';
var CEL_PHONE_SETTINGS={
withDDD:true,
dddMask:'(99) '};var


CelPhoneMask=function(_BaseMask){_inherits(CelPhoneMask,_BaseMask);function CelPhoneMask(){_classCallCheck(this,CelPhoneMask);return _possibleConstructorReturn(this,(CelPhoneMask.__proto__||Object.getPrototypeOf(CelPhoneMask)).apply(this,arguments));}_createClass(CelPhoneMask,[{key:'getValue',value:function getValue(




value,settings){
var mask=this._getMask(value,settings);
return this.getVMasker().toPattern(value,mask);
}},{key:'getRawValue',value:function getRawValue(

maskedValue,settings){
return _get(CelPhoneMask.prototype.__proto__||Object.getPrototypeOf(CelPhoneMask.prototype),'removeNotNumbers',this).call(this,maskedValue);
}},{key:'validate',value:function validate(

value,settings){
var valueToValidate=_get(CelPhoneMask.prototype.__proto__||Object.getPrototypeOf(CelPhoneMask.prototype),'getDefaultValue',this).call(this,value);
valueToValidate=this.getValue(value,settings);

var mask=this._getMask(value,settings);

return valueToValidate.length===mask.length;
}},{key:'_getMask',value:function _getMask(

value,settings){var _this2=this;
var mergedSettings=_get(CelPhoneMask.prototype.__proto__||Object.getPrototypeOf(CelPhoneMask.prototype),'mergeSettings',this).call(this,CEL_PHONE_SETTINGS,settings);

var numbers=_get(CelPhoneMask.prototype.__proto__||Object.getPrototypeOf(CelPhoneMask.prototype),'removeNotNumbers',this).call(this,value);
var mask=PHONE_8_MASK;

var use9DigitMask=function(){
if(mergedSettings.withDDD){
var numbersDDD=_get(CelPhoneMask.prototype.__proto__||Object.getPrototypeOf(CelPhoneMask.prototype),'removeNotNumbers',_this2).call(_this2,mergedSettings.dddMask);
var remainingValueNumbers=numbers.substr(numbersDDD.length);
return remainingValueNumbers.length>=9;
}else{
return numbers.length>=9;
}
}();

if(use9DigitMask){
mask=PHONE_9_MASK;
}

if(mergedSettings.withDDD){
mask=''+mergedSettings.dddMask+mask;
}

return mask;
}}],[{key:'getType',value:function getType(){return'cel-phone';}}]);return CelPhoneMask;}(_base2.default);exports.default=CelPhoneMask;