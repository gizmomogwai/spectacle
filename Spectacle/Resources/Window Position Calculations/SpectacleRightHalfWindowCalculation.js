windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isTopLeft(r, total) || SpectacleCalculationHelpers.isBottomLeft(r, total)) {
            return SpectacleCalculationHelpers.calcFullWidth(r, total);
        }
        if (SpectacleCalculationHelpers.isTopRight(r, total) || SpectacleCalculationHelpers.isBottomRight(r, total)) {
            return SpectacleCalculationHelpers.calcRightHalf(total, total);
        }
        if (SpectacleCalculationHelpers.isTopHalf(r, total) ||
            SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            return SpectacleCalculationHelpers.calcRightHalf(r, total);
        }
        if (SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return total;
        }
        if (SpectacleCalculationHelpers.almostEqual(r, total)) {
            return SpectacleCalculationHelpers.calcRightHalf(total);
        }
        if (SpectacleCalculationHelpers.isLeftHalf(r, total)) {
            return SpectacleCalculationHelpers.calcCentered(r, total);
        }

        return SpectacleCalculationHelpers.calcRightHalf(total, total);
    }, "SpectacleWindowActionRightHalf");
