import { syncUser } from '~/lib/queries/user';

const DashboardPage = async () => {
  await syncUser();

  return <div>Dashboard</div>;
};

export default DashboardPage;
