// Override
var RunLayout = function (parent, newWidth, newHeight) {
    // Skip hidden or !dirty sizer
    if (this.ignoreLayout) {
        return this;
    }

    var isTopmostParent = !parent;
    // Pre-processor, top parent only
    if (isTopmostParent) {
        this.preLayout();
    }

    // Calculate parent width
    newWidth = this.resolveWidth(newWidth);
    // Calculate all children width, run width wrap
    if (isTopmostParent) {
        this.resolveChildrenWidth(newWidth);
        this.runWidthWrap(newWidth);
    }
    // Calculate parent height
    newHeight = this.resolveHeight(newHeight);
    // The last chance of resolving size
    this.postResolveSize(newWidth, newHeight);
    // Resize parent
    this.resize(newWidth, newHeight);

    if (this.sizerEventsEnable) {
        if (this.layoutedChildren === undefined) {
            this.layoutedChildren = [];
        }
    }

    // Layout children    
    this.layoutChildren();

    // Layout background children
    this.layoutBackgrounds();

    if (this.sizerEventsEnable) {
        this.emit('postlayout', this.layoutedChildren, this);
        this.layoutedChildren.length = 0;
    }

    // Custom postLayout callback
    this.postLayout();

    // Post-processor, top parent only
    if (isTopmostParent) {
        this._postLayout();
    }

    return this;
}
export default RunLayout;