import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
console.log(dataProvider)
const App = () => (
  <Admin
    title={() => <>my page title</>}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
    <Resource locale="ru" name="users" options={{ label: 'Пользователи' }} list={ListGuesser} />
    <Resource name="posts" options={{ label: 'Посты' }} list={ListGuesser} />
    <Resource name="photos" options={{ label: 'Фото' }} list={ListGuesser} />
  </Admin>
);

export default App;