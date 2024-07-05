// import * as Phaser from 'phaser';

import AIOSpinnerFactory from './aiospinner/Factory';
import AlphaMaskImageFactory from './alphamaskimage/Factory';
import AnchorFactory from './anchor/Factory';
import BadgeLabelFactory from './badgelabel/Factory';
import BBCodeTextFactory from './bbcodetext/Factory';
import ButtonsFactory from './buttons/Factory';
import CanvasFactory from './canvas/Factory';
import CanvasInputFactory from './canvasinput/Factory';
import ChartFactory from './chart/Factory';
import CheckboxFactory from './checkbox/Factory';
import CircleMaskImageFactory from './circlemaskimage/Factory';
import CircularProgressCanvasFactory from './circularprogresscanvas/Factory';
import CircularProgressFactory from './circularprogress/Factory';
import ClickFactory from './click/Factory';
import ClickOutsideFactory from './clickoutside/Factory';
import ColorComponentsFactory from './colorinput/colorcomponents/Factory';
import ColorInputFactory from './colorinput/colorinput/Factory';
import ColorInputLiteFactory from './colorinput/colorinputbase/Factory';
import ColorPickerFactory from './colorinput/colorpicker/Factory';
import ConfirmDialogFactory from './confirmdialog/Factory';
import ConfirmActionButtonFactory from './confirmactionbutton/Factory';
import ContainerFactory from './container/Factory';
import CoverFactory from './cover/Factory';
import CustomProgressFactory from './customprogress/Factory';
import CustomShapesFactory from './customshapes/Factory';
import DialogFactory from './dialog/Factory';
import DragFactory from './drag/Factory';
import DropDownListFactory from './dropdownlist/Factory';
import DynamicTextFactory from './dynamictext/Factory';
import ExpBarFactory from './expbar/Factory';
import FlipFactory from './flip/Factory';
import FileChooserFactory from './filechooser/Factory';
import FileDropZoneFactory from './filedropzone/Factory';
import FileSelectorButtonFactory from './fileselectorbutton/Factory';
import FixWidthButtonsFactory from './fixwidthbuttons/Factory';
import FixWidthSizerFactory from './fixwidthsizer/Factory';
import FolderFactory from './folder/Factory';
import FullWindowRectangleFactory from './fullwindowrectangle/Factory';
import FullWindowZoneFactory from './fullwindowzone/Factory';
import GridButtonsFactory from './gridbuttons/Factory';
import GridSizerFactory from './gridsizer/Factory';
import GridTableFactory from './gridtable/Factory';
import HiddenEditFactory from './hiddenedit/Factory';
import HolyGrailFactory from './holygrail/Factory';
import ImageBoxFactory from './imagebox/Factory';
import ImageInputLabelFactory from './imageinputlabel/Factory';
import InputTextFactory from './inputtext/Factory';
import InTouchingFactory from './intouching/Factory';
import KnobFactory from './knob/Factory';
import LabelFactory from './label/Factory';
import LayerManagerFactory from './layermanager/Factory';
import LineProgressCanvasFactory from './lineprogresscanvas/Factory';
import LineProgressFactory from './lineprogress/Factory';
import MenuFactory from './menu/Factory';
import NameInputDialogFactory from './nameinputdialog/Factory';
import NameValueLabelFactory from './namevaluelabel/Factory';
import NinePatchFactory from './ninepatch/Factory';
import NinePatch2Factory from './ninepatch2/Factory';
import NumberBarFactory from './numberbar/Factory';
import OverlapSizerFactory from './overlapsizer/Factory';
import PagesFactory from './pages/Factory';
import PanFactory from './pan/Factory';
import PerspectiveCardFactory from './perspectivecard/Factory';
import PerspectiveFactory from './perspective/Factory';
import PinchFactory from './pinch/Factory';
import PressFactory from './press/Factory';
import QuadShapeFactory from './quadshape/Factory';
import RotateFactory from './rotate/Factory';
import RoundRectangleCanvasFactory from './roundrectanglecanvas/Factory';
import RoundRectangleFactory from './roundrectangle/Factory';
import ScrollablePanelFactory from './scrollablepanel/Factory';
import ScrollBarFactory from './scrollbar/Factory';
import SimpleDropDownListFactory from './simpledropdownlist/Factory';
import SimpleLabelFactory from './simplelabel/Factory';
import SimpleTextBoxFactory from './simpletextbox/Factory';
import SimpleTitleLabelFactory from './simpletitlelabel/Factory';
import SizerFactory from './sizer/Factory';
import ShakeFactory from './shake/Factory';
import SkewFactory from './skew/Factory';
import SliderFactory from './slider/Factory';
import SpaceFactory from './space/Factory';
import SplitPanelsFactory from './splitpanels/Factory';
import StatesBarRectangleFactory from './statesbarrectangle/Factory';
import StatesBitmapTextFactory from './statesbitmaptext/Factory';
import StatesImageFactory from './statesimage/Factory';
import StatesNinePatchFactory from './statesninepatch/Factory.js';
import StatesNineSliceFactory from './statesnineslice/Factory';
import StatesRoundRectangleFactory from './statesroundrectangle/Factory';
import StatesTextFactory from './statestext/Factory';
import SwipeFactory from './swipe/Factory';
import TabsFactory from './tabs/Factory';
import TabPagesFactory from './tabpages/Factory';
import TagTextFactory from './tagtext/Factory';
import TapFactory from './tap/Factory';
import TextAreaFactory from './textarea/Factory';
import TextAreaInputFactory from './textareainput/Factory';
import TextBoxFactory from './textbox/Factory';
import TextEditFactory from './textedit/Factory';
import TextPageFactory from './textpage/Factory';
import TextPlayerFactory from './textplayer/Factory';
import TextTypingFactory from './texttyping/Factory';
import TitleLabelFactory from './titlelabel/Factory';
import ToastFactory from './toast/Factory';
import ToastQueueFactory from './toastqueue/Factory';
import ToggleSwitchFactory from './toggleswitch/Factory';
import TouchEventStopFactory from './toucheventstop/Factory';
import TreesFactory from './trees/Factory';
import TriangleFactory from './triangle/Factory';
import TransitionImageFactory from './transitionimage/Factory';
import TransitionImagePackFactory from './transitionimagepack/Factory';
import TweakerFactory from './tweaker/Factory';

