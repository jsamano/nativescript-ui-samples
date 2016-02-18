var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observableModule = require("data/observable");
var frameModule = require("ui/frame");
var NavigationItem = (function () {
    function NavigationItem(title, module, parent) {
        this._title = title;
        this._parent = parent;
        this._module = module;
        this._subItems = new Array();
    }
    Object.defineProperty(NavigationItem.prototype, "subItems", {
        get: function () {
            return this._subItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItem.prototype, "module", {
        get: function () {
            return this._module;
        },
        set: function (value) {
            this._module = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItem.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    return NavigationItem;
})();
exports.NavigationItem = NavigationItem;
var NavigationViewModel = (function (_super) {
    __extends(NavigationViewModel, _super);
    function NavigationViewModel() {
        _super.call(this);
        this.currentParent = new NavigationItem("SDK Examples", undefined, undefined);
        this.buildComponentList();
        this.currentSubItems = this.currentParent.subItems;
        this.hasBackNavigation = false;
    }
    Object.defineProperty(NavigationViewModel.prototype, "currentSubItems", {
        get: function () {
            return this.get("_currentSubItems");
        },
        set: function (value) {
            this.set("_currentSubItems", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationViewModel.prototype, "currentParent", {
        get: function () {
            return this.get("_currentNavItem");
        },
        set: function (value) {
            this.set("_currentNavItem", value);
        },
        enumerable: true,
        configurable: true
    });
    NavigationViewModel.prototype.buildComponentList = function () {
        var parent = this.currentParent;
        this.buildChartExamples(parent);
        this.buildListViewExamples(parent);
        this.buildSideDrawerExamples(parent);
        this.buildCalendarExamples(parent);
    };
    NavigationViewModel.prototype.buildCalendarExamples = function (currentParent) {
        var calendarRoot = new NavigationItem("Calendar", undefined, currentParent);
        currentParent.subItems.push(calendarRoot);
        var calendarExample = new NavigationItem("Getting started", "./calendar/getting-started/getting-started", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
        calendarExample = new NavigationItem("Events", "./calendar/events/events", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
        calendarExample = new NavigationItem("Populating with data", "./calendar/populating-with-data/populating-with-data", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
        calendarExample = new NavigationItem("Programatic control", "./calendar/programatic-control/programatic-control", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
        calendarExample = new NavigationItem("Selection modes", "./calendar/selection-modes/selection-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
        calendarExample = new NavigationItem("View modes", "./calendar/view-modes/view-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
    };
    NavigationViewModel.prototype.buildChartExamples = function (currentParent) {
        var chartRoot = new NavigationItem("Chart", undefined, currentParent);
        currentParent.subItems.push(chartRoot);
        var seriesRoot = new NavigationItem("Series", undefined, chartRoot);
        chartRoot.subItems.push(seriesRoot);
        var seriesExample = new NavigationItem("Bar series", "./chart/series/bar/bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Range bar series", "./chart/series/bar/range-bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Stacked Bar series", "./chart/series/bar/stacked-bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Area series", "./chart/series/area/area-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Stacked Area series", "./chart/series/area/stacked-area-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Line series", "./chart/series/line/line-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Spline series", "./chart/series/spline/spline-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Bubble series", "./chart/series/bubble/bubble-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Scatter Bubble series", "./chart/series/bubble/scatter-bubble-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Candlestick series", "./chart/series/financial/candlestick-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Ohlc series", "./chart/series/financial/ohlc-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Pie series", "./chart/series/pie/pie-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        seriesExample = new NavigationItem("Scatter series", "./chart/series/scatter/scatter-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);
        var stylingRoot = new NavigationItem("Styling", undefined, chartRoot);
        chartRoot.subItems.push(stylingRoot);
        var stylingExample = new NavigationItem("Styling axes", "/chart/styling/styling-axes", stylingRoot);
        stylingRoot.subItems.push(stylingExample);
        stylingExample = new NavigationItem("Styling series", "/chart/styling/styling-series", stylingRoot);
        stylingRoot.subItems.push(stylingExample);
        stylingExample = new NavigationItem("Styling grid", "/chart/styling/styling-grid", stylingRoot);
        stylingRoot.subItems.push(stylingExample);
        stylingExample = new NavigationItem("Styling labels", "/chart/styling/styling-labels", stylingRoot);
        stylingRoot.subItems.push(stylingExample);
        var legendRoot = new NavigationItem("Legend", "./chart/legend/chart-legend", chartRoot);
        chartRoot.subItems.push(legendRoot);
        var behaviorsRoot = new NavigationItem("Interaction", undefined, chartRoot);
        chartRoot.subItems.push(behaviorsRoot);
        var interactionExample = new NavigationItem("Pan & Zoom", "./chart/behaviors/chart-pan-zoom", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);
        interactionExample = new NavigationItem("Pie selection", "./chart/behaviors/chart-pie-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);
        interactionExample = new NavigationItem("Series selection", "./chart/behaviors/chart-series-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);
        interactionExample = new NavigationItem("Datapoint selection", "./chart/behaviors/chart-datapoint-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);
        var axesRoot = new NavigationItem("Axes", undefined, chartRoot);
        chartRoot.subItems.push(axesRoot);
        var axesExample = new NavigationItem("Customization", "./chart/axes/customization/axes-customization", axesRoot);
        axesRoot.subItems.push(axesExample);
        axesExample = new NavigationItem("Multiple axes", "./chart/axes/multiple/multiple-axes", axesRoot);
        axesRoot.subItems.push(axesExample);
        axesExample = new NavigationItem("Negative values", "./chart/axes/negative-values/negative-values", axesRoot);
        axesRoot.subItems.push(axesExample);
        axesExample = new NavigationItem("Date time axis", "./chart/axes/date-time-axes/date-time-axes", axesRoot);
        axesRoot.subItems.push(axesExample);
        var annotationsRoot = new NavigationItem("Annotations", undefined, chartRoot);
        chartRoot.subItems.push(annotationsRoot);
        var annotationsExample = new NavigationItem("Plot band", "./chart/annotations/plot-band", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);
        annotationsExample = new NavigationItem("Band line", "./chart/annotations/band-line", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);
    };
    NavigationViewModel.prototype.buildListViewExamples = function (currentParent) {
        var currentItem = new NavigationItem("ListView", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Item Animations", "./listview/item-animations/item-animations", currentItem);
        currentItem.subItems.push(exampleItem);
        var layoutsItem = new NavigationItem("Item Layouts", undefined, currentItem);
        currentItem.subItems.push(layoutsItem);
        var layoutsExample = new NavigationItem("Linear", "./listview/item-layouts/item-layouts-linear", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid", "./listview/item-layouts/item-layouts-grid", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Staggered", "./listview/item-layouts/item-layouts-staggered", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        exampleItem = new NavigationItem("Item Reorder", "./listview/item-reorder/item-reorder", currentItem);
        currentItem.subItems.push(exampleItem);
        var selectionItem = new NavigationItem("Selection", undefined, currentItem);
        currentItem.subItems.push(selectionItem);
        var selectionExample = new NavigationItem("Single selection", "./listview/listview-selection/single-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Multiple selection", "./listview/listview-selection/multiple-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Programatic selection", "./listview/listview-selection/programmatic-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        exampleItem = new NavigationItem("Load on Demand", "./listview/load-on-demand/load-on-demand", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Observable Array", "./listview/observable-array/observable-array", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Observable Item", "./listview/observable-item/observable-item", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Pull to refresh", "./listview/pull-to-refresh/pull-to-refresh", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Swipe to execute", "./listview/swipe-execute/swipe-execute", currentItem);
        currentItem.subItems.push(exampleItem);
    };
    NavigationViewModel.prototype.buildSideDrawerExamples = function (currentParent) {
        var currentItem = new NavigationItem("SideDrawer", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Getting started", "./sidedrawer/getting-started/getting-started", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Position", "./sidedrawer/position/drawer-position", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Transitions", "./sidedrawer/transitions/drawer-transitions", currentItem);
        currentItem.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Events", "./sidedrawer/callbacks/drawer-callbacks", currentItem);
        currentItem.subItems.push(exampleItem);
    };
    NavigationViewModel.prototype.canMoveBack = function () {
        return this.hasBackNavigation;
    };
    NavigationViewModel.prototype.moveBack = function () {
        this.currentParent = this.currentParent.parent;
        this.hasBackNavigation = this.currentParent.parent !== undefined;
    };
    NavigationViewModel.prototype.initModelData = function () {
        if (this.currentParent && this.currentParent.module === undefined) {
            this.currentSubItems = this.currentParent.subItems;
        }
    };
    NavigationViewModel.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.itemIndex;
        var tappedItem = this.currentSubItems[itemIndex];
        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }
        if (tappedItem.subItems.length > 0) {
            frameModule.topmost().navigate({
                moduleName: "./navigation/category-list"
            });
        }
        else {
            if (tappedItem.module) {
                frameModule.topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                });
            }
        }
    };
    Object.defineProperty(NavigationViewModel.prototype, "hasBackNavigation", {
        get: function () {
            return this.get("_hasBack");
        },
        set: function (value) {
            this.set("_hasBack", value);
        },
        enumerable: true,
        configurable: true
    });
    return NavigationViewModel;
})(observableModule.Observable);
exports.NavigationViewModel = NavigationViewModel;
exports.navigationModel = new NavigationViewModel();