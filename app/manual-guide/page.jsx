import NavbarGuide from "./ManualGuideNavbar";

export default function ManualGuideLayout({ children }) {
  return (
    <div>
      <NavbarGuide />
      {children}
    </div>
  );
}
