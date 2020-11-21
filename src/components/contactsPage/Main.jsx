import Add from "./Add";
import Search from "./Search";
import Contacts from "./Contacts";

const Main = () => {
  return (
    <main className="container-fluid pt-5 contacts-main">
      <Search />

      <Contacts />

      <Add />

      <div className="p-3"></div>
    </main>
  );
};

export default Main;
