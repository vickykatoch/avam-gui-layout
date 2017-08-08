import { GoldenLayoutConfiguration } from "./config";

export const DefaultGoldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [

    ],
    defaultLayout: {
        content: [],
        settings: {
            hasHeaders: true,
            constrainDragToContainer: true,
            reorderEnabled: true,
            selectionEnabled: false,
            popoutWholeStack: false,
            blockedPopoutsThrowError: true,
            closePopoutsOnUnload: true,
            showPopoutIcon: true,
            showMaximiseIcon: true,
            showCloseIcon: true

        }
    }
};