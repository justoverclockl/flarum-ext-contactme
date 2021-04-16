import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/utils/humanTime';
import icon from 'flarum/helpers/icon';


export default class ContactPage extends Page {
  view() {
    return m('.IndexPage', [
      IndexPage.prototype.hero(),
      m('.container', m('.sideNavContainer', [
        m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
        m('.IndexPage-results.sideNavOffset',
          m("h1", {
            class: "Hero-title"},  app.translator.trans("flarum-ext-contactme.forum.pageTitle")),
          m("p", {
            class: "p"}, app.translator.trans("flarum-ext-contactme.forum.pText")),
          m('.Form-group', [
            m('input.FormControl', {
              name: 'username',
              type: 'textarea',
              placeholder: app.translator.trans('flarum-ext-contactme.forum.placeholderName'),
            }),
            m('input.FormControl', {
              name: 'username',
              type: 'textarea',
              placeholder: app.translator.trans('flarum-ext-contactme.forum.emailfield'),
            }),
            m('textarea.FormControl', {
              placeholder: app.translator.trans('flarum-ext-contactme.forum.textAreaField'),}),
            m('button.Button Button--primary Button--block',  {}, app.translator.trans('flarum-ext-contactme.forum.sendForm'))


          ])),

      ])),
    ]);
  }
}

