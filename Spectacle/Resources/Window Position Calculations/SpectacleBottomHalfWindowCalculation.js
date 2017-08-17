windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isTopLeft(r, total) || SpectacleCalculationHelpers.isTopRight(r, total)) {
            return SpectacleCalculationHelpers.calcFullHeight(r, total);
        }
        if (SpectacleCalculationHelpers.isBottomRight(r, total) || SpectacleCalculationHelpers.isBottomLeft(r, total)) {
            return SpectacleCalculationHelpers.calcBottomHalf(total, total);
        }
        if (SpectacleCalculationHelpers.isLeftHalf(r, total) || SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return SpectacleCalculationHelpers.calcBottomHalf(r, total);
        }
        if (SpectacleCalculationHelpers.almostEqual(r, total)) {
            return SpectacleCalculationHelpers.calcBottomHalf(total);
        }
        if (SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            return total;
        }
        if (SpectacleCalculationHelpers.isTopHalf(r, total)) {
            return SpectacleCalculationHelpers.calcCentered(r, total);
        }
        return SpectacleCalculationHelpers.calcBottomHalf(total, total);
    }, "SpectacleWindowActionBottomHalf");
