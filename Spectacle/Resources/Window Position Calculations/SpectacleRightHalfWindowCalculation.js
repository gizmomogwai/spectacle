windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isTopLeft(r, total) || SpectacleCalculationHelpers.isBottomLeft(r, total)) {
            return SpectacleCalculationHelpers.fullWidth(r, total);
        }

        if (SpectacleCalculationHelpers.isTopHalf(r, total) || SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            return SpectacleCalculationHelpers.calcRightHalf(r, total);
        }

        if (SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return total;
        }

        if (SpectacleCalculationHelpers.isLeftHalf(r, total)) {
            // todo
        }
        return r;
    }, "SpectacleWindowActionRightHalf");
