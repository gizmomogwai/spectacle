windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isBottomLeft(r, total) || SpectacleCalculationHelpers.isBottomRight(r, total)) {
            return SpectacleCalculationHelpers.calcFullHeight(r, total);
        }

        if (SpectacleCalculationHelpers.isLeftHalf(r, total) || SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return SpectacleCalculationHelpers.calcTopHalf(r, total);
        }

        if (SpectacleCalculationHelpers.isTopHalf(r, total)) {
            return total;
        }

        if (SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            // todo snap to floating pos
        }
        return r;
}, "SpectacleWindowActionTopHalf");
