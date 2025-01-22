import SectionTitle from "@/components/common/section-title";
import Table from "@/components/common/table";
import { getAllUsers } from "@/services/users";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import UserRow from "./_components/UserRow";
import CustomList from "@/components/common/custom-list";

const Dashboard = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { dashboard } = await getDictionary(locale);

  // ################### FETCH ###################
  const users = await getAllUsers();

  // ################### DATA ###################
  const tableHeader: TTableHeader[] = [
    { id: 1, title: dashboard.name, isShow: true },
    { id: 2, title: dashboard.username, isShow: true },
    { id: 3, title: dashboard.phone, isShow: true },
    { id: 4, title: dashboard.city, isShow: true },
    { id: 5, title: "", isShow: true },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle title={dashboard.users} />

        <Table
          tableHeader={tableHeader}
          thClassName="p-4"
          tableClassName="min-w-[700px] w-full text-center"
          coverClassName="mt-6"
        >
          <CustomList
            records={users}
            renderItem={(record) => <UserRow {...record} />}
          />
        </Table>
      </div>
    </section>
  );
};

export default Dashboard;
