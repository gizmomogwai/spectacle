windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isBottomRight(r, total) || SpectacleCalculationHelpers.isTopRight(r, total)) {
            return SpectacleCalculationHelpers.calcFullWidth(r, total);
        }
        if (SpectacleCalculationHelpers.isTopLeft(r, total) || SpectacleCalculationHelpers.isBottomLeft(r, total)) {
            return SpectacleCalculationHelpers.calcLeftHalf(total, total);
        }
        if (SpectacleCalculationHelpers.isBottomHalf(r, total) || SpectacleCalculationHelpers.isTopHalf(r, total)) {
            return SpectacleCalculationHelpers.calcLeftHalf(r, total);
        }

        if (SpectacleCalculationHelpers.isLeftHalf(r, total)) {
            return total;
        }
        if (SpectacleCalculationHelpers.almostEqual(r, total)) {
            return SpectacleCalculationHelpers.calcLeftHalf(total);
        }
        if (SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return SpectacleCalculationHelpers.calcCentered(r, total);
        }

        return SpectacleCalculationHelpers.calcLeftHalf(total, total);
    }, "SpectacleWindowActionLeftHalf");
