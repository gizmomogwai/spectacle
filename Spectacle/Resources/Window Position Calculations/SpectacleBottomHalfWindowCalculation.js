windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (r, visibleFrameOfSourceScreen, total) {
        if (SpectacleCalculationHelpers.isTopLeft(r, total) || SpectacleCalculationHelpers.isTopRight(r, total)) {
            return calcFullHeight(r, total);
        }

        if (SpectacleCalculationHelpers.isLeftHalf(r, total) || SpectacleCalculationHelpers.isRightHalf(r, total)) {
            return calcBottomHalf(r, total);
        }

        if (SpectacleCalculationHelpers.isBottomHalf(r, total)) {
            return total;
        }

        if (SpectacleCalculationHelpers.isTopHalf(r, total)) {
            // todo
        }
        if (SpectacleCalculationHelpers.almostEqual(r, total)) {
            return SpectacleCalculationHelpers.calcBottomHalf(total);
        }
        return r;
    }, "SpectacleWindowActionBottomHalf");
