Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/DraggableView.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_DragEvent=require('../type').babelPluginFlowReactPropTypes_proptype_DragEvent||require('prop-types').any;var babelPluginFlowReactPropTypes_proptype_SwipeDirection=require('../type').babelPluginFlowReactPropTypes_proptype_SwipeDirection||require('prop-types').any;var DraggableView=function(_Component){_inherits(DraggableView,_Component);function DraggableView(props){_classCallCheck(this,DraggableView);var _this=_possibleConstructorReturn(this,(DraggableView.__proto__||Object.getPrototypeOf(DraggableView)).call(this,props));_this.onLayout=function(event){_this.layout=event.nativeEvent.layout;};_this.panResponder=_reactNative.PanResponder.create({onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt,gestureState){return gestureState.dx!==0&&gestureState.dy!==0;},onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},onPanResponderMove:function onPanResponderMove(event,gestureState){if(!_this.currentSwipeDirection){_this.currentSwipeDirection=_this.getSwipeDirection(gestureState);}if(_this.isAllowedDirection(gestureState)){var animEvent=void 0;if(['up','down'].includes(_this.currentSwipeDirection)){animEvent={dy:_this.pan.y};}else if(['left','right'].includes(_this.currentSwipeDirection)){animEvent={dx:_this.pan.x};}_reactNative.Animated.event([null,animEvent])(event,gestureState);_this.props.onSwiping(_this.createDragEvent({x:_this.pan.x._value,y:_this.pan.y._value}));}},onPanResponderRelease:function onPanResponderRelease(){_this.currentSwipeDirection=null;_this.pan.flattenOffset();var event=_this.createDragEvent({x:_this.pan.x._value,y:_this.pan.y._value});if(_this.props.onSwipeOut&&Math.abs(_this.pan.y._value)>_this.props.swipeThreshold||Math.abs(_this.pan.x._value)>_this.props.swipeThreshold){_this.props.onSwipingOut(event);_reactNative.Animated.spring(_this.pan,{toValue:_this.getDisappearDirection(),velocity:0,tension:65,friction:11}).start(function(){_this.props.onSwipeOut(event);});return;}_this.props.onRelease(event);_reactNative.Animated.spring(_this.pan,{toValue:{x:0,y:0},velocity:0,tension:65,friction:11}).start();}});_this.pan=new _reactNative.Animated.ValueXY();_this.allowedDirections=[].concat(props.swipeDirection);_this.layout=null;return _this;}_createClass(DraggableView,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;this.panEventListenerId=this.pan.addListener(function(axis){_this2.props.onMove(_this2.createDragEvent(axis));});}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.pan.removeListener(this.panEventListenerId);}},{key:'getSwipeDirection',value:function getSwipeDirection(gestureState){if(this.isValidHorizontalSwipe(gestureState)){return gestureState.dx>0?'right':'left';}else if(this.isValidVerticalSwipe(gestureState)){return gestureState.dy>0?'down':'up';}return null;}},{key:'getDisappearDirection',value:function getDisappearDirection(){var _Dimensions$get=_reactNative.Dimensions.get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;var vertical=height/2+this.layout.height/2;var horizontal=width/2+this.layout.width/2;var toValue=void 0;if(this.currentSwipeDirection==='up'){toValue={x:0,y:-vertical};}else if(this.currentSwipeDirection==='down'){toValue={x:0,y:vertical};}else if(this.currentSwipeDirection==='left'){toValue={x:-horizontal,y:0};}else if(this.currentSwipeDirection==='right'){toValue={x:horizontal,y:0};}return toValue;}},{key:'isValidHorizontalSwipe',value:function isValidHorizontalSwipe(_ref){var vx=_ref.vx,dy=_ref.dy;return this.isValidSwipe(vx,dy);}},{key:'isValidVerticalSwipe',value:function isValidVerticalSwipe(_ref2){var vy=_ref2.vy,dx=_ref2.dx;return this.isValidSwipe(vy,dx);}},{key:'isValidSwipe',value:function isValidSwipe(velocity,directionalOffset){var velocityThreshold=0.3;var directionalOffsetThreshold=80;return Math.abs(velocity)>velocityThreshold&&Math.abs(directionalOffset)<directionalOffsetThreshold;}},{key:'isAllowedDirection',value:function isAllowedDirection(_ref3){var _this3=this;var dy=_ref3.dy,dx=_ref3.dx;var draggedDown=dy>0;var draggedUp=dy<0;var draggedLeft=dx<0;var draggedRight=dx>0;var isAllowedDirection=function isAllowedDirection(direction){return _this3.currentSwipeDirection===direction&&_this3.allowedDirections.includes(direction);};if(draggedDown&&isAllowedDirection('down')){return true;}else if(draggedUp&&isAllowedDirection('up')){return true;}else if(draggedLeft&&isAllowedDirection('left')){return true;}else if(draggedRight&&isAllowedDirection('right')){return true;}return false;}},{key:'createDragEvent',value:function createDragEvent(axis){return{axis:axis,layout:this.layout,swipeDirection:this.currentSwipeDirection};}},{key:'render',value:function render(){var _props=this.props,style=_props.style,backdrop=_props.backdrop,content=_props.content;return _react2.default.createElement(_reactNative.Animated.View,_extends({},this.panResponder.panHandlers,{style:style,__source:{fileName:_jsxFileName,lineNumber:203}}),backdrop,_react2.default.createElement(_reactNative.Animated.View,{style:this.pan.getLayout(),onLayout:this.onLayout,__source:{fileName:_jsxFileName,lineNumber:208}},content));}}]);return DraggableView;}(_react.Component);DraggableView.defaultProps={style:null,onMove:function onMove(){},onSwiping:function onSwiping(){},onSwipingOut:function onSwipingOut(){},onSwipeOut:null,onRelease:function onRelease(){},swipeThreshold:100,swipeDirection:[]};DraggableView.propTypes={style:require('prop-types').any,onMove:require('prop-types').func,onSwiping:require('prop-types').func,onRelease:require('prop-types').func,onSwipingOut:require('prop-types').func,onSwipeOut:require('prop-types').func,swipeThreshold:require('prop-types').number,swipeDirection:require('prop-types').oneOfType([typeof babelPluginFlowReactPropTypes_proptype_SwipeDirection==='function'?babelPluginFlowReactPropTypes_proptype_SwipeDirection:require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_SwipeDirection),require('prop-types').arrayOf(typeof babelPluginFlowReactPropTypes_proptype_SwipeDirection==='function'?babelPluginFlowReactPropTypes_proptype_SwipeDirection:require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_SwipeDirection))]),backdrop:require('prop-types').node.isRequired,content:require('prop-types').node.isRequired};exports.default=DraggableView;