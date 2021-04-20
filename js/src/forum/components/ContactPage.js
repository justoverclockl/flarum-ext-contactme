import Page from "flarum/components/Page";
import IndexPage from "flarum/components/IndexPage";
import listItems from "flarum/helpers/listItems";
import Stream from "flarum/common/utils/Stream";
import Button from "flarum/common/components/Button";

export default class ContactPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.loading = false;
    this.message = Stream("");
    this.sent = false;
  }
  form() {
    if (!app.session.user) {
      return m("p", "Not logged in!");
    }
    if (this.sent) {
      return m("p", "Sent successful");
    }
    return m("form.Form-group", { onsubmit: this.submit.bind(this) }, [
      m("textarea.message1", {
        required: true,
        bidi: this.message,
        placeholder: app.translator.trans(
          "flarum-ext-contactme.forum.textAreaField"
        ),
      }),
      m(
        Button,
        { type: "submit", loading: this.loading, className: "Button" },
        app.translator.trans("flarum-ext-contactme.forum.sendForm")
      ),
    ]);
  }
  view() {
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m(
        ".container",
        m(".sideNavContainer", [
          m(
            "nav.IndexPage-nav.sideNav",
            m("ul", listItems(IndexPage.prototype.sidebarItems().toArray()))
          ),
          m(
            ".IndexPage-results.sideNavOffset",
            m(
              "h1",
              {
                class: "titolo1",
              },
              app.translator.trans("flarum-ext-contactme.forum.pageTitle")
            ),
            m(
              "p",
              {
                class: "banner-message",
              },
              app.translator.trans("flarum-ext-contactme.forum.pText")
            ),
            this.form()
          ),
        ])
      ),
    ]);
  }
  submit(e) {
    e.preventDefault();
    this.loading = true;
    m.redraw();
    app
      .request({
        method: "POST",
        url: app.forum.attribute("baseUrl") + "/sendmail",
        body: { message: this.message() },
      })
      .then(() => {
        this.loading = false;
        this.sent = true;
        m.redraw();
      });
  }
}
