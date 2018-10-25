require('react');var _DialogButton=require('./components/DialogButton');var _DialogButton2=_interopRequireDefault(_DialogButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_DialogProps={visible:require('prop-types').bool.isRequired,children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},width:require('prop-types').number,height:require('prop-types').number,rounded:require('prop-types').bool,hasOverlay:require('prop-types').bool,overlayPointerEvents:require('prop-types').oneOf(['auto','none']),overlayBackgroundColor:require('prop-types').string,overlayOpacity:require('prop-types').number,dialogTitle:typeof Element==='function'?require('prop-types').instanceOf(Element):require('prop-types').any,dialogAnimation:require('prop-types').object,dialogStyle:require('prop-types').any,containerStyle:require('prop-types').any,actionContainerStyle:require('prop-types').any,actionsBordered:require('prop-types').bool,animationDuration:require('prop-types').number,onTouchOutside:require('prop-types').func,onHardwareBackPress:require('prop-types').func,onShow:require('prop-types').func,onDismiss:require('prop-types').func,actions:require('prop-types').arrayOf(require('prop-types').any),useNativeDriver:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DialogProps',{value:babelPluginFlowReactPropTypes_proptype_DialogProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_DialogActionListProps={children:require('prop-types').arrayOf(typeof _DialogButton2.default==='function'?require('prop-types').instanceOf(_DialogButton2.default):require('prop-types').any).isRequired,style:require('prop-types').any,bordered:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DialogActionListProps',{value:babelPluginFlowReactPropTypes_proptype_DialogActionListProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_DialogButtonProps={text:require('prop-types').string.isRequired,onPress:require('prop-types').func.isRequired,align:require('prop-types').string,style:require('prop-types').any,textStyle:require('prop-types').any,disabled:require('prop-types').bool,activeOpacity:require('prop-types').number,bordered:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DialogButtonProps',{value:babelPluginFlowReactPropTypes_proptype_DialogButtonProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_DialogTitleProps={title:function title(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:require('prop-types').any,textStyle:require('prop-types').any,align:require('prop-types').string,hasTitleBar:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DialogTitleProps',{value:babelPluginFlowReactPropTypes_proptype_DialogTitleProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_DialogContentProps={children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:require('prop-types').any};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DialogContentProps',{value:babelPluginFlowReactPropTypes_proptype_DialogContentProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_OverlayProps={visible:require('prop-types').bool.isRequired,opacity:require('prop-types').number.isRequired,onPress:require('prop-types').func.isRequired,backgroundColor:require('prop-types').string,animationDuration:require('prop-types').number,pointerEvents:require('prop-types').string,useNativeDriver:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_OverlayProps',{value:babelPluginFlowReactPropTypes_proptype_OverlayProps,configurable:true,enumerable:true});