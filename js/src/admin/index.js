import app from "flarum/app";
import ExtensionPage from "flarum/admin/components/ExtensionPage";

app.initializers.add("justoverclock-contactme", () => {
  app.extensionData.for("justoverclock-contactme").registerSetting(
    {
      setting: "justoverclock-contactme.coordinates",
      name: "emailSettings",
      type: "email",
      required: true,
      label: app.translator.trans(
        "flarum-ext-contactme.admin.settings.emaillabel"
      ),
    },
    15
  );
});
