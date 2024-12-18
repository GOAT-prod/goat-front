import { OrdersPanel } from "./(components)/Orders/DBOrdersPanel";
import { UsersPanel } from "./(components)/Users/DBUsersPanel";

export default async function DatabaseAdmin() {
  return (
    <>
      <UsersPanel />
      <OrdersPanel />
    </>
  );
}
