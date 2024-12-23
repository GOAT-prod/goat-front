import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Title } from "@/ui/title";
import { OrderedItem } from "../(shop-components)/Order/OrderedItem";

export default function ProfilePage() {
  return (
    <>
      {/* // Фиксированный блок с заголовком */}
      <div className="flex w-full">
        <div className="flex flex-col p-6 gap-6 border-r border-border">
          <Title
            text={"Профиль компании"}
            size="md"
            className="font-semibold"
            tag="h2"
          />
          <div className="p-6 flex flex-col gap-4 bg-background-secondary rounded-lg border-[1.5px] border-border">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="client-name">Название компании:</Label>
              <Input
                type="text"
                id="client-name"
                placeholder="Название компании"
                value={"ОАО Addidas Армавир Екомерс"}
                readOnly
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="client-address">Адрес:</Label>
              <Input
                type="text"
                id="client-address"
                placeholder="Адрес"
                value={"Penza Dom 4/3"}
                readOnly
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="client-inn">ИНН:</Label>
              <Input
                type="text"
                id="client-inn"
                placeholder="ИНН"
                value={"772795337563"}
                readOnly
              />
            </div>
            <Button>Редактировать данные компании</Button>
          </div>
          {/* Данные пользователя */}
          <Title
            text={"Данные пользователя"}
            size="md"
            className="font-semibold"
            tag="h2"
          />
          <div className="p-6 flex flex-col gap-4 bg-background-secondary rounded-lg border-[1.5px] border-border">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="user-email">Email:</Label>
              <Input
                type="email"
                id="user-email"
                placeholder="Email"
                value={"asgasgag@gmail.com"}
                readOnly
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2 hidden">
              <Label htmlFor="user-password">Пароль</Label>
              <Input
                type="password"
                id="user-password"
                placeholder="Пароль"
                value={"Penza Dom 4/3"}
                readOnly
              />
            </div>
            <Button>Редактировать пароль</Button>
          </div>
        </div>
        {/* Блок заказов */}
        <div
          className="flex flex-1 flex-col overflow-y-auto scrollbar relative"
          style={{ maxHeight: "calc(100vh - var(--header-height) - 2rem)" }}
        >
          <div className="flex w-full sticky top-0  bg-background  shadow-black/5 p-6 pb-0">
            <Title
              text={"Заказы компании"}
              size="md"
              className="font-semibold"
              tag="h2"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 ">
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
          </div>
        </div>
      </div>
    </>
  );
}
