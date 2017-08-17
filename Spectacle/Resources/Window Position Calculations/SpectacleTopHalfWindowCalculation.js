windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isBottomLeft(r, total) || SpectacleCalculationHelpers.isBottomRight(r, total)) {
            return SpectacleCalculationHelpers.calcFullHeight(r, total);
        }
        if (SpectacleCalculationHelpers.isTopRight(r, total) || SpectacleCalculationHelpers.isTopLeft(r, total)) {
            return SpectacleCalculationHelpers.calcTopHalf(total, total);
        }
        if (SpectacleCalculationHelpers.isLeftHalf(r, total) || SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return SpectacleCalculationHelpers.calcTopHalf(r, total);
        }
        if (SpectacleCalculationHelpers.isTopHalf(r, total)) {
            return total;
        }
        if (SpectacleCalculationHelpers.almostEqual(r, total)) {
            return SpectacleCalculationHelpers.calcTopHalf(total);
        }
        if (SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            return SpectacleCalculationHelpers.calcCentered(r, total);
        }
        return SpectacleCalculationHelpers.calcTopHalf(total, total);
}, "SpectacleWindowActionTopHalf");
