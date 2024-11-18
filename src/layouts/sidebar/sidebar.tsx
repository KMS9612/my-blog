"use client";
import SideBarItems from "@/src/components/boxes/sidebar_items";
import "./sidebar.css";

export default function SideBar() {
  const sidebarItems = [
    { id: "listPage", innerText: "Post List", route: "/list" },
    { id: "contactPage", innerText: "Contact Me", route: "/contact" },
    { id: "category", innerText: "Category", route: "/category" },
  ];

  return (
    <div className="sidebar place-center-row p-4 gap-10">
      <h2 className="font-bold">KimDev Blog</h2>
      {/* Sidebar Items */}
      <div className="w-full">
        {sidebarItems.map((el) => (
          <SideBarItems key={el.id} innerText={el.innerText} route={el.route} />
        ))}
      </div>
    </div>
  );
}
