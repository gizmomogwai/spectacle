windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isBottomRight(r, total) || SpectacleCalculationHelpers.isTopRight(r, total)) {
            return SpectacleCalculationHelpers.calcFullWidth(r, total);
        }

        if (SpectacleCalculationHelpers.isBottomHalf(r, total) || SpectacleCalculationHelpers.isTopHalf(r, total)) {
            return SpectacleCalculationHelpers.calcLeftHalf(r, total);
        }

        if (SpectacleCalculationHelpers.isLeftHalf(r, total)) {
            return total;
        }

        if (SpectacleCalculationHelpers.isRightHalf(r, total)) {
            // todo back to float
        }
        return r;
    }, "SpectacleWindowActionLeftHalf");
