var SpectacleCalculationHelpers = (function () {
    var copyRect = function(rect) {
        return {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
        };
    };
    var rectCenteredWithinRect = function(rect1, rect2) {
        var centeredMidX = Math.abs(CGRectGetMidX(rect2) - CGRectGetMidX(rect1)) <= 1.0;
        var centeredMidY = Math.abs(CGRectGetMidY(rect2) - CGRectGetMidY(rect1)) <= 1.0;
        return CGRectContainsRect(rect1, rect2) && centeredMidX && centeredMidY;
    };
    var rectFitsWithinRect = function(rect1, rect2) {
        return (rect1.width <= rect2.width) && (rect1.height <= rect2.height);
    };
    var almostEqual = function(rect1, rect2) {
        if (Math.abs(rect1.x - rect2.x) > 30) return false;
        if (Math.abs(rect1.y - rect2.y) > 30) return false;
        if (Math.abs(rect1.x + rect1.width - rect2.x - rect2.width) > 60) return false;
        if (Math.abs(rect1.y + rect1.height - rect2.y - rect2.height) > 60) return false;

        return true;
    };
    var calcCentered = function(r, total) {
        var midX = total.x + total.width / 2.0;
        var midY = total.y + total.height / 2.0;

        return {
            x: midX - r.width / 2.0,
            y: midY - r.height / 2.0,
            width: r.width,
            height: r.height,
        };
    };
    var calcLeftHalf = function(rect) {
        var left = copyRect(rect);
        left.width = Math.floor(left.width / 2.0);
        return left;
    };
    var calcRightHalf = function(rect) {
        var right = copyRect(rect);
        right.width = Math.floor(right.width / 2.0);
        right.x += right.width + (rect.width % 2.0);
        return right;
    };
    var calcTopHalf = function(rect) {
        var upperHalf = copyRect(rect);
        upperHalf.height = Math.floor(upperHalf.height / 2.0);
        upperHalf.y += upperHalf.height + (rect.height % 2.0);
        return upperHalf;
    };
    var calcBottomHalf = function(rect) {
        var bottomHalf = copyRect(rect);
        bottomHalf.height = Math.floor(bottomHalf.height / 2.0);
        return bottomHalf;
    };
    var isLeftHalf = function(rect, total) {
        return almostEqual(rect, calcLeftHalf(total));
    };
    var isRightHalf = function(rect, total) {
        return almostEqual(rect, calcRightHalf(total));
    };
    var isLeftOrRightHalf = function(rect, total) {
        return isLeftHalf(rect, total) || isRightHalf(rect, total);
    };
    var isTopHalf = function(rect, total) {
        return almostEqual(rect, calcTopHalf(total));
    };
    var isBottomHalf = function(rect, total) {
        return almostEqual(rect, calcBottomHalf(total));
    };
    var isTopOrBottomHalf = function(rect, total) {
        return isTopHalf(rect, total) || isBottomHalf(rect, total);
    };
    var isTopLeft = function(rect, total) {
        return almostEqual(rect, calcTopLeft(total));
    };
    var isBottomLeft = function(rect, total) {
        return almostEqual(rect, calcBottomLeft(total));
    };
    var isTopRight = function(rect, total) {
        return almostEqual(rect, calcTopRight(total));
    };
    var isBottomRight = function(rect, total) {
        return almostEqual(rect, calcBottomRight(total));
    };
    var calcTopLeft = function(total) {
        return calcTopHalf(calcLeftHalf(total));
    };
    var calcBottomLeft = function(total) {
        return calcBottomHalf(calcLeftHalf(total));
    };
    var calcTopRight = function(total) {
        return calcTopHalf(calcRightHalf(total));
    };
    var calcBottomRight = function(total) {
        return calcBottomHalf(calcRightHalf(total));
    };
    var calcFullWidth = function(r, total) {
        var res = copyRect(r);
        res.x = 0;
        res.width = total.width;
        return res;
    };
    var calcFullHeight = function(r, total) {
        var res = copyRect(r);
        res.y = 0;
        res.height = total.height;
        return res;
    };
    return {
        copyRect: copyRect,
        rectCenteredWithinRect: rectCenteredWithinRect,
        rectFitsWithinRect: rectFitsWithinRect,
        almostEqual: almostEqual,
        isLeftHalf: isLeftHalf,
        isRightHalf: isRightHalf,
        isLeftOrRightHalf: isLeftOrRightHalf,
        isTopHalf: isTopHalf,
        isBottomHalf: isBottomHalf,
        isTopOrBottomHalf: isTopOrBottomHalf,
        calcTopHalf: calcTopHalf,
        calcBottomHalf: calcBottomHalf,
        calcLeftHalf: calcLeftHalf,
        calcRightHalf: calcRightHalf,
        isTopLeft: isTopLeft,
        isBottomLeft: isBottomLeft,
        isTopRight: isTopRight,
        isBottomRight: isBottomRight,
        calcFullWidth: calcFullWidth,
        calcFullHeight: calcFullHeight,
        calcCentered: calcCentered,
    };
})();