import { EaseMoveTo, EaseMoveFrom } from './easemove/EaseMove';
import ConfirmAction from './confirmdialog/ConfirmAction';
import Edit from './textedit/Edit';
import { FadeIn, FadeOutDestroy } from './fade/Fade';
import { Modal, ModalPromise, ModalClose } from './modal/Modal';
import { GetParentSizer, GetTopmostSizer } from './utils/GetParentSizer';
import RemoveFromParent from './utils/RemoveFromParent';
import { Show, Hide, IsShown, } from './utils/Hide';
import SetChildrenInteractive from './utils/setchildreninteractive/SetChildrenInteractive';
import { WaitEvent, WaitComplete } from './utils/WaitEvent';
import Delay from '../../plugins/utils/promise/Delay';
import WrapExpandText from './utils/wrapexpandtext/WrapExpandText';
import FontSizeExpandText from './utils/fontsizeexpandtext/FontSizeExpandText';
import SetFontSizeToFitWidth from '../../plugins/utils/text/fontsizefit/FontSizeFit';
import RequestDrag from '../../plugins/utils/input/RequestDrag';
import { OpenFileChooser } from './filechooser/FileChooser';

export default UIPlugin;

declare class Factories {
    aioSpinner: typeof AIOSpinnerFactory;
    alphaMaskImage: typeof AlphaMaskImageFactory;
    anchor: typeof AnchorFactory;
    badgeLabel: typeof BadgeLabelFactory;
    BBCodeText: typeof BBCodeTextFactory;
    buttons: typeof ButtonsFactory;
    canvas: typeof CanvasFactory;
    canvasInput: typeof CanvasInputFactory;
    chart: typeof ChartFactory;
    checkbox: typeof CheckboxFactory;
    circleMaskImage: typeof CircleMaskImageFactory;
    circularProgressCanvas: typeof CircularProgressCanvasFactory;
    circularProgress: typeof CircularProgressFactory;
    click: typeof ClickFactory;
    clickOutside: typeof ClickOutsideFactory;
    colorComponents: typeof ColorComponentsFactory;
    colorInput: typeof ColorInputFactory;
    colorInputLite: typeof ColorInputLiteFactory;
    colorPicker: typeof ColorPickerFactory;
    confirmDialog: typeof ConfirmDialogFactory;
    confirmActionButton: typeof ConfirmActionButtonFactory;
    inTouching: typeof InTouchingFactory;
    container: typeof ContainerFactory;
    cover: typeof CoverFactory;
    customProgress: typeof CustomProgressFactory;
    customShapes: typeof CustomShapesFactory;
    dialog: typeof DialogFactory;
    drag: typeof DragFactory;
    dropDownList: typeof DropDownListFactory;
    dynamicText: typeof DynamicTextFactory;
    expBar: typeof ExpBarFactory;
    flip: typeof FlipFactory;
    fileChooser: typeof FileChooserFactory;
    fileDropZone: typeof FileDropZoneFactory;
    fileSelectorButton: typeof FileSelectorButtonFactory;
    fixWidthButtons: typeof FixWidthButtonsFactory;
    fixWidthSizer: typeof FixWidthSizerFactory;
    folder: typeof FolderFactory;
    fullWindowRectangle: typeof FullWindowRectangleFactory;
    fullWindowZone: typeof FullWindowZoneFactory;
    gridButtons: typeof GridButtonsFactory;
    gridSizer: typeof GridSizerFactory;
    gridTable: typeof GridTableFactory;
    hiddenEdit: typeof HiddenEditFactory;
    holyGrail: typeof HolyGrailFactory;
    knob: typeof KnobFactory;
    imageBox: typeof ImageBoxFactory;
    imageInputLabel: typeof ImageInputLabelFactory;
    inputText: typeof InputTextFactory;
    label: typeof LabelFactory;
    layerManager: typeof LayerManagerFactory;
    lineProgress: typeof LineProgressFactory;
    lineProgressCanvas: typeof LineProgressCanvasFactory;
    menu: typeof MenuFactory;
    nameInputDialog: typeof NameInputDialogFactory;
    nameValueLabel: typeof NameValueLabelFactory;
    ninePatch: typeof NinePatchFactory;
    ninePatch2: typeof NinePatch2Factory;
    numberBar: typeof NumberBarFactory;
    overlapSizer: typeof OverlapSizerFactory;
    pages: typeof PagesFactory;
    pan: typeof PanFactory;
    perspective: typeof PerspectiveFactory;
    perspectiveCard: typeof PerspectiveCardFactory;
    pinch: typeof PinchFactory;
    press: typeof PressFactory;
    quadShape: typeof QuadShapeFactory;
    rotate: typeof RotateFactory;
    roundRectangleCanvas: typeof RoundRectangleCanvasFactory;
    roundRectangle: typeof RoundRectangleFactory;
    scrollablePanel: typeof ScrollablePanelFactory;
    scrollBar: typeof ScrollBarFactory;
    simpleLabel: typeof SimpleLabelFactory;
    simpleTextBox: typeof SimpleTextBoxFactory;
    simpleTitleLabel: typeof SimpleTitleLabelFactory;
    simpleDropDownList: typeof SimpleDropDownListFactory;
    sizer: typeof SizerFactory;
    shake: typeof ShakeFactory;
    skew: typeof SkewFactory;
    slider: typeof SliderFactory;
    space: typeof SpaceFactory;
    splitPanels: typeof SplitPanelsFactory;
    statesBarRectangle: typeof StatesBarRectangleFactory;
    statesBitmapText: typeof StatesBitmapTextFactory
    statesImage: typeof StatesImageFactory;
    statesNinePatch: typeof StatesNinePatchFactory;
    statesNineSlice: typeof StatesNineSliceFactory;
    statesRoundRectangle: typeof StatesRoundRectangleFactory;
    statesText: typeof StatesTextFactory;
    swipe: typeof SwipeFactory;
    tabs: typeof TabsFactory;
    tabPages: typeof TabPagesFactory;
    tagText: typeof TagTextFactory;
    tap: typeof TapFactory;
    textArea: typeof TextAreaFactory;
    textAreaInput: typeof TextAreaInputFactory;
    textBox: typeof TextBoxFactory;
    textEdit: typeof TextEditFactory;
    textPage: typeof TextPageFactory;
    textPlayer: typeof TextPlayerFactory;
    textTyping: typeof TextTypingFactory;
    toast: typeof ToastFactory;
    toastQueue: typeof ToastQueueFactory;
    toggleSwitch: typeof ToggleSwitchFactory;
    touchEventStop: typeof TouchEventStopFactory;
    trees: typeof TreesFactory;
    triangle: typeof TriangleFactory;
    transitionImage: typeof TransitionImageFactory;
    transitionImagePack: typeof TransitionImagePackFactory;
    tweaker: typeof TweakerFactory;
    twoRowsLabel: typeof TitleLabelFactory;
}

