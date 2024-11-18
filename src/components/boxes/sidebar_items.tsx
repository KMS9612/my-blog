import "./sidebar_items.css";
import { IPropsSidebarItems } from "@/src/types/components/boxes/sidebar_items.types";
import { useRouter } from "next/navigation";

export default function SideBarItems(props: IPropsSidebarItems) {
  const route = useRouter();

  //   props로 받은 route로 페이지 이동시키는 함수
  const onClickRoute = (targetRoute: string) => {
    route.push(targetRoute);

    return;
  };
  return (
    <div
      className="sidebar_item place-center"
      onClick={() => onClickRoute(props.route)}
    >
      {props.innerText}
    </div>
  );
}
