import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JobDescriptionList } from "./jobDescription/JobDescriptionList";
import { JobDescriptionCreate } from "./jobDescription/JobDescriptionCreate";
import { JobDescriptionEdit } from "./jobDescription/JobDescriptionEdit";
import { JobDescriptionShow } from "./jobDescription/JobDescriptionShow";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Voice My Resume"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="JobDescription"
          list={JobDescriptionList}
          edit={JobDescriptionEdit}
          create={JobDescriptionCreate}
          show={JobDescriptionShow}
        />
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