declare class UIPlugin extends Phaser.Plugins.ScenePlugin {
    add: Factories;


    easeMoveTo: typeof EaseMoveTo;
    easeMoveFrom: typeof EaseMoveFrom;
    confirmAction: typeof ConfirmAction;
    edit: typeof Edit;
    fadeIn: typeof FadeIn;
    fadeOutDestroy: typeof FadeOutDestroy;
    modal: typeof Modal;
    modalPromise: typeof ModalPromise;
    modalClose: typeof ModalClose;
    getParentSizer: typeof GetParentSizer;
    getTopmostSizer: typeof GetTopmostSizer;
    removeFromParent: typeof RemoveFromParent;
    hide: typeof Hide;
    show: typeof Show;
    isShown: typeof IsShown;
    setChildrenInteractive: typeof SetChildrenInteractive;
    waitEvent: typeof WaitEvent;
    waitComplete: typeof WaitComplete;
    delayPromise: typeof Delay;
    wrapExpandText: typeof WrapExpandText;
    fontSizeExpandText: typeof FontSizeExpandText;
    fontSizeResize: typeof SetFontSizeToFitWidth;  // Backward compatibility
    setFontSizeToFitWidth: typeof SetFontSizeToFitWidth;
    requestDrag: typeof RequestDrag;
    openFileChooser: typeof OpenFileChooser;

