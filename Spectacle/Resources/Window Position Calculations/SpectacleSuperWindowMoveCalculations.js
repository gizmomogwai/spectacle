windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (windowRect,
              visibleFrameOfSourceScreen,
              visibleFrameOfDestinationScreen) {
        var r = SpectacleCalculationHelpers.isLeftOrRight(windowRect, visibleFrameOfDestinationScreen) ?
            SpectacleCalculationHelpers.copyRect(windowRect) :
            SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);

        return SpectacleCalculationHelpers.calcTopHalf(r);
    }, "SpectacleWindowActionSuperUp");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (windowRect,
              visibleFrameOfSourceScreen,
              visibleFrameOfDestinationScreen) {
        var r = SpectacleCalculationHelpers.isLeftOrRight(windowRect, visibleFrameOfDestinationScreen) ?
            SpectacleCalculationHelpers.copyRect(windowRect) :
            SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);

        return SpectacleCalculationHelpers.calcBottomHalf(r);
    }, "SpectacleWindowActionSuperDown");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (windowRect,
              visibleFrameOfSourceScreen,
              visibleFrameOfDestinationScreen) {
        var r = SpectacleCalculationHelpers.isTopOrBottom(windowRect, visibleFrameOfDestinationScreen) ?
            SpectacleCalculationHelpers.copyRect(windowRect) :
            SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);

        return SpectacleCalculationHelpers.calcLeftHalf(r);
    }, "SpectacleWindowActionSuperLeft");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(
    function (windowRect,
              visibleFrameOfSourceScreen,
              visibleFrameOfDestinationScreen) {
        var r = SpectacleCalculationHelpers.isTopOrBottom(windowRect, visibleFrameOfDestinationScreen) ?
            SpectacleCalculationHelpers.copyRect(windowRect) :
            SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);

        return SpectacleCalculationHelpers.calcRightHalf(r);
    }, "SpectacleWindowActionSuperRight");
