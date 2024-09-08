import AsideNavBar from "../../components/specific/AsideNavbar";
import AsideMenuItem from "../../components/common/AsideMenuItem";
import AsideProfile from "../../components/specific/AsideProfile";
import AsideMenu from "../../components/specific/AsideMenu";
import Icon from "../../components/common/IconsLib";

export default function AsideNavbar() {
  const profile = () => <AsideProfile name={"Yan Guilherme"} role={"admin"} />;

  return (
    <AsideNavBar profile={profile}>
      <AsideMenu>
        {/* Usuários */}
        <AsideMenuItem label={"Usuários"} href={"./users"} active={true}>
          <Icon iconName="UserIcon" className={"size-6 text-white"} />
        </AsideMenuItem>

        {/* Desempenho */}
        <AsideMenuItem label={"Desempenho"} href={"./dashboard"}>
          <Icon
            iconName="PresentationChartLineIcon"
            className={"size-6 text-white"}
          />
        </AsideMenuItem>

        {/* Documentos */}
        <AsideMenuItem label={"Documentos"} href={"./documents"}>
          <Icon
            iconName="ClipboardDocumentListIcon"
            className={"size-6 text-white"}
          />
        </AsideMenuItem>

        {/* Calendário */}
        <AsideMenuItem label={"Calendário"} href={"./calendar"}>
          <Icon iconName="CalendarDaysIcon" className={"size-6 text-white"} />
        </AsideMenuItem>
      </AsideMenu>
    </AsideNavBar>
  );
}
