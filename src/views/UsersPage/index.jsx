import Aside from './UsersPageComponents/Aside';
import UsersPageMain from './UsersPageComponents/Main';
import TabContextProvider from './UsersPageContexts/TabContext';

export default function UsersPage() {
  return (
    <TabContextProvider active="Estudantes">
      <Aside />
      <UsersPageMain />
    </TabContextProvider>
  );
}
