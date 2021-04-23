import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import { russianCustomLocale } from 'locale';
import { createMuiTheme } from '@material-ui/core/styles';

import { UserList, PostList, PostEdit, PostCreate } from 'components'

const i18nProvider = polyglotI18nProvider(() => russianCustomLocale, 'ru');
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
  <Admin
    // theme={theme}
    title={() => <>my page title</>}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
    <Resource 
      name="users" 
      options={{ label: 'Пользователи' }}
      list={UserList}
      edit={EditGuesser}
    />
    <Resource
      name="posts"
      options={{ label: 'Посты' }}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    {/* <Resource
      name="photos"
      options={{ label: 'Фото' }}
      list={ListGuesser} 
    /> */}
    <Resource
      name="notFound"
      options={{ label: 'Битая ссылка' }}
      list={ListGuesser} 
    />
  </Admin>
);

export default App;