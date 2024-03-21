import "./styles.css";

interface IProps {
  children: React.ReactNode;
}

export const SideBar = (props: IProps) => {
  return (
    <div className="SideBar">
      {props.children}
    </div>
  );
};