    isInTouching(
        gameObject: Phaser.GameObjects.GameObject,
        pointer?: Phaser.Input.Pointer,
        preTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
        postTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
    ): boolean;

    readonly viewport: Phaser.Geom.Rectangle;
}


import AIOSpinnerClass from './aiospinner/AIOSpinner';
import AlphaMaskImageClass from './alphamaskimage/AlphaMaskImage';
import BadgeLabelClass from './badgelabel/BadgeLabel';
import BBCodeTextClass from './bbcodetext/BBCodeText';
import ButtonsClass from './buttons/Buttons';
import CanvasClass from './canvas/Canvas';
import CanvasInputClass from './canvasinput/CanvasInput';
import CheckboxClass from './checkbox/Checkbox';
import CircleMaskImageClass from './circlemaskimage/CircleMaskImage';
import CircularProgressCanvasClass from './circularprogresscanvas/CircularProgressCanvas';
import CircularProgressClass from './circularprogress/CircularProgress';
import ClickClass from './click/Click';
import ClickOutsideClass from './clickoutside/ClickOutside';
import ColorComponentsClass from './colorinput/colorcomponents/ColorComponents';
import ColorInputClass from './colorinput/colorinput/ColorInput';
import ColorInputLiteClass from './colorinput/colorinputbase/ColorInputBase';
import ColorPickerClass from './colorinput/colorpicker/ColorPicker';
import ConfirmActionButtonClass from './confirmactionbutton/ConfirmActionButton';
import ConfirmDialogClass from './confirmdialog/ConfirmDialog';
import ContainerClass from './container/Container';
import CoverClass from './cover/Cover';
import CustomProgressClass from './customprogress/CustomProgress';
import CustomShapesClass from './customshapes/CustomShapes';
import DialogClass from './dialog/Dialog';
import DragClass from './drag/Drag';
import DropDownListClass from './dropdownlist/DropDownList';
import DynamicTextClass from './dynamictext/DynamicText';
import { EaseMove as EaseMoveClass } from './easemove/EaseMove'
import ExpBarClass from './expbar/ExpBar';
import { Fade as FadeClass } from './fade/Fade.js';
import FlipClass from './flip/Flip';
import { FileChooser as FileChooserClass } from './filechooser/FileChooser';
import FileDropZoneClass from './filedropzone/FileDropZone';
import FileSelectorButtonClass from './fileselectorbutton/FileSelectorButton';
import FixWidthButtonsClass from './fixwidthbuttons/FixWidthButtons';
import FolderClass from './folder/Folder';
import FullWindowRectangleClass from './fullwindowrectangle/FullWindowRectangle';
import FullWindowZoneClass from './fullwindowzone/FullWindowZone';
import FixWidthSizerClass from './fixwidthsizer/FixWidthSizer';
import GridButtonsClass from './gridbuttons/GridButtons';
import GridSizerClass from './gridsizer/GridSizer';
import GridTableClass from './gridtable/GridTable';
import HiddenTextEditClass from './hiddenedit/HiddenEdit.js';
import HolyGrailClass from './holygrail/HolyGrail';
import ImageBoxClass from './imagebox/ImageBox';
import ImageInputLabelClass from './imageinputlabel/ImageInputLabel';
import InputTextClass from './inputtext/InputText';
import InTouchingClass from './intouching/InTouching';
import KnobClass from './knob/Knob';
import LabelClass from './label/Label';
import LayerManagerClass from './layermanager/LayerManager';
import LineProgressCanvasClass from './lineprogresscanvas/LineProgressCanvas';
import LineProgressClass from './lineprogress/LineProgress';
import MenuClass from './menu/Menu';
import NameInputDialogClass from './nameinputdialog/NameInputDialog';
import NameValueLabelClass from './namevaluelabel/NameValueLabel';
import NinePatchClass from './ninepatch/NinePatch';
import NumberBarClass from './numberbar/NumberBar';
import OverlapSizerClass from './overlapsizer/OverlapSizer';
import PagesClass from './pages/Pages';
import PanClass from './pan/Pan';
import PerspectiveCardClass from './perspectivecard/PerspectiveCard';
import PerspectiveClass from './perspective/Perspective';
import PinchClass from './pinch/Pinch';
import PressClass from './press/Press';
import QuadShapeClass from './quadshape/QuadShape';
import RotateClass from './rotate/Rotate';
import RoundRectangleCanvasClass from './roundrectanglecanvas/RoundRectangleCanvas';
import RoundRectangleClass from './roundrectangle/RoundRectangle';
import ScrollablePanelClass from './scrollablepanel/ScrollablePanel';
import ScrollBarClass from './scrollbar/ScrollBar';
import SimpleDropDownListClass from './simpledropdownlist/SimpleDropDownList';
import SimpleLabelClass from './simplelabel/SimpleLabel';
import SimpleTextBoxClass from './simpletextbox/SimpleTextBox';
import SimpleTitleLabelClass from './simpletitlelabel/SimpleTitleLabel';
import SizerClass from './sizer/Sizer';
import ShakeClass from './shake/Shake';
import SkewClass from './skew/Skew';
import SliderClass from './slider/Slider';
import SpaceClass from './space/Space';
import SplitPanelsClass from './splitpanels/SplitPanels';
import StatesBarRectangleClass from './statesbarrectangle/StatesBarRectangle';
import StatesBitmapTextClass from './statesbitmaptext/StatesBitmapText';
import StatesImageClass from './statesimage/StatesImage';
import StatesNinePatchClass from './statesninepatch/StatesNinePatch';
import StatesNineSliceClass from './statesnineslice/StatesNineSlice';
import StatesRoundRectangleClass from './statesroundrectangle/StatesRoundRectangle';
import StatesTextClass from './statestext/StatesText';
import SwipeClass from './swipe/Swipe';
import TabsClass from './tabs/Tabs';
import TabPagesClass from './tabpages/TabPages';
import TagTextClass from './tagtext/TagText';
import TapClass from './tap/Tap';
import TextAreaClass from './textarea/TextArea';
import TextAreaInputClass from './textareainput/TextAreaInput';
import TextBoxClass from './textbox/TextBox';
import TextPageClass from './textpage/TextPage';
import TextPlayerClass from './textplayer/TextPlayer';
import TextTypingClass from './texttyping/TextTyping';
import TitleLabelClass from './titlelabel/TitleLabel';
import ToastClass from './toast/Toast';
import ToastQueueClass from './toastqueue/ToastQueue';
import ToggleSwitchClass from './toggleswitch/ToggleSwitch';
import TouchEventStopClass from './toucheventstop/TouchEventStop';
import TreesClass from './trees/Trees';
import TriangleClass from './triangle/Triangle';
import TransitionImageClass from './transitionimage/TransitionImage';
import TransitionImagePackClass from './transitionimagepack/TransitionImagePack';
import TweakerClass from './tweaker/Tweaker';

