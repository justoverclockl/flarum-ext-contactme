import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import ContactPage from './components/ContactPage';

app.initializers.add('justoverclock/flarum-ext-contactme', () => {

});

app.routes.contactPage = {
  path: '/contact-us',
  component: ContactPage,
};
extend(IndexPage.prototype, 'navItems', (navItems) => {
  navItems.add(
    'contactPage',
    <LinkButton href={app.route('contactPage')} icon="fas fa-at">
      {app.translator.trans('flarum-ext-contactme.forum.title')}
    </LinkButton>,
    100
  );

  return navItems;

});
