sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var data = {
                employees: [
                    { id: 1, name: "Alice", department: "IT" },
                    { id: 2, name: "Bob", department: "HR" },
                    { id: 3, name: "Charlie", department: "Finance" }
                ]
            };
            return new JSONModel(data);
        }
    };

});