declare namespace UIPlugin {
    type AIOSpinner = AIOSpinnerClass;
    type AlphaMaskImage = AlphaMaskImageClass;
    type BadgeLabel = BadgeLabelClass;
    type BBCodeText = BBCodeTextClass;
    type Buttons = ButtonsClass;
    type Canvas = CanvasClass;
    type CanvasInput = CanvasInputClass;
    type Checkbox = CheckboxClass;
    type CircleMaskImage = CircleMaskImageClass;
    type CircularProgressCanvas = CircularProgressCanvasClass;
    type CircularProgress = CircularProgressClass;
    type Click = ClickClass;
    type ClickOutside = ClickOutsideClass;
    type ColorComponents = ColorComponentsClass;
    type ColorInput = ColorInputClass;
    type ColorInputBase = ColorInputLiteClass;
    type ColorPicker = ColorPickerClass;
    type Container = ContainerClass;
    type ConfirmActionButton = ConfirmActionButtonClass;
    type ConfirmDialog = ConfirmDialogClass;
    type Cover = CoverClass;
    type CustomProgress = CustomProgressClass;
    type CustomShapes = CustomShapesClass;
    type Dialog = DialogClass;
    type Drag = DragClass;
    type DropDownList = DropDownListClass;
    type DynamicText = DynamicTextClass;
    type EaseMove = EaseMoveClass;
    type ExpBar = ExpBarClass;
    type Fade = FadeClass;
    type Flip = FlipClass;
    type FileChooser = FileChooserClass;
    type FileDropZone = FileDropZoneClass;
    type FileSelectorButton = FileSelectorButtonClass;
    type FixWidthButtons = FixWidthButtonsClass;
    type Folder = FolderClass;
    type FullWindowRectangle = FullWindowRectangleClass;
    type FullWindowZone = FullWindowZoneClass;
    type FixWidthSizer = FixWidthSizerClass;
    type GridButtons = GridButtonsClass;
    type GridSizer = GridSizerClass;
    type GridTable = GridTableClass;
    type HiddenEdit = HiddenTextEditClass;
    type HolyGrail = HolyGrailClass;
    type ImageBox = ImageBoxClass;
    type ImageInputLabel = ImageInputLabelClass;
    type InputText = InputTextClass;
    type InTouching = InTouchingClass;
    type Knob = KnobClass;
    type Label = LabelClass;
    type LayerManager = LayerManagerClass;
    type LineProgress = LineProgressClass;
    type LineProgressCanvas = LineProgressCanvasClass;
    type Menu = MenuClass;
    type NameInputDialog = NameInputDialogClass;
    type NameValueLabel = NameValueLabelClass;
    type NinePatch = NinePatchClass;
    type NumberBar = NumberBarClass;
    type OverlapSizer = OverlapSizerClass;
    type Pages = PagesClass;
    type Pan = PanClass;
    type Perspective = PerspectiveClass;
    type PerspectiveCard = PerspectiveCardClass;
    type Pinch = PinchClass;
    type Press = PressClass;
    type QuadShape = QuadShapeClass;
    type Rotate = RotateClass;
    type RoundRectangleCanvas = RoundRectangleCanvasClass;
    type RoundRectangle = RoundRectangleClass;
    type ScrollablePanel = ScrollablePanelClass;
    type ScrollBar = ScrollBarClass;
    type SimpleDropDownList = SimpleDropDownListClass;
    type SimpleLabel = SimpleLabelClass;
    type SimpleTextBox = SimpleTextBoxClass;
    type SimpleTitleLabel = SimpleTitleLabelClass;
    type Sizer = SizerClass;
    type shake = ShakeClass;
    type skew = SkewClass;
    type Slider = SliderClass;
    type Swipe = SwipeClass;
    type Space = SpaceClass;
    type SplitPanels = SplitPanelsClass;
    type StatesBarRectangle = StatesBarRectangleClass;
    type StatesBitmapText = StatesBitmapTextClass;
    type StatesImage = StatesImageClass;
    type StateNinePatch = StatesNinePatchClass;
    type StatesNine = StatesNineSliceClass;
    type StatesRoundRectangle = StatesRoundRectangleClass;
    type StatesText = StatesTextClass;
    type Tabs = TabsClass;
    type TabPages = TabPagesClass;
    type TagText = TagTextClass;
    type Tap = TapClass;
    type TextArea = TextAreaClass;
    type TextAreaInput = TextAreaInputClass;
    type TextBox = TextBoxClass;
    type TextPage = TextPageClass;
    type TextPlayer = TextPlayerClass;
    type TextTyping = TextTypingClass;
    type TitleLabel = TitleLabelClass;
    type Toast = ToastClass;
    type ToastQueue = ToastQueueClass;
    type ToggleSwitch = ToggleSwitchClass;
    type TouchEventStop = TouchEventStopClass;
    type Trees = TreesClass;
    type Triangle = TriangleClass;
    type TransitionImage = TransitionImageClass;
    type TransitionImagePack = TransitionImagePackClass;
    type Tweaker = TweakerClass;
